import styled, {keyframes} from "styled-components";

const animate = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0;
  } 
  50% {
    opacity: .3;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

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

  animation: ${animate} 0.5s;

  @media (max-width: 770px) {
    width: 100%;
    height: 200px;
    padding: 20px 10px;
  }
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

  @media (max-width: 770px) {
    width: 100%;

    > h1 {
      font-size: 24px;

      > img {
        height: 20px;
        width: 20px;
        margin-left: 5px;
      }
    }

    > p {
      font-size: 14px;
    }
  }

  @media (max-width: 420px) {

    width: 100%;
    height: auto;

    > h1 {
      font-size: 20px;

      > img {
        height: 18px;
        width: 18px;
        margin-left: 5px;
      }
    }

    > p {
      margin-bottom: 15px;
      font-size: 12px;
    }
  }

`;

export const Footer = styled.div`
  > span {
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 770px) {
    > span {
      font-size: 14px;
    }
  }
`;