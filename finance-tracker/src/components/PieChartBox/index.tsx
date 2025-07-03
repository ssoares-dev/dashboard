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

// Tipagem dos dados
interface IData {
  name: string;
  value: number;
  percent: number;
  color: string;
}

interface IPieChartsProps {
  data: IData[];
}

const PieChartsBox: React.FC<IPieChartsProps> = ({ data }) => {
  return (
    <Container>
      <SideLeft>
        <h2>Análise</h2>
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
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="percent"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label 
            >
              {data.map((indicator, index) => (
                <Cell
                  key={`cell-${index}`} 
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
