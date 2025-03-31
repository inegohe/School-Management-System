"use client";

import {
  BarChart as BarChartRoot,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

type DataType = {
    name: string,
    present: number,
    absent: number
}

const BarChart = ({ data }: { data: DataType[] }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChartRoot
        data={data}
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 5,
        }}
        barGap={5}
        barCategoryGap={10}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="present" fill="#ceebfa" radius={[30, 30, 0, 0]} />
        <Bar dataKey="absent" fill="#fae27c" radius={[30, 30, 0, 0]} />
      </BarChartRoot>
    </ResponsiveContainer>
  );
};

export default BarChart;
