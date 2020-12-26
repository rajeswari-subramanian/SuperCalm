import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components'
import { useHistory, Link } from "react-router-dom";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import { userLogout } from '../Redux/User/action';
import Week from './Week'
import Month from './Month'

const SideDiv = styled.div`
z-index:100;
padding:20px 0px 0px 20px;
align-items:flex-start;
display:flex;
flex-direction:column;
position:absolute;
background:rgb(0,0,0,0.3);
width:250px;
height:100%
`;
const BodyDiv = styled.div`
z-index:100;
margin-left:250px;
flex-direction:column;
align-items:center;
padding:20px;
display:flex;
position:absolute;
width:1099px;
height:100%
`;
const CalmButton = styled.div`
font-size: 20px;
padding: 10px 20px 10px 20px;
color:black;
background: white;
border-radius:35px;
border-color: white
`;
const SideDivItems = styled.p`
font-size: 20px;
color: white;
display: flex
`;
const SideDivIcon = styled.div`
border: 2px solid white;
cursor:pointer;
border-radius: 50%;
padding: 0px 5px 5px 5px;
margin-right: 20px;
`;
const SideDivText = styled.div`
align-self:center;
cursor:pointer;
`;

function User() {
    const userName = useSelector(state => state.user.userName)
    const dispatch = useDispatch()
    const [showWeek, setShowWeek] = useState(true)
    const [showMonth, setShowMonth] = useState(false)
    let history = useHistory();

    const handleLogout = () => {
        dispatch(userLogout())
        history.push('/')
    }
    const handleHome = () => {
        history.push("/");
    };
    const handleWeek = () => {
        setShowMonth(false)
        setShowWeek(true)
    }
    const handleMonth = () => {
        setShowWeek(false)
        setShowMonth(true)
    }
    return (
        <div style={{ position: "relative" }}>
            <SideDiv>
                <p style={{ cursor: "pointer" }}><img
                    width="100px"
                    height="40px"
                    alt=""
                    src="/logo.png"
                    onClick={handleHome}
                /></p>
                <p>
                    <CalmButton
                        type="button" class="btn btn-outline-info btn-lg rounded-pill">Try Calm for Free
                        </CalmButton>
                </p>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <SideDivItems>
                        <SideDivIcon><HomeOutlinedIcon /> </SideDivIcon>
                        <SideDivText>Home</SideDivText>
                    </SideDivItems></Link>
                <SideDivItems onClick={() => handleWeek()}>
                    <SideDivIcon><EqualizerOutlinedIcon /> </SideDivIcon>
                    <SideDivText>Week Stats</SideDivText>
                </SideDivItems>
                <SideDivItems onClick={() => handleMonth()}>
                    <SideDivIcon><EqualizerOutlinedIcon /> </SideDivIcon>
                    <SideDivText>Month Stats</SideDivText>
                </SideDivItems>
                <SideDivItems onClick={() => handleLogout()}>
                    <SideDivIcon><AccountCircleOutlinedIcon /> </SideDivIcon>
                    <SideDivText>Logout</SideDivText>
                </SideDivItems>
                <p style={{ fontSize: "20px", color: "white" }}>Logged in as: {userName}</p>
            </SideDiv>
            <BodyDiv>
                {showWeek && !showMonth && <Week />}
                {!showWeek && showMonth && <Month />}
            </BodyDiv>
            <video width="100%" height="100%" loop autoPlay muted style={{ display: "block" }}>
                <source src='/Videos/calm.mp4' type='video/mp4' />
            </video>
        </div>
    )
}

export default User
