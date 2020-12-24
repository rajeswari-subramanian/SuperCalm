import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Navbar from "./Navbar";
import styled from "styled-components";
import Pagination from "@material-ui/lab/Pagination";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Footer from './Footer'

const useStyles = makeStyles((theme) => ({
    pageroot: {
        "& > * + *": {
            marginTop: theme.spacing(2),
        },
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: "center",
        margin: "auto",
        color: theme.palette.text.secondary,
    },
    cardroot: {
        width: "100%",
        height: "350px",
        paddingTop: "10px",
    },
    media: {
        width: 200,
        margin: "auto",
        height: 200,
    },
    ButtonBackground: {
        backgroundColor: "rgb(0, 210, 144)",
        borderRadius: "20px",
        padding: "8px 20px",
        fontWeight: "bold",
        fontSize: "12px",
        cursor: "pointer",
        color: "white",
    },
}));
export default function LandingPage() {
    const classes = useStyles();



    return (
        <>
            <Navbar />
            <div>
                <img    style={{ display:"block",marginTop:"-70px"}}        
                    
                    //src="https://res.cloudinary.com/calm-com/image/upload/v1582139698/jasper-lake.jpg"
                    //data-src="https://res.cloudinary.com/calm-com/image/upload/v1582139698/jasper-lake.jpg"
                    // data-srcset="https://res.cloudinary.com/calm-com/image/upload/f_auto,c_scale,w_300,dpr_auto,q_auto/v1582139698/jasper-lake.jpg 300w,
                    //  https://res.cloudinary.com/calm-com/image/upload/f_auto,c_scale,w_400,dpr_auto,q_auto/v1582139698/jasper-lake.jpg 400w, 
                    //  https://res.cloudinary.com/calm-com/image/upload/f_auto,c_scale,w_768,dpr_auto,q_auto/v1582139698/jasper-lake.jpg 768w,
                    //   https://res.cloudinary.com/calm-com/image/upload/f_auto,c_scale,w_1024,dpr_auto,q_auto/v1582139698/jasper-lake.jpg 1024w,
                    //  https://res.cloudinary.com/calm-com/image/upload/f_auto,c_scale,w_1440,dpr_auto,q_auto/v1582139698/jasper-lake.jpg 1440w,
                    //   https://res.cloudinary.com/calm-com/image/upload/f_auto,c_scale,w_1920,dpr_auto,q_auto/v1582139698/jasper-lake.jpg 1920w, 
                    //   https://res.cloudinary.com/calm-com/image/upload/f_auto,c_scale,w_2560,dpr_auto,q_auto/v1582139698/jasper-lake.jpg 2560w, 
                    //   https://res.cloudinary.com/calm-com/image/upload/f_auto,c_scale,w_3840,dpr_auto,q_auto/v1582139698/jasper-lake.jpg 3840w"
                      alt="Jasper Lake" 
                      srcset="https://res.cloudinary.com/calm-com/image/upload/f_auto,c_scale,w_300,dpr_auto,q_auto/v1582139698/jasper-lake.jpg 300w,
                      https://res.cloudinary.com/calm-com/image/upload/f_auto,c_scale,w_400,dpr_auto,q_auto/v1582139698/jasper-lake.jpg 400w,
                      https://res.cloudinary.com/calm-com/image/upload/f_auto,c_scale,w_768,dpr_auto,q_auto/v1582139698/jasper-lake.jpg 768w,
                      https://res.cloudinary.com/calm-com/image/upload/f_auto,c_scale,w_1024,dpr_auto,q_auto/v1582139698/jasper-lake.jpg 1024w,
                       https://res.cloudinary.com/calm-com/image/upload/f_auto,c_scale,w_1349,dpr_auto,q_auto/v1582139698/jasper-lake.jpg" 
                    
                    data-loaded="true"></img>
               </div>         
            <Footer />
        </>
    );
}

