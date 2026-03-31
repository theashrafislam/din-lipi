import StatsChart from "../components/StatsChart";

export default function Stats({ items }) {
  const data = [
    { day: "Mon", minutes: 30 },
    { day: "Tue", minutes: 60 },
  ];

  return (
    <div className="pb-24">
      <StatsChart data={data} />
    </div>
  );
}