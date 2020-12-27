import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import { adminLogout } from "../Redux/Admin/action";
import SecondScatterCharts from "./SecondScatterCharts";
import admin from "../admin.json";
import month from '../month.json'

const SideDiv = styled.div`
  z-index: 100;
  padding: 20px 0px 0px 20px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: absolute;
  background: rgb(0, 0, 0, 0.3);
  width: 250px;
  height: 100%;
`;
const BodyDiv = styled.div`
  z-index: 100;
  margin-left: 250px;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  display: flex;
  position: absolute;
  width: 1099px;
  height: 100%;
`;
const CalmButton = styled.div`
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  color: black;
  background: white;
  border-radius: 35px;
  border-color: white;
`;
const SideDivItems = styled.p`
  font-size: 20px;
  color: white;
  display: flex;
`;
const SideDivIcon = styled.div`
  border: 2px solid white;
  cursor: pointer;
  border-radius: 50%;
  padding: 0px 5px 5px 5px;
  margin-right: 20px;
`;
const SideDivText = styled.div`
  align-self: center;
  cursor: pointer;
`;
const MonthButtons = styled.div`
  font-size: 18px;
  cursor: pointer;
  color: white;
  padding: 20px;
  border-radius: 35px;
  &:hover {
    background: rgb(0, 0, 0, 0.2);
  }
`;

const NotifyButton = styled.button`
font-size: 18px;
outline: none;
border: 0px;
font-weight: bolder;
padding: 10px 105px 10px 105px;
color: white;
border-radius: 25px;
background: linear-gradient(green, red)
`;
function Admin() {
    const dispatch = useDispatch();
    let history = useHistory();
    let [aggregate1, setAggregate1] = useState(0);
    let [aggregate2, setAggregate2] = useState(0);
    const [months, setMonths] = useState(month[0].day);
    let [msg, setMsg] = useState("");
    const [showBtn, setShowBtn] = useState(true);
    let sad = {};
    let aggregate = [];


    const handleMonths = (item) => {
        if (item === "Day") setMonths(month[0].day);
        else if (item === "1Month") setMonths(month[1].month1);
        else if (item === "3Months") setMonths(month[2].month3);
        else if (item === "6Months") setMonths(month[3].month6);
    };
    const handleLogout = () => {
        dispatch(adminLogout());
        history.push("/");
    };
    const handleHome = () => {
        history.push("/");
    };
    const sadWindow = (user) => {
        for (let i = 0; i < user.sadTime.length; i++) {
            sad[user.sadTime[i]] = (sad[user.sadTime[i]] || 0) + 1;
        }
    };
    const handleNotify = () => {
        alert("Notications Sent to All Users");
        setShowBtn(false)
    };
    useEffect(() => {
        for (let i = 0; i < admin.length; i++) {
            sadWindow(admin[i]);
        }
        setAggregate1(
            Number(
                Object.keys(sad).reduce(function (a, b) {
                    return sad[a] > sad[b] ? a : b;
                })
            )
        );
        let [keyPrev, keyNext] = [Number(aggregate1) - 1, Number(aggregate1) + 1];
        for (let key in sad) {
            if (key === keyPrev.toString() || key === keyNext.toString()) {
                setAggregate2(Number(key));
            }
        }
        aggregate.push(aggregate1);
        aggregate.push(aggregate2);
        aggregate.sort((a, b) => a - b);

        if (aggregate1 && aggregate2) {
            setMsg(
                `Most of the Users are unhappy at ${aggregate[0]} to ${aggregate[1]} time window`
            );
        }
    }, [aggregate, aggregate1, aggregate2]);

    return (
        <div style={{ position: "relative" }}>
            <SideDiv>
                <p style={{ cursor: "pointer" }}>
                    <img
                        width="100px"
                        height="40px"
                        alt=""
                        src="/logo.png"
                        onClick={handleHome}
                    />
                </p>
                <p>
                    <CalmButton
                        type="button"
                        class="btn btn-outline-info btn-lg rounded-pill"
                    >
                        Try Calm for Free
                    </CalmButton>
                </p>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <SideDivItems>
                        <SideDivIcon>
                            <HomeOutlinedIcon />{" "}
                        </SideDivIcon>
                        <SideDivText>Home</SideDivText>
                    </SideDivItems>
                </Link>
                <SideDivItems>
                    <SideDivIcon>
                        <EqualizerOutlinedIcon />{" "}
                    </SideDivIcon>
                    <SideDivText>All User Stats</SideDivText>
                </SideDivItems>
                <SideDivItems onClick={() => handleLogout()}>
                    <SideDivIcon>
                        <AccountCircleOutlinedIcon />{" "}
                    </SideDivIcon>
                    <SideDivText>Logout</SideDivText>
                </SideDivItems>
                <p style={{ fontSize: "20px", color: "white" }}>Logged in as: admin</p>
            </SideDiv>
            <BodyDiv>
                <div style={{ display: "flex", fontWeight: "bolder" }}>
                    {["Day", "1Month", "3Months", "6Months"].map((item, i) => (
                        <MonthButtons
                            onClick={() => handleMonths(item)}
                            key={i}
                            type="button"
                            class="btn btn-lg"
                        >
                            {item}
                        </MonthButtons>
                    ))}
                </div>

                <div
                    style={{
                        position: "absolute",
                        fontSize: "40px",
                        top: "210px",
                        left: "120px",
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <i style={{ color: "green", marginBottom: "70px" }} class="far fa-smile"></i>
                        <i style={{ color: "red" }} class="far fa-frown"></i>
                    </div>
                </div>
                <div
                    style={{
                        borderRadius: "25px",
                        justifyContent: "right",
                        background: "rgb(186,195,206,0.8)",
                        width: "80%",
                        height: "60%",
                    }}
                >
                    <SecondScatterCharts month={months} />
                </div>
                {msg && showBtn && (
                    <>
                        {" "}
                        <h3> {msg} </h3>
                        <div>
                            <NotifyButton onClick={handleNotify} type="button" class="btn">Push Notification</NotifyButton>
                        </div>
                    </>
                )}
                {!showBtn && <h3> Notified All Users </h3>}
            </BodyDiv>
            <video
                width="100%"
                height="100%"
                loop
                autoPlay
                muted
                style={{ display: "block" }}
            >
                <source src="/Videos/calm.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default Admin;
