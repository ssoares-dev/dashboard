import styled from "styled-components";

interface ITitleContainerProps {
  lineColor: string;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 25px;

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TitleContainer = styled.div<ITitleContainerProps>`
  > h1 {
    color: ${(props) => props.theme.colors.white};

    &::after {
      content: "";
      display: block;
      width: 55px;
      height: 7px;
      background-color: ${(props) => props.lineColor};
      border-radius: 5px;
    }
  }

  @media (max-width: 420px) {
    > h1 {
      font-size: 22px;
      &::after {
        width: 35px;
      }
    }
  }
`;

export const Controllers = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 400px) {
    width: 100%;
    justify-content: space-around;
    margin-top: 20px;
  }
`;
