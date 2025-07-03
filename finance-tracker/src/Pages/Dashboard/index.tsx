import React, { useState, useMemo } from "react";
import { Container, Content } from "./style";
import { useTheme } from "styled-components";

import SelectInput from "../../components/SelectInput";
import ContentHeader from "../../components/ContentHeader";
import WalletBox from "../../components/WalletBox";
import MessageBox from "../../components/MessageBox";
import PieChartsBox from "../../components/PieChartBox";
import HistoryBox from "../../components/HistoryBox";
import BarChartBox from "../../components/BarChartBox";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

import happyImage from "../../utils/assets/good.svg";
import opsImage from "../../utils/assets/bad.svg";
import sadImage from "../../utils/assets/sad.svg";

const Dashboard: React.FC = () => {
  const theme = useTheme();

  const listData = useMemo(() => {
    return [...gains, ...expenses].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, []);

  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );

  const months = useMemo(() => {
    const monthLabels = Array.from({ length: 12 }, (_, i) => {
      const label = new Date(0, i).toLocaleString("default", { month: "long" });
      return {
        value: String(i + 1),
        label: label.charAt(0).toUpperCase() + label.slice(1),
      };
    });
    return monthLabels;
  }, []);

  const years = useMemo(() => {
    const uniqueYears = Array.from(
      new Set(listData.map((item) => new Date(item.date).getFullYear()))
    );
    return uniqueYears.map((year) => ({ value: year, label: year }));
  }, [listData]);

  const totalExpenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach((expense) => {
      const date = new Date(expense.date);
      if (
        date.getMonth() + 1 === monthSelected &&
        date.getFullYear() === yearSelected
      ) {
        total += Number(expense.amount);
      }
    });
    return total;
  }, [monthSelected, yearSelected]);

  const totalIncome = useMemo(() => {
    let total: number = 0;

    gains.forEach((gain) => {
      const date = new Date(gain.date);
      if (
        date.getMonth() + 1 === monthSelected &&
        date.getFullYear() === yearSelected
      ) {
        total += Number(gain.amount);
      }
    });
    return total;
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalIncome - totalExpenses;
  }, [totalIncome, totalExpenses]);

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: "OHH NOOO!",
        description: "Your balance is negative",
        icon: sadImage,
        footerText: "Check your expenses",
      };
    } else if (totalBalance > 0) {
      return {
        title: "YAY!",
        description: "Your balance is positive",
        icon: happyImage,
        footerText: "Keep up the good work!",
      };
    } else if (totalBalance === 0) {
      return {
        title: "Oops!",
        description: "Your balance is zero",
        icon: opsImage,
        footerText: "Try to balance your income and expenses",
      };
    }
  }, [totalBalance]);

  const relationExpenseVersusIncome = useMemo(() => {
    const total = totalIncome + totalExpenses;
    const percentIncome = total === 0 ? 0 : Number(((totalIncome / total) * 100).toFixed(1));
    const percentExpenses = total === 0 ? 0 : Number(((totalExpenses / total) * 100).toFixed(1));

    const data = [
      {
        name: "Income",
        value: totalIncome,
        percent: percentIncome,
        color: theme.colors.secondary,
      },
      {
        name: "Expenses",
        value: totalExpenses,
        percent: percentExpenses,
        color: theme.colors.primary,
      },
    ];

    return data;
  }, [totalIncome, totalExpenses, theme.colors.secondary, theme.colors.primary]);

  const relationExpenseFrequentlyVersusOccasionally = useMemo(() => {
    let amountFrequent = 0; 
    let amountOccasional = 0;

    expenses
      .filter((expense) => {
        const date = new Date(expense.date);
        return (
          date.getMonth() + 1 === monthSelected &&
          date.getFullYear() === yearSelected
        );
      })
      .forEach((expense) => {
        if (expense.frequency === "frequently") {
          amountFrequent += Number(expense.amount);
        } else if (expense.frequency === "occasionally") {
          amountOccasional += Number(expense.amount);
        }
      });

    const total = amountFrequent + amountOccasional;
    const percentFrequent = total === 0 ? 0 : Number(((amountFrequent / total) * 100).toFixed(1));
    const percentOccasional = total === 0 ? 0 : Number(((amountOccasional / total) * 100).toFixed(1));

    return [
      {
        name: 'Frequently',
        amount: amountFrequent,
        percent: percentFrequent,
        color: theme.colors.exit,
      },
      {
        name: 'Occasionally',
        amount: amountOccasional,
        percent: percentOccasional,
        color: theme.colors.primary,
      }
    ];
  }, [monthSelected, yearSelected, theme.colors.primary, theme.colors.exit]);

