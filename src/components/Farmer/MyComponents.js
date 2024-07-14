import React from "react";
import TextField from "@mui/material/TextField";
import {green} from "@mui/material/colors";
import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

  const textFieldStyle = { 
    marginLeft: "2rem",
    marginRight: "2rem",
    width: "5rem",
    height: "3rem",
    color:"white",
    justify: "left",
    marginBottom: "2rem",
  }

export function StandardTextField(props) {
  return (
    <TextField
      label= {props.label}
      variant="outlined"
      mt={props.mt}
      mb={props.mb}
      sx={{
        "& .MuiInput-root": {
          color: "#000",
          fontFamily: "Arial",
          fontWeight: "bold",
          width: "100%",
          // Bottom border
          "&:before": {
            borderColor: "#2e2e2e",
            borderWidth: "2px",
          },
          // Border on focus
          "&:after": {
            borderColor: "#2e2e2e",
            borderWidth: "3px",
          },
          ":hover:not(.Mui-focused)": {
            "&:before": {
              borderColor: "#e7e7e7",
              borderWidth: "2px",
            },
          },
        },
        // Label
        "& .MuiInputLabel-standard": {
          color: "#2e2e2e",
          fontWeight: "bold",
        },
      }}
      value={props.value}
      onChange={props.onChange}
      required={props.required}
      style={textFieldStyle}
      type={props.type}
    />
  );
}

  const buttonStyle = {
    marginLeft: "2rem",
    marginRight: "2rem",
    height: "4rem",
    color:"white",
    fontSize: "1.4rem",
    justify: "left",
    width: "5rem",
  }

  const buttonTextStyle = {
    marginLeft: "0rem",
    marginRight: "0rem",
    height: "4rem",
    color:green[500],
    fontSize: "1.4rem",
    justify: "left",
    width: "25%",
  }

export function StandardButton(props) {
    return (
      <Button
        variant="contained" 
        style= {buttonStyle}
        type={props.type}
        onClick={props.onClick}
        color="success"
        href={props.href}
        mt={props.mt}
      >
        {props.children}
      </Button>
    );
}

export function TextButton(props) {
  return (
    <Button
      variant="text" 
      style= {buttonTextStyle}
      type={props.type}
      onClick={props.onClick}
      color="success"
      href={props.href}
      mt={props.mt}
    >
      {props.children}
    </Button>
  );
}

export function StandardTypography(props) {     
  return (
    <Typography
      variant= {props.variant}
      mb={props.mb}
      mt={props.mt}
      color= {props.color}
    >
      {props.children}
    </Typography>
  );
}

export function MenuButton(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <StandardButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {props.title}
      </StandardButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={props.profile}>Profile</MenuItem>
        <MenuItem onClick={props.addFarmer}>Add Farmer</MenuItem>
        <MenuItem onClick={props.logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}