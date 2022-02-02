import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Inventory from "./components/Inventory";
import { Routes, Route } from "react-router-dom";
import SalesExecutives from "./components/SalesExecutives";
import CreateOrder from "./components/CreateOrder";
import Orders from "./components/Orders";
import LoginPage from "./components/LoginPage";
import AdminPage from "./pages/AdminPage";
import SalesMan from "./pages/SalesMan";
import { useEffect, useState } from "react";

function App() {
  const [admin, SetAdmin] = useState(true);
   const [state, setState] = useState("login");
  useEffect(()=>{
    setState(localStorage.state?localStorage.state:'login');
  },[]);
  return (
    <>
      {state === "login" ? (
        <LoginPage state={state} setState={setState} />
      ) : null}
      {state === "admin" ? (
        <AdminPage state={state} setState={setState} />
      ) : null}
      {state === "sales" ? (
        <SalesMan state={state} setState={setState} />
      ) : null}
    </>
  );
}

export default App;
