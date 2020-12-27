import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { userWeek } from '../Redux/User/action'

const WeekBtn = styled.div`
  font-size: 18px;
  cursor: pointer;
  color: white;
  padding: 20px;
  border-radius: 35px;    
  &:hover{
    background: rgb(0, 0, 0, 0.2);
  }
`;

function WeekButtons(props) {
    const [toggle, setToggle] = useState(false)
    const dispatch = useDispatch()

    const handleClick = (item) => {
        dispatch(userWeek(item))
        setToggle(true)
    }
    return (
        <>
            <WeekBtn
                toggle1={toggle}
                onClick={() => handleClick(props.item)}
                key={props.i}
                type="button"
                class="btn btn-lg"
            >
                {props.item}
            </WeekBtn>

        </>
    );
}

export default WeekButtons
