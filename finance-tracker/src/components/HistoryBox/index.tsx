import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  Container,
  ChartContainer,
  Header,
  LegendContainer,
  Legend,
} from "./style";

import formatCurrency from "../../utils/formatCurrency";

interface IHistoryBoxProps {
  data: {
    month: string;
    amountInput: number;
    amountOutput: number;
  }[];
  lineColorAmountInput: string;
  lineColorAmountOutput: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
  data,
  lineColorAmountInput,
  lineColorAmountOutput,
}) => {
  return (
    <Container>
      <Header>
        <h2>Balance History</h2>
        <LegendContainer>
          <Legend color={lineColorAmountInput}>
            <div></div>
            <span>Income</span>
          </Legend>
          <Legend color={lineColorAmountOutput}>
            <div></div>
            <span>Expenses</span>
          </Legend>
        </LegendContainer>
      </Header>
      <ChartContainer>
        <ResponsiveContainer width={"100%"} height={300}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
            <XAxis dataKey="month" stroke="#cecece" interval={0} />
            <Tooltip formatter={formatCurrency}/>
            <Line
              type="monotone"
              dataKey="amountInput"
              name="Income"
              stroke={lineColorAmountInput}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="amountOutput"
              name="Expenses"
              stroke={lineColorAmountOutput}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Container>
  );
};

export default HistoryBox;
