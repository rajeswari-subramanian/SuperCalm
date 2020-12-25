import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import { userLogout } from '../Redux/User/action'

const SideDiv = styled.div`
padding:20px 0px 0px 20px;
align-items:flex-start;
display:flex;
flex-direction:column;
position:absolute;
border:2px solid red;
background:rgb(0,0,0,0.3);
width:250px;
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
z-index:100;
border: 2px solid white;
cursor:pointer;
border-radius: 50%;
padding: 0px 5px 5px 5px;
margin-right: 20px;
`;
const SideDivText = styled.div`
z-index:100;
align-self:center;
cursor:pointer;
`;

function User() {
    const dispatch = useDispatch()
    const isUserAuth = useSelector(state => state.user.isUserAuth)
    const userName = useSelector(state => state.user.userName)
    let history = useHistory();

    const handleLogout = () => {
        dispatch(userLogout())
        history.push('/')
    }
    const handleHome = () => {
        history.push("/");
    };
    return (
        <div style={{ position: "relative" }}>
            <SideDiv>
                <p><img
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
                <SideDivItems>
                    <SideDivIcon><HomeOutlinedIcon /> </SideDivIcon>
                    <SideDivText>Home</SideDivText>
                </SideDivItems>
                <SideDivItems>
                    <SideDivIcon><EqualizerOutlinedIcon /> </SideDivIcon>
                    <SideDivText>Stats</SideDivText>
                </SideDivItems>
                <SideDivItems onClick={() => handleLogout()}>
                    <SideDivIcon><AccountCircleOutlinedIcon /> </SideDivIcon>
                    <SideDivText>Logout</SideDivText>
                </SideDivItems>
                <p style={{ fontSize: "20px", color: "white" }}>Logged in as: {userName}</p>
            </SideDiv>
            <video width="100%" height="100%" loop autoPlay muted style={{ display: "block" }}>
                <source src='/Videos/calm.mp4' type='video/mp4' />
            </video>
        </div>
    )
}

export default User
