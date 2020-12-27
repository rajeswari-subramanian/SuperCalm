import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import FirstLineCharts from "./FirstLineCharts";
import user from "../user.json";
import WeekButtons from './WeekButtons'

function Week() {
    const weekName = useSelector(state => state.user.weekName)
    const [week, setWeek] = useState(user[0].moodTrends.week1[1].value);

    useEffect(() => {
        if (weekName === "Week 1") setWeek(user[0].moodTrends.week1[1].value);
        else if (weekName === "Week 2") setWeek(user[0].moodTrends.week2[1].value);
        else if (weekName === "Week 3") setWeek(user[0].moodTrends.week3[1].value);
        else if (weekName === "Week 4") setWeek(user[0].moodTrends.week4[1].value);
        else if (weekName === "Week 5") setWeek(user[0].moodTrends.week5[1].value);
    }, [weekName, week])


    return (
        <>
            <div style={{ display: "flex", fontWeight: "bolder" }}>
                {["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"].map((item, i) => (
                    <WeekButtons item={item} i={i} />
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
