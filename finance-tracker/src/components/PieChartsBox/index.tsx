import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import {
  Container,
  SideLeft,
  LegendContainer,
  Legend,
  SideRight,
} from "./style";

interface IPieChartsProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
}

const PieChartsBox: React.FC<IPieChartsProps> = ({ data }) => {

  return (
    <Container>
      <SideLeft>
        <h2>Analysis</h2>
        <LegendContainer>
          {data.map((indicator) => (
            <Legend key={indicator.name} color={indicator.color}>
              <div>{indicator.percent}%</div>
              <span>{indicator.name}</span>
            </Legend>
          ))}
        </LegendContainer>
      </SideLeft>
      <SideRight>
         <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="percent"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
            >
              {data.map((indicator) => (
                <Cell
                  key={indicator.name}
                  fill={indicator.color}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
};

export default PieChartsBox;
