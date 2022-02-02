import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Container, IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { red } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  border: `5px solid ${red[50]}`,
  boxShadow: 24,
  p: 4,
};
function createData(name, Manufacturer, price, stocks, discount) {
  return { name, Manufacturer, price, stocks, discount };
}
function Inventory() {
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState(false);
  const [updateData, SetUpdateData] = useState({});
  const [rows, setRows] = useState([
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 22, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [newId, setNewId] = useState(null);
  let arr = [];
  let tempArr = [];
  let newRows = [5];
  const keys = ["name", "Manufacturer", "price", "stocks", "discount"];

  const handleDelete = (id) => {
    setRows(rows.filter((key, keyId) => keyId != id));
  };

  const handleAddToInventory = () => {
    console.log(createData(...arr));
    setRows([...rows, createData(...arr)]);
    setOpen(false);
  };

  const handleUpdate = (id) => {
    SetUpdateData({ ...rows[id] });
    //console.log(updateData);
    setNewId(id);
  };
  const handleUpdateDetails = () => {
    for (let i = 0; i < 5; i++) {
      if (!tempArr[i]) {
        tempArr[i] = updateData[`${keys[i]}`];
      }
    }
    newRows = [...rows];
    newRows[newId] = createData(...tempArr);
    console.log(newRows);
    setRows([...newRows]);
    setUpdate(false);
  };

  return (
    <div className="bg-red-50 p-10 shadow-lg flex-grow rounded-lg ">
      <Container>
        <Typography variant="h3" className="text-red-500 text-center">
          Inventory
        </Typography>
        <Button
          variant="contained"
          color="error"
          sx={{ mb: 5 }}
          onClick={handleOpen}
        >
          + ADD NEW MEDICINE
        </Button>
        <TableContainer component={Paper} sx={{ minWidth: 400 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Medicine Name</TableCell>
                <TableCell align="right">Manufacturer</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Stock</TableCell>
                <TableCell align="right">Discount(%)</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, id) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.Manufacturer}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.stocks}</TableCell>
                  <TableCell align="right">{row.discount}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() => {
                        handleUpdate(id);
                        setUpdate(true);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton onClick={(e) => handleDelete(id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      {/* THis is for modal Section */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            sx={{ position: "absolute", right: 15 }}
            className="text-red-500 cursor-pointer"
            onClick={() => setOpen(false)}
          />
          <Typography
            variant="h5"
            sx={{ textAlign: "center", mb: 5 }}
            className="text-red-500"
          >
            Add Medicine Details
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              variant="outlined"
              label="Medicine Name"
              onChange={(e) => (arr[0] = e.target.value)}
            />
            <TextField
              variant="outlined"
              label="Manufacturer"
              onChange={(e) => (arr[1] = e.target.value)}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              mt: 5,
              mb: 5,
            }}
          >
            <TextField
              variant="outlined"
              label="Price"
              sx={{ width: "25%" }}
              type="number"
              defaultValue={0}
              onChange={(e) => (arr[2] = e.target.value)}
            />
            <TextField
              variant="outlined"
              label="Stock"
              sx={{ width: "25%" }}
              type="number"
              defaultValue={0}
              onChange={(e) => (arr[3] = e.target.value)}
            />
            <TextField
              variant="outlined"
              label="Discount"
              sx={{ width: "25%" }}
              type="number"
              defaultValue={0}
              onChange={(e) => (arr[4] = e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              onClick={handleAddToInventory}
              color="error"
            >
              ADD TO INVENTORY
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Modal for product update */}

      <Modal
        open={update}
        onClose={() => setUpdate(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            sx={{ position: "absolute", right: 15 }}
            className="text-red-500 cursor-pointer"
            onClick={() => setUpdate(false)}
          />
          <Typography
            variant="h5"
            sx={{ textAlign: "center", mb: 5 }}
            className="text-red-500"
          >
            Add Medicine Details
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              variant="outlined"
              label="Medicine Name"
              defaultValue={updateData.name}
              onChange={(e) => (tempArr[0] = e.target.value)}
            />
            <TextField
              variant="outlined"
              label="Manufacturer"
              defaultValue={updateData.Manufacturer}
              onChange={(e) => (tempArr[1] = e.target.value)}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              mt: 5,
              mb: 5,
            }}
          >
            <TextField
              variant="outlined"
              label="Price"
              sx={{ width: "25%" }}
              type="number"
              defaultValue={updateData.price}
              onChange={(e) => (tempArr[2] = e.target.value)}
            />
            <TextField
              variant="outlined"
              label="Stock"
              sx={{ width: "25%" }}
              defaultValue={updateData.stocks}
              type="number"
              onChange={(e) => (tempArr[3] = e.target.value)}
            />
            <TextField
              variant="outlined"
              label="Discount"
              sx={{ width: "25%" }}
              type="number"
              defaultValue={updateData.discount}
              onChange={(e) => (tempArr[4] = e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              onClick={handleUpdateDetails}
              color="error"
            >
              Update Details
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Inventory;
