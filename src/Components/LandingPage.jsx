import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from './Footer'
import styled from 'styled-components'

const GetStartedButton = styled.button`
font-size: 18px;
outline: none;
border: 0px;
font-weight: bolder;
padding: 10px 105px 10px 105px;
color: white;
border-radius: 25px;
background: linear-gradient(lightblue, blue)
`;
const GetStartedContainer = styled.div`
display: flex;
position: absolute;
top: 280px;
left: 15%;
text-align: left;
flex-direction:column
`;
const GetStartedItem = styled.p`
color: white;
font-size:${props => props.font ? props.font : "29px"}
`;
export default function LandingPage() {
    let [position, setPosition] = useState(window.pageYOffset)
    setInterval(() => {
        setPosition(window.pageYOffset)
    }, 500)
    //console.log(position)
    return (
        <>
            <Navbar pad="80px" position={position} />
            <div style={{ position: "relative" }}>
                <img style={{
                    display: "block", marginTop: "-70px", filter: "brightness(0.5)"
                }}
                    src="https://res.cloudinary.com/calm-com/image/upload/f_auto,c_scale,w_1349,dpr_auto,q_auto/v1582139698/jasper-lake.jpg"
                    alt="Jasper Lake"></img>
                <GetStartedContainer>
                    <GetStartedItem font="49px"> Find Your Calm</GetStartedItem>
                    <GetStartedItem>Sleep more. Stress less. Live better.</GetStartedItem>
                    <div><GetStartedButton type="button" class="btn">Get Started</GetStartedButton></div>
                </GetStartedContainer>
                <Footer />
            </div>
        </>
    );
}
