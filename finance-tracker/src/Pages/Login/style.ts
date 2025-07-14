import styled from "styled-components";

export const Container = styled.div`

    height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.backie};
`;

export const Logo = styled.div`

    display: flex;
    align-items: center;
    margin-bottom: 20px;

    img {
        width: 40px;
        height: 40px;
        margin-bottom: 10px;
    }

    h2 {
        color: ${({ theme }) => theme.colors.white};
        margin-left: 10px;
    }
`;

export const Form = styled.form`
    width: 300px;
    height: 300px;
    padding: 30px;
    border-radius: 10px;
    background: radial-gradient(circle at 50% 50%, #C1A0BF 54%, #B73E71 100%);
`;

export const FormTitle = styled.h1`
    margin-bottom: 40px;
    color: ${({ theme }) => theme.colors.white};


`;