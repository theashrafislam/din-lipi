import Countdown from "../components/Countdown";
import Timeline from "../components/Timeline";
import GlassCard from "../components/GlassCard";
import Cards from "../components/Cards";

export default function Home({ items, setItems }) {
  const total = items.reduce((a, b) => a + b.duration, 0);

  return (
    <div className="space-y-4 pb-24">
      {/* <GlassCard> */}
        <Countdown />
      {/* </GlassCard> */}
<Cards />
      {/* <GlassCard>
        <div>Total Today: {total} min</div>
      </GlassCard>

      <Timeline
        items={items}
        onDelete={(i) =>
          setItems(items.filter((_, idx) => idx !== i))
        }
      /> */}
    </div>
  );
}