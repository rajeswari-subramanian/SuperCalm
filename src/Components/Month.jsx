import React, { useState } from 'react'
import { useSelector } from "react-redux";
import DropDown from './DropDown'
import ThirdPieCharts from './ThirdPieCharts'

function Month() {
    const userName = useSelector(state => state.user.userName)
    const userStatsShow = useSelector(state => state.user.userStatsShow)

    return (
        <>
            {userStatsShow && <h1 style={{ color: "white" }}>Welcome<span style={{ fontSize: "30px", fontStyle: "italic" }}></span> {userName}</h1>}
            <DropDown />
            {!userStatsShow && <div style={{ borderRadius: "25px", background: "rgb(186,195,206,0.8)", width: "100%", height: "50%" }}>
                <ThirdPieCharts />
            </div>}
        </>
    )
}

export default Month

