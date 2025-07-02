import styled from "styled-components";

export const Container = styled.div`
  width: 48%;
  height: 260px;
  background-color: ${({ theme }) => theme.colors.back};
  border-radius: 7px;
  margin: 10px 0;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  > h1 {
    display: flex;
    align-items: baseline;
    font-size: 30px;

    > img {
      width: 40px;
      margin-left: 10px;
    }
  }

  > p {
    font-size: 16px;
    margin-top: 10px;
  }
`;

export const Footer = styled.div`
  > span {
    color: ${({ theme }) => theme.colors.white};
  }
`;
