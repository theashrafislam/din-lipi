import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Journal from "./pages/Journal";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import AddModal from "./components/AddModal";

export default function App() {
  const [tab, setTab] = useState("home"); // current tab
  const [items, setItems] = useLocalStorage("activities", []);
  const [journal, setJournal] = useLocalStorage("journal", "");
  const [open, setOpen] = useState(false); // add modal open/close

  // Function to add activity from modal
  const handleAdd = (activity) => {
    setItems([...items, activity]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black">
      {/* Conditional Rendering of Pages */}
      {tab === "home" && (
        <Home items={items} journal={journal} onOpenAdd={() => setOpen(true)} />
      )}
      {tab === "stats" && <Stats items={items} />}
      {tab === "journal" && <Journal journal={journal} setJournal={setJournal} />}
      {tab === "settings" && <Settings />}

      {/* Countdown (can be part of Home page or fixed on top) */}
      {/* <Countdown /> -> optional if already in Home */}

      {/* Add Activity Modal */}
      {open && (
        <AddModal
          onClose={() => setOpen(false)}
          onAdd={handleAdd}
        />
      )}

      {/* Navbar */}
      <Navbar
        tab={tab}
        setTab={setTab}
        onAdd={() => setOpen(true)}
      />
    </div>
  );
}