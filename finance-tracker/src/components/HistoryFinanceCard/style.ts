import styled from "styled-components";

interface ITagProps {
  color: string;
}

export const Container = styled.li`
  background-color: ${(props) => props.theme.colors.back};
  color: ${(props) => props.theme.colors.white};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 10px;
  border-radius: 10px;
  list-style: none;
  margin: 10px 0;
  cursor: pointer;
  transition: all 0.3s;

  position: relative;

  &:hover {
    opacity: 0.7;
    transform: translateY(-10px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
  }
  > div span {
    font-weight: 500;
    font-size: 20px;
  }
  > div small {
    font-size: 12px;
  }
`;

export const Tag = styled.div<ITagProps>`
  width: 12px;
  height: 60%;
  background-color: ${(props) => props.color};
  position: absolute;
  left: 0;
  top: 10;
  border-radius: 5px;
`;
