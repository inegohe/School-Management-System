"use client";

import {
  LineChart as LineChartRoot,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type DataType = {
  name: string;
  present: number;
  absent: number;
};

const LineChart = ({ data }: { data: DataType[] }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChartRoot
        data={data}
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="present"
          stroke="#ceebfa"
          activeDot={{ r: 8 }}
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="absent"
          stroke="#fae27c"
          activeDot={{ r: 8 }}
          strokeWidth={3}
        />
      </LineChartRoot>
    </ResponsiveContainer>
  );
};
export default LineChart;
