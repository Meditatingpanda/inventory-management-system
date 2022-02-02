import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Inventory from "../components/Inventory";
import { Routes, Route } from "react-router-dom";
import SalesExecutives from "../components/SalesExecutives";
import CreateOrder from "../components/CreateOrder";
import Orders from "../components/Orders";
import SidebarSales from "../components/SidebarSales";

function SalesMan({ state, setState }) {
  return (
    <div>
      <Navbar state={state} setState={setState} />
      <div className="flex">
        <SidebarSales />
        <Routes>
          <Route exact path="/" element={<CreateOrder />} />
          <Route exact path="/create" element={<CreateOrder />} />
          <Route exact path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
}

export default SalesMan;
