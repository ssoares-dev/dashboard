import React from "react";
import {
  Container,
  Header,
  LogImg,
  Title,
  MenuContainer,
  MenuItemLink,
} from "./styles";
import { useTheme } from "styled-components";
import {
  MdDashboard,
  MdExitToApp,
  MdAccountBalanceWallet,
  MdPayment,
  MdReceipt,
} from "react-icons/md";

const Aside: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <Header>
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
        <MenuItemLink href="#" activecolor={theme.colors.exit}>
          <MdExitToApp />
          Exit
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};
export default Aside;
