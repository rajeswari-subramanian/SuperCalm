import React, { useState } from "react";
import styled from "styled-components";
import FirstLineCharts from "./FirstLineCharts";
import user from "../user.json";

const WeekButtons = styled.div`
  font-size: 18px;
  cursor: pointer;
  color: white;
  padding: 20px;
  border-radius: 35px;
  &:hover {
    background: rgb(0, 0, 0, 0.2);
  }
`;

function Week() {
    const [week, setWeek] = useState(user[0].moodTrends.week1[1].value);

    const handleWeek = (item) => {
        if (item === "Week1") setWeek(user[0].moodTrends.week1[1].value);
        else if (item === "Week2") setWeek(user[0].moodTrends.week2[1].value);
        else if (item === "Week3") setWeek(user[0].moodTrends.week3[1].value);
        else if (item === "Week4") setWeek(user[0].moodTrends.week4[1].value);
    };
    return (
        <>
            <div style={{ display: "flex", fontWeight: "bolder" }}>
                {["Week1", "Week2", "Week3", "Week4"].map((item, i) => (
                    <WeekButtons
                        onClick={() => handleWeek(item)}
                        key={i}
                        type="button"
                        class="btn btn-lg"
                    >
                        {item}
                    </WeekButtons>
                ))}
            </div>
            <div
                style={{
                    position: "absolute",
                    fontSize: "40px",
                    top: "100px",
                    left: "240px",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <i style={{ color: "green" }} class="far fa-laugh-squint"></i>
                    <i style={{ color: "green" }} class="far fa-smile"></i>
                    <i style={{ color: "yellow" }} class="far fa-meh"></i>
                    <i style={{ color: "red" }} class="far fa-frown"></i>
                    <i style={{ color: "red" }} class="far fa-sad-cry"></i>
                </div>
            </div>
            <div
                style={{
                    borderRadius: "25px",
                    justifyContent: "right",
                    background: "rgb(186,195,206,0.8)",
                    width: "50%",
                    height: "40%",
                }}
            >
                <FirstLineCharts week={week} />
            </div>
        </>
    );
}

export default Week;
