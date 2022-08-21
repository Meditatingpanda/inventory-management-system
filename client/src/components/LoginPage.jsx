import { TextField } from "@material-ui/core";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";

const LoginPage = ({ state, setState }) => {
  const [user, setUser] = useState("");
  const [password, SetPassword] = useState("");
  const refreshPage = () => {
    window.location.reload();
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };
  const handleLogin = () => {
    if (user === "test-admin" && password === "test-admin") {
      localStorage.state = "admin";
    } else if (user === "test-sales" && password === "test-sales") {
      localStorage.state = "sales";
    } else {
      alert("wrong Password!! Try again");
      localStorage.state = "login";
    }

    refreshPage();
  };
  return (
    <div className="bg-red-50 relative min-h-screen flex justify-center items-center ">
      <div className="text-red-400 absolute top-3 left-3 flex items-center">
        <LocalPharmacyIcon sx={{ fontSize: "3rem" }} />
        <span className="text-3xl ">PMS-React</span>
      </div>
      <div className="bg-red-100 w-full md:w-[50%] justify-around h-[25rem] rounded-xl shadow-md p-9 flex flex-col items-center">
        <Typography variant="h3" className="text-red-300">
          Login
        </Typography>
        <TextField
          sx={{ width: "75%" }}
          variant="outlined"
          label="User Name"
          color="error"
          onChange={(e) => setUser(e.target.value)}
        />
        <TextField
          sx={{ width: "75%" }}
          variant="outlined"
          label="Password"
          type="password"
          color="error"
          onKeyDown={handleEnter}
          onChange={(e) => SetPassword(e.target.value)}
        />
        <Button variant="contained" color="error" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
