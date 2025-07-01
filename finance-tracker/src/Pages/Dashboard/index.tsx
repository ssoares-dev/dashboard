import React, { useState, useMemo } from "react";
import { Container, Content } from "./style";
import { useTheme } from "styled-components";

import SelectInput from "../../components/SelectInput";
import ContentHeader from "../../components/ContentHeader";
import WalletBox from "../../components/WalletBox";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

const Dashboard: React.FC = () => {
  const theme = useTheme();
  
  const listData = useMemo(() => {
    return [...gains, ...expenses].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );
  
  const months = useMemo(() => {
    const uniqueMonths = Array.from(
      new Set(listData.map((item) => new Date(item.date).getMonth() + 1))
    );
    return uniqueMonths.map((month) => {
      const label = new Date(0, month - 1).toLocaleString("default", {
        month: "long",
      });
      return {
        value: String(month),
        label: label.charAt(0).toUpperCase() + label.slice(1),
      };
    });
  }, [listData]);

  const years = useMemo(() => {
    const uniqueYears = Array.from(
      new Set(listData.map((item) => new Date(item.date).getFullYear()))
    );
    return uniqueYears.map((year) => ({ value: year, label: year }));
  }, [listData]);

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor={theme.colors.dashboard}>
        <SelectInput
          options={months}
          onChange={(e) => setMonthSelected(Number(e.target.value))}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => setYearSelected(Number(e.target.value))}
          defaultValue={yearSelected}
        />
      </ContentHeader>
      <Content>
      <WalletBox 
        title="Balance"
        amount={150.00}
        footerlabel={`Referente ao mês de ${months.find(m => m.value === String(monthSelected))?.label} de ${yearSelected}`}
        icon="dollar"
        color={theme.colors.tertiary}
      />
      <WalletBox 
        title="Income"
        amount={150.00}
        footerlabel={`Referente ao mês de ${months.find(m => m.value === String(monthSelected))?.label} de ${yearSelected}`}
        icon="arrowUp"
        color={theme.colors.secondary}
      />
      <WalletBox 
        title="Expenses"
        amount={150.00}
        footerlabel={`Referente ao mês de ${months.find(m => m.value === String(monthSelected))?.label} de ${yearSelected}`}
        icon="arrowDown"
        color={theme.colors.primary}
      />
      </Content>
    </Container>
  );
};
export default Dashboard;
