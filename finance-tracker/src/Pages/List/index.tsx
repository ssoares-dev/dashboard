import React, { useMemo, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Container, Content, Filters, FiltersButton } from "./style";
import { useTheme } from "styled-components";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";

interface IData {
  description: string;
  amountFormatted: string;
  tagColor: string;
  frequency: string;
  dateFormatted: string;
}

const List: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);

  const [monthSelected, setMonthSelected] = useState<number>(
   (new Date().getMonth() + 1)
  );
  const [yearSelected, setYearSelected] = useState<number>(
    (new Date().getFullYear())
  );

  const [frequencyFilterSelected, setFrequencyFilterSelected] = useState([
    "frequently",
    "occasionally",
  ]);

  const movementType = useParams().type || "income";

  const title = useMemo(() => {
    return movementType === "income" ? "Income" : "Expenses";
  }, [movementType]);

  const theme = useTheme();

  const lineColor = useMemo(() => {
    return movementType === "income" ? theme.colors.secondary : theme.colors.primary;
  }, [movementType, theme]);

  const listData = useMemo(() => {
    return movementType === "income" ? gains : expenses;
  }, [movementType]);

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

  useEffect(() => {
    const filteredDate = listData.filter((item) => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return (
        month === monthSelected &&
        year === yearSelected &&
        frequencyFilterSelected.includes(item.frequency)
      );
    });

    const dataFormatted = filteredDate.map((item) => {
      return {
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        tagColor:
          movementType === "income"
            ? item.frequency === "frequently"
              ? theme.colors.secondary
              : theme.colors.entry
            : item.frequency === "frequently"
            ? theme.colors.exit
            : theme.colors.primary,
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
      };
    });

    setData(dataFormatted);
  }, [monthSelected, yearSelected, listData, frequencyFilterSelected, movementType, theme]);

  const handleFrequencyFilter = (frequency: string) => {
    const alreadySelected = frequencyFilterSelected.includes(frequency);

    if (alreadySelected) {
      setFrequencyFilterSelected(
        frequencyFilterSelected.filter((item) => item !== frequency)
      );
    } else {
      setFrequencyFilterSelected([...frequencyFilterSelected, frequency]);
    }
  };

  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
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

      <Filters>
        <FiltersButton
          type="button"
          className={`tag-filter tag-filter-frequently ${
            movementType === "income" ? "income-theme" : "expense-theme"
          }${frequencyFilterSelected.includes("frequently") ? " selected" : ""}`}
          onClick={() => handleFrequencyFilter("frequently")}
          filterType={movementType}
          selected={frequencyFilterSelected.includes("frequently")}
        >
          Frequently
        </FiltersButton>
        <FiltersButton
          type="button"
          className={`tag-filter tag-filter-occasionally ${
            movementType === "income" ? "income-theme" : "expense-theme"
          }${frequencyFilterSelected.includes("occasionally") ? " selected" : ""}`}
          onClick={() => handleFrequencyFilter("occasionally")}
          filterType={movementType}
          selected={frequencyFilterSelected.includes("occasionally")}
        >
          Occasionally
        </FiltersButton>
      </Filters>

      <Content>
        {data.map((item, index) => (
          <HistoryFinanceCard
            key={index}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.dateFormatted}
            amount={item.amountFormatted}
          />
        ))}
      </Content>
    </Container>
  );
};
export default List;
