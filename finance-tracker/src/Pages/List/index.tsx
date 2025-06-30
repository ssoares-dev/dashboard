import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ContentHeader from "../../components/ContentHeader";
import { Container, Content, Filters, FiltersButton } from "./style";
import { useTheme } from "styled-components";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

interface IRouteParams {
  type: string;
}

interface IData {
  description: string;
  amountFormatted: string;
  type: string;
  frequency: string;
  date: string;
}

const List: React.FC = () => {
  const [data, setData] = useState([]);

  const type = useParams().type || "income";

  const title = useMemo(() => {
    return type === 'income' ? "Income" : "Expenses";
  }, [type]);

  const theme = useTheme();

  const lineColor = useMemo(() => {
    return type === 'income' ? theme.colors.secondary : theme.colors.primary;
  }, [type, theme]);


  const months = [
    { value: 1, label: "Janeiro" },
    { value: 2, label: "Fevereiro" },
    { value: 3, label: "Março" },
    { value: 4, label: "Abril" },
    { value: 5, label: "Maio" },
    { value: 6, label: "Junho" },
    { value: 7, label: "Julho" },
    { value: 8, label: "Agosto" },
    { value: 9, label: "Setembro" },
    { value: 10, label: "Outubro" },
    { value: 11, label: "Novembro" },
    { value: 12, label: "Dezembro" },
  ];

  const years = [
    { value: 2025, label: 2025 },
    { value: 2024, label: 2024 },
    { value: 2023, label: 2023 },
  ];

  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <FiltersButton
          type="button"
          className={`tag-filter tag-filter-frequently ${
            type === "income" ? "income-theme" : "expense-theme"
          }`}
          onClick={() => {}}
          filterType={type}
        >
          Frequently
        </FiltersButton>
        <FiltersButton
          type="button"
          className={`tag-filter tag-filter-occasionally ${
            type === "income" ? "income-theme" : "expense-theme"
          }`}
          onClick={() => {}}
          filterType={type}
        >
          Occasionally
        </FiltersButton>
      </Filters>

      <Content>
        <HistoryFinanceCard
          tagColor={theme.colors.register}
          title="Comunicações"
          subtitle="30/06/2025"
          amount="10"
        />
      </Content>
    </Container>
  );
};
export default List;
