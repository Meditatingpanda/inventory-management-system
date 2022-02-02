import { IconButton, Button } from "@mui/material";
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';

const Navbar = () => {
  return (
      
    <div className="h-20 flex justify-between">
      <div className="flex items-center ml-5">
        <LocalPharmacyIcon sx={{ color: "red", fontSize: "3rem" }} />
      </div>

      <div className="flex items-center mr-5">
      <Button variant="contained" color="error">Logout</Button>
      </div>
       
      
    </div>
  );
};

export default Navbar;
