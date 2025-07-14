import styled, {css} from "styled-components";

interface MenuItemLinkProps {
  activecolor?: string;
}

interface IContainerProps {
  isOpen: boolean;
}

interface IThemeToggleFooterProps {
  isOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.backie};
  padding-left: 20px;
  border-right: 1px solid ${(props) => props.theme.colors.gray};

  position: relative;

  @media (max-width: 600px) {
    padding-left: 7px;
    position: fixed;
    z-index: 2;
    border-bottom: 1px solid ${(props) => props.theme.colors.gray}; 
    border-right: none;
    width: 170px;

    height: ${(props) => (props.isOpen ? "100vh" : "70px")};
    overflow: hidden;

    ${(props) => (props.isOpen && css`
      border: none;
      border-right: 1px solid ${props.theme.colors.gray};

    `)}

  }
`;

export const Header = styled.header`
  display: flex;
  height: 70px;
  align-items: center;

`;

export const LogImg = styled.img`
  height: 40px;
  width: 40px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.2em;
  margin-left: 10px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const MenuContainer = styled.nav`
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

export const MenuItemButton = styled.button<MenuItemLinkProps>`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.backie};
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

export const ToggleMenu = styled.button`
  width: 40px;
  height: 40px;

  border-radius: 5px;
  font-size: 22px;
  background: linear-gradient(135deg, #c1a0bf 18%, #b73e71 71%);
  color: ${(props) => props.theme.colors.white};

  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
  display: none;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left : 10px;
  }
`;

export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
  display: none;
  position: absolute;
  bottom: 30px;

  @media (max-width: 470px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
  }
`;