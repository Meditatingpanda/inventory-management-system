import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PeopleIcon from "@mui/icons-material/People";
import EditIcon from "@mui/icons-material/Edit";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  let currentPAth = useLocation();
  currentPAth = currentPAth.pathname;
  const style = "cursor-pointer flex items-center  p-1 rounded";
  const newStyle =
    "cursor-pointer flex items-center  p-1 rounded bg-red-200 text-red-500";
  return (
    <div className=" w-64 p-6 min-h-screen text-xl text-gray-400 shadow-md">
      <div className="h-[15rem] flex flex-col justify-around">
        <div
          className={currentPAth === "/" ? newStyle : style}
          onClick={() => navigate("/")}
        >
          <ShoppingBagIcon sx={{ mr: 1 }} />
          Inventory
        </div>
        <div
          className={currentPAth === "/sales" ? newStyle : style}
          onClick={() => navigate("/sales")}
        >
          <PeopleIcon sx={{ mr: 1 }} />
          Sales Executives
        </div>
        <div
          className={currentPAth === "/create" ? newStyle : style}
          onClick={() => navigate("/create")}
        >
          <EditIcon sx={{ mr: 1 }} />
          Create Order
        </div>
        <div
          className={currentPAth === "/orders" ? newStyle : style}
          onClick={() => navigate("/orders")}
        >
          <ShoppingBagIcon sx={{ mr: 1 }} />
          Orders
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
