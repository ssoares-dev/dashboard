import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 25px;

    > h4 {
        color: ${(props) => props.theme.colors.white};
    
        &::after {
            content: "";
            display: block;
            width: 55px;
            height: 7px;
            background-color: ${(props) => props.theme.colors.dashboard};
            margin-top: 5px;
            border-radius: 5px;
        }
    }
`;

export const TitleContainer = styled.h4` `;

export const Controllers = styled.div` `;