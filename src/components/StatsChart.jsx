import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function StatsChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <XAxis dataKey="day" />
        <Tooltip />
        <Bar dataKey="minutes" fill="#8884d8" radius={[10,10,0,0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}