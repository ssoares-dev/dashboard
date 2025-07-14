import React, {useState} from "react";
import {
  Container,
  Header,
  LogImg,
  Title,
  MenuContainer,
  MenuItemLink,
  MenuItemButton,
  ToggleMenu,
  ThemeToggleFooter,
} from "./styles";

import {
  MdDashboard,
  MdExitToApp,
  MdAccountBalanceWallet,
  MdPayment,
  MdReceipt,
  MdClose,
  MdMenu,
} from "react-icons/md";

import { useAuth } from "../../hooks/auth";
import { useTheme } from "../../hooks/theme";

import Toggle from "../Toggle";

const Aside: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  const { logout } = useAuth();

  const handleLogout = () => {
    window.location.replace("/");
    logout();
  }

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened);
  }

  const handleChangeTheme = () => {
    toggleTheme();
    setDarkTheme(!darkTheme);
  }

  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
  const [darkTheme, setDarkTheme] = useState(() => theme.title === "dark" ? true : false);

  return (
    <Container isOpen={toggleMenuIsOpened}>
      <Header>
        <ToggleMenu onClick={handleToggleMenu}>
          {toggleMenuIsOpened ? (
            <MdClose
            />
          ) : (
            <MdMenu
            />
          )}
        </ToggleMenu>

        <LogImg
          src={"../assets/app-icon.svg"}
          alt="Logo Finance Tracker"
        ></LogImg>
        <Title>Finance Tracker</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="/dashboard" activecolor={theme.colors.dashboard}>
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink href="#" activecolor={theme.colors.register}>
          <MdAccountBalanceWallet />
          Transactions
        </MenuItemLink>
        <MenuItemLink href="/list/income" activecolor={theme.colors.secondary}>
          <MdPayment />
          Income
        </MenuItemLink>
        <MenuItemLink href="/list/expenses" activecolor={theme.colors.primary}>
          <MdReceipt />
          Expenses
        </MenuItemLink>
        <MenuItemButton onClick={handleLogout} activecolor={theme.colors.exit}>
          <MdExitToApp />
          Exit
        </MenuItemButton>
      </MenuContainer>

      <ThemeToggleFooter isOpen={toggleMenuIsOpened}>
        <Toggle
          labelLeft="Light"
          labelRight="Dark"
          checked={darkTheme}
          onChange={handleChangeTheme}
        />
      </ThemeToggleFooter>
    </Container>
  );
};
export default Aside;
