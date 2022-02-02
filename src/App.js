import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Inventory from "./components/Inventory";
import { Routes, Route } from "react-router-dom";
import SalesExecutives from "./components/SalesExecutives";
import CreateOrder from "./components/CreateOrder";
import Orders from "./components/Orders";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Inventory />} />
          <Route exact path="/sales" element={<SalesExecutives />} />
          <Route exact path="/create" element={<CreateOrder />} />
          <Route exact path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
