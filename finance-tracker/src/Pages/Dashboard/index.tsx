import React from "react";
import ContentHeader from "../../components/ContentHeader";
import { Container } from "./style";
import { useTheme } from "styled-components";

import SelectInput from "../../components/SelectInput";

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const options1 = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor={theme.colors.dashboard}>
        <SelectInput options={options1} />
        <SelectInput options={options1} />
      </ContentHeader>
    </Container>
  );
};
export default Dashboard;
