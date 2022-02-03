import React, { useEffect, useState } from "react";
import { TextField, IconButton, Button } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Add } from "@mui/icons-material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

let orderList = [];
const rows = [...JSON.parse(localStorage.getItem("inventoryData") || "[]")];
function createData(name, qty, price) {
  return { name, qty, price };
}

function CreateOrder() {
  useEffect(() => {
    let key=localStorage.getItem('orderList');
    if(key){
      orderList.push(...JSON.parse(key));
    }
       
    //console.log(JSON.parse(localStorage.getItem('orderList') || "[]"));
  }, []);
  let sum = 0;
  const [cosName, setCosName] = useState("");
  const [cosContact, setCosContact] = useState("");
  const [id, setId] = useState("");
  const [qt, setQt] = useState(0);
  const [total, setTotal] = useState(0);
  let [orders, setOrders] = useState([]);

  const handleAddOrder = () => {
    if (qt === 0) {
      alert("add qty first");
    } else {
      setOrders([...orders, createData(rows[id].name, qt, rows[id].price)]);
      sum += rows[id].price * qt;
      setTotal(sum);
    }
  };
  const handleCreateOrder = () => {
    orderList.push({
      cart: [...orders],
      customerName: cosName,
      isSales: false,
      phoneNum: cosContact,
      totalAmount: total,
      id: randomIdGenerator(),
    });

    localStorage.orderList = JSON.stringify(orderList);
    console.log(orderList);
    //console.log(randomIdGenerator());
    refreshPage();
  };
  const refreshPage = () => {
    window.location.reload();
  };

  const randomIdGenerator = () => {
    return Math.floor(Math.random() * 1e8);
  };

  return (
    <div className="bg-red-50 p-10 shadow-lg flex-grow rounded-lg ">
      <h3 className="text-center text-red-500 text-5xl mb-5">Create Order</h3>
      <div className="flex w-full ">
        <div className="flex-1 min-h-[70vh] flex items-center">
          <Box sx={{ width: "50%" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Medicine Name
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={id}
                label="Orders"
                onChange={(e) => setId(e.target.value)}
              >
                {rows.map((row, id) => (
                  <MenuItem key={randomIdGenerator()} value={id}>
                    {row.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <TextField
            type="number"
            id="outlined-basic"
            label="Quantity"
            variant="outlined"
            defaultValue={0}
            onChange={(e) => setQt(e.target.value)}
            sx={{ width: "25%" }}
          />
          <IconButton
            sx={{
              backgroundColor: "red",
              color: "white",
              "&:hover": {
                color: "red",
                backgroundColor: "white",
              },
              ml: 2,
            }}
            onClick={handleAddOrder}
          >
            <Add />
          </IconButton>
        </div>

        {/* Order Details Page */}
        <div className="bg-white shadow-md rounded flex-1 min-h-[70vh]">
          <div className="p-5 flex justify-between">
            <TextField
              id="outlined-basic"
              label="Customer Name"
              variant="outlined"
              onChange={(e) => setCosName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Contact Number"
              type="number"
              variant="outlined"
              onChange={(e) => setCosContact(e.target.value)}
            />
          </div>

          <TableContainer sx={{ padding: "0 15px 15px 15px" }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Medicine Name</TableCell>
                  <TableCell>Qty</TableCell>
                  <TableCell>Price(per Unit)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.qty}</TableCell>
                    <TableCell>{row.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div className="w-3/4 flex p-5 justify-between mx-auto  border-t-2 border-b-2 border-red-600">
            <span>Total:-</span>
            <span>
              <CurrencyRupeeIcon />
              {total}
            </span>
          </div>
          <div className="flex justify-center mt-5 mb-5">
            <Button
              variant="contained"
              color="error"
              onClick={handleCreateOrder}
            >
              Create Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateOrder;
