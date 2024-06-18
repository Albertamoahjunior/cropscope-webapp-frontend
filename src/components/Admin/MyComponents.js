import React from "react";
import TextField from "@mui/material/TextField";
import {green} from "@mui/material/colors";
import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';

  const textFieldStyle = { 
    marginLeft: "2rem",
    marginRight: "2rem",
    width: "25%",
    height: "3rem",
    color:"white",
    justify: "left",
    marginBottom: "4rem",
  }

export function StandardTextField(props) {
  return (
    <TextField
      label= {props.label}
      variant="outlined"
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
    width: "25%",
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