import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Countdown from "../components/Countdown";

const Root = () => {
    const [tab, setTab] = useState("home");

    const handleAdd = () => {
        console.log("Add button clicked!");
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 relative pb-20">
            <Countdown />

            {/* Outlet content wrapper */}
            <div className="pb-2">
                <Outlet context={{ tab, setTab }} />
            </div>
            
            <Navbar tab={tab} setTab={setTab} onAdd={handleAdd} />
        </div>
    );
};

export default Root;