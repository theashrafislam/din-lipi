import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Journal from "./pages/Journal";
import Navbar from "./components/Navbar";
import AddModal from "./components/AddModal";
import Countdown from "./components/Countdown";
import DailyGoal from "./components/DailyGoal";

export default function App() {
  const [tab, setTab] = useState("home");
  const [items, setItems] = useLocalStorage("activities", []);
  const [journal, setJournal] = useLocalStorage("journal", "");
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <Countdown />
      <DailyGoal />
      {/* <Home /> */}
      {/* {tab === "home" && (
        <Home items={items} setItems={setItems} />
      )}
      {tab === "stats" && <Stats items={items} />}
      {tab === "journal" && (
        <Journal text={journal} setText={setJournal} />
      )} */}

      {/* <button
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-5 bg-black text-white w-14 h-14 rounded-full text-2xl"
      >
        +
      </button> */}

      {/* {open && (
        <AddModal
          onClose={() => setOpen(false)}
          onAdd={(item) => setItems([...items, item])}
        />
      )}

      <Navbar tab={tab} setTab={setTab} /> */}
    </div>
  );
}