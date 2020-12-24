import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  ButtonBackground: {
    textDecoration: "none",
    borderRadius: "20px",
    padding: "8px 20px",
    fontWeight: "bold",
    fontSize: "12px",
    cursor: "pointer",
    color: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
  },
  color: {
    color: "black",
  },
  margin: {
    border: "3px solid #F3F3F5",
    borderRadius: "20px",
    margin: theme.spacing(1),
  },
}));

export default function Navbar() {
  const classes = useStyles();
  let history = useHistory();
  const handleHome = () => {
    history.push("/");
  };

  return (
    <div
      style={{
        display: "flex",
        paddingTop:"80px",             
        zIndex: "999",
        width: "100%",
        maxHeight: "70px",
        minHeight: "70px",
        position: "fixed",
      }}
    >
      <div
        style={{
          flexBasis: "35%",
          justifyContent:"center",               
          
        }}
      >
        <img
          width="100px"
          height="40px"
          alt=""
          src="/logo.png"
          onClick={handleHome}
        />
      </div>
      <div
        style={{
          
          flexBasis: "43%",
          marginLeft: "12%",                 
        }}
      >
          <div
      style={{
        display: "flex",   
        justifyContent:"center"    
        
      }}
    >
        <div style={{  flexBasis: "30%"}}>
          <button
            style={{
              
              outline: "none",
              fontSize:"18px",
              color: "white",
              padding:"20px",              
              border: "none",
              borderRadius: "10px",
            }}
            type="button" class="btn btn-outline-info btn-lg rounded-pill">
            For Business
          </button>
        </div>

        <div style={{  flexBasis: "18%"}}>
          {" "}
          <button
            style={{
                
                fontSize:"18px",
               
              outline: "none",
              padding:"20px",
              color: "white",             
              border: "none",
              borderRadius: "10px",
            }}
            type="button" class="btn btn-outline-info btn-lg rounded-pill">
            Log In
          </button>
        </div>
        <div style={{  flexBasis: "40%"}}>
          {" "}
         
          <button style={{                  
               
               fontSize:"20px",
               padding:"20px",
               fontWeight:"600px",
               color: "white",  
               borderRadius:"25px",            
               borderColor: "white",               
             }} type="button" class="btn btn-outline-info btn-lg rounded-pill">Try Calm for Free</button>
          
        </div>
      </div>
    </div> </div>
  );
}
