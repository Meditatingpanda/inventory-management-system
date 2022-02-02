import { TextField } from "@material-ui/core";
import { Button, Typography } from "@mui/material";
import { mt } from "date-fns/locale";
import { useState ,useEffect} from "react";
import Navbar from "./Navbar";

const LoginPage = ({ state, setState }) => {
 
  const [user, setUser] = useState("");
  const [password, SetPassword] = useState("");
  const refreshPage = () => {
    window.location.reload();
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
    <div className="bg-red-50 min-h-screen flex justify-center items-center ">
      <div className="bg-red-100 w-[50%] justify-around h-[25rem] rounded-xl shadow-md p-9 flex flex-col items-center">
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
