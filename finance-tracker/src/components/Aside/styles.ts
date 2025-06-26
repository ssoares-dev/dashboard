import styled from "styled-components";

interface MenuItemLinkProps {
    activecolor?: string;
}

export const Container = styled.div`
    grid-area: AS;
    background-color: ${(props) => props.theme.colors.backie};
    padding-left: 20px;
    border-right: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Header = styled.header`
    display: flex;
    height: 70px;
    align-items: center;
`;

export const LogImg = styled.img`
    height: 40px;
    width: 40px;
`;

export const Title = styled.h3`
    color: ${(props) => props.theme.colors.white};
    font-size: 1.2em;
    margin-left: 10px;
`;

export const MenuContainer  = styled.nav`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;


export const MenuItemLink = styled.a<MenuItemLinkProps>`
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    font-size: 1.1em;
    padding: 10px;
    border-radius: 5px;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    gap: 5px;

    > svg {
        font-size: 24px;
    }

    &:hover {
        color: ${(props) => props.activecolor || props.theme.colors.white};
    }
    &.active {
        color: ${(props) => props.activecolor || props.theme.colors.white};
    }
`;