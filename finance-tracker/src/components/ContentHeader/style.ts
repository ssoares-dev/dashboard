import styled from "styled-components";

interface ITitleContainerProps {
    lineColor: string;
}

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 25px;
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
`;

export const Controllers = styled.div` 
    display: flex;
    flex-direction: row;
    

`;