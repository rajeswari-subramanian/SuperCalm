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
            <div style={{ position: "relative" }}>
                <img style={{ display: "block", marginTop: "-70px" }}
                    src="https://res.cloudinary.com/calm-com/image/upload/f_auto,c_scale,w_1349,dpr_auto,q_auto/v1582139698/jasper-lake.jpg"
                    alt="Jasper Lake"></img>
                <div style={{ display: "flex", position: "absolute", top: "280px", left: "15%", textAlign: "left", flexDirection: "column" }}>
                    <p style={{ color: "white", fontSize: "49px" }}>Find Your Calm</p>
                    <p style={{ color: "white", fontSize: "29px" }}>Sleep more. Stress less. Live better.</p>
                    <div><button style={{
                        fontSize: "18px",
                        fontWeight: "bolder",
                        padding: "10px 105px 10px 105px",
                        color: "white",
                        borderRadius: "25px",
                    }} type="button" class="btn btn-primary rounded-pill">Get Started</button></div>
                </div>
            </div>
            <Footer />
        </>
    );
}