const relationIncomeFrequentlyVersusOccasionally = useMemo(() => {
    let amountFrequent = 0; 
    let amountOccasional = 0;

    gains
      .filter((gain) => {
        const date = new Date(gain.date);
        return (
          date.getMonth() + 1 === monthSelected &&
          date.getFullYear() === yearSelected
        );
      })
      .forEach((gain) => {
        if (gain.frequency === "frequently") {
          amountFrequent += Number(gain.amount);
        } else if (gain.frequency === "occasionally") {
          amountOccasional += Number(gain.amount);
        }
      });

    const total = amountFrequent + amountOccasional;
    const percentFrequent = total === 0 ? 0 : Number(((amountFrequent / total) * 100).toFixed(1));
    const percentOccasional = total === 0 ? 0 : Number(((amountOccasional / total) * 100).toFixed(1));

    return [
      {
        name: 'Frequently',
        amount: amountFrequent,
        percent: percentFrequent,
        color: theme.colors.secondary,
      },
      {
        name: 'Occasionally',
        amount: amountOccasional,
        percent: percentOccasional,
        color: theme.colors.entry,
      }
    ];
  }, [monthSelected, yearSelected, theme.colors.primary, theme.colors.exit]);

  console.log("relationExpenseFrequentlyVersusOccasionally", relationExpenseFrequentlyVersusOccasionally);

  const historyData = useMemo(() => {
    return months
      .map((month) => {
        const monthNumber = Number(month.value);
        const filteredGains = gains.filter(
          (gain) =>
            new Date(gain.date).getMonth() + 1 === monthNumber &&
            new Date(gain.date).getFullYear() === yearSelected
        );
        const filteredExpenses = expenses.filter(
          (expense) =>
            new Date(expense.date).getMonth() + 1 === monthNumber &&
            new Date(expense.date).getFullYear() === yearSelected
        );

        const amountInput = filteredGains.reduce(
          (acc, gain) => acc + Number(gain.amount),
          0
        );
        const amountOutput = filteredExpenses.reduce(
          (acc, expense) => acc + Number(expense.amount),
          0
        );

        return {
          month: month.label.slice(0, 3),
          amountInput,
          amountOutput,
        };
      })
      .filter((item) => item.amountInput !== 0 || item.amountOutput !== 0);
  }, [months, yearSelected]);

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
          amount={totalBalance}
          footerlabel={`Updated based on income and expenses`}
          icon="dollar"
          color={theme.colors.tertiary}
        />
        <WalletBox
          title="Income"
          amount={totalIncome}
          footerlabel={`Referente ao mês de ${
            months.find((m) => m.value === String(monthSelected))?.label
          } de ${yearSelected}`}
          icon="arrowUp"
          color={theme.colors.secondary}
        />
        <WalletBox
          title="Expenses"
          amount={totalExpenses}
          footerlabel={`Referente ao mês de ${
            months.find((m) => m.value === String(monthSelected))?.label
          } de ${yearSelected}`}
          icon="arrowDown"
          color={theme.colors.primary}
        />

        {message && (
          <MessageBox
            title={message.title}
            icon={message.icon}
            description={message.description}
            footerText={message.footerText}
          />
        )}

        <PieChartsBox data={relationExpenseVersusIncome} />
        <HistoryBox data={historyData} lineColorAmountInput={theme.colors.secondary} lineColorAmountOutput={theme.colors.primary} />
        <BarChartBox title="Income" data={relationIncomeFrequentlyVersusOccasionally}/>
        <BarChartBox title="Expenses" data={relationExpenseFrequentlyVersusOccasionally}/>
        </Content>
    </Container>
  );
};
export default Dashboard;