import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import userprofile_logo from "../../assets/user-profile.png";
import Divider from "@material-ui/core/Divider";
import Login from "../../screens/login/Login";

// Method to display user profile menu on header

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  // On account menu item selection
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // On logout menu item selection
  const handleClose = () => {
    setAnchorEl(null);
    sessionStorage.removeItem("access-token");
    // <Login />;
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img src={userprofile_logo} width="50" height="50" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <Divider variant="middle" />
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
