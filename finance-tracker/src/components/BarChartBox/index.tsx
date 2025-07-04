import React from "react";

import { Container, SideLeft, SideRight, LegendContainer, Legend } from "./style";

import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from "recharts";

import formatCurrency from "../../utils/formatCurrency";

interface IBarChartProps {
  title: string;
    data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
}


const BarChartBox: React.FC<IBarChartProps> = ({title, data}) => {
  return (
    <Container>
      <SideLeft>
        <h2>{title}</h2>
        <LegendContainer>
            {data.map((indicator) => (
                <Legend key={indicator.name} color={indicator.color}>
                <div>{indicator.percent.toFixed(0)}%</div>
                <span>{indicator.name}</span>
                </Legend>
            ))}
        </LegendContainer>
      </SideLeft>
      <SideRight>
        <ResponsiveContainer>
            <BarChart data={data}>
                <Tooltip formatter={formatCurrency} cursor={{fill: 'none'}} />
                <Bar dataKey="amount">
                {data.map((indicator) => (
                    <Cell key={indicator.name} fill={indicator.color} />
                ))}
                </Bar>
            </BarChart> 
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
};

export default BarChartBox;