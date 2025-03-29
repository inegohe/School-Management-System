import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

type DataType = {
  name: string;
  count: number;
  fill: string;
}[];

const RadialCharts = ({ data }: { data: DataType }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="100%"
        outerRadius="40%"
        barSize={40}
        data={data}
      >
        <RadialBar
          background
          dataKey="count"
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default RadialCharts;
