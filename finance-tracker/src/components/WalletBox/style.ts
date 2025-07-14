import styled from "styled-components";

interface IContainerProps {
  color: string;
}

export const Container = styled.div<IContainerProps>`
  background-color: ${({ color }) => color};
  width: 32%;
  height: 150px;

  border-radius: 7px;
  margin: 10px 0;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.white};

  position: relative;
  overflow: hidden;

  > img {
    position: absolute;
    right: -30px;
    top: -10px;
    height: 110%;
    opacity: 0.3;
  }

  > span {
    font-size: 14px;
    font-weight: 500;
  }

  > small {
    font-size: 12px;
    position: absolute;
    bottom: 10px;
  }

  @media (max-width: 770px) {
    width: 100%;
    height: 120px;
    margin: 10px 0;

    > span {
      font-size: 14px;
    }

    > small {
      font-size: 12px;
      position: absolute;
      bottom: 5px;
    }

    > h1 {
      font-size: 22px;
      word-wrap: break-word;
    }

  }

  @media (max-width: 420px) {
    width: 100%;
    height: 120px;
    margin: 10px 0;

    > span {
      font-size: 14px;
    }

    > small {
      font-size: 12px;
      position: absolute;
      bottom: 5px;
    }

    > h1 {
      font-size: 22px;
      word-wrap: break-word;
      width: auto;
    }
  }
`;