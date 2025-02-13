import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { adminLoginSuccess } from '../Redux/Admin/action'
import { userLoginSuccess } from '../Redux/User/action'
import { adminLogout } from '../Redux/Admin/action'
import { userLogout } from '../Redux/User/action'
import styled from 'styled-components'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

const NavContainer = styled.div`
  background:${(props) => (props.position > 150 ? "white" : null)} ;
  display: flex;
  padding-top: ${(props) => (props.pad ? props.pad : "80px")} ;
  z-index: 999;
  width: 100%;          
  position: fixed;
`;

const NavLeftContainer = styled.div`
  flex-basis: 35%;
  justify-content: center
`;

const NavRightContainer = styled.div`
  flex-basis: 43%;
  margin-left: 12%;
`;

const NavRightContainerItem = styled.div`
  display: flex;
  justify-content: center;
`;

const NavRightItems = styled.div`
flex-basis:${(props) => (props.basis ? props.basis : null)} ;
`;

const NavRightButtons = styled.div`
  font-size: 18px;
  color: ${(props) => (props.position > 150 ? "black" : "white")} ;
  padding: 20px;  
  border-radius: 35px;
  &:hover {
    background:rgb(0,0,0,0.2);
  }
`;
const CalmButton = styled.div`
    border: ${(props) => (props.position > 150 ? "3px solid black" : "3px solid white")} ;
    font-size: 20px;
    padding: 10px 20px 10px 20px;
    color:${(props) => (props.position > 150 ? "black" : "white")} ; 
    font-weight: bold;  
    border-radius:35px; 
    &:hover {
      background:rgb(0,0,0,0.2);
    }   
`;

export default function Navbar(props) {
  const dispatch = useDispatch()
  const isAdminAuth = useSelector(state => state.admin.isAdminAuth)
  const isUserAuth = useSelector(state => state.user.isUserAuth)
  let history = useHistory();
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const handleHome = () => {
    history.push("/");
  };

  const handleFormSubmit = () => {
    if (name === 'admin' && password === 'admin') {
      dispatch(adminLoginSuccess())
      history.push('/admin')
    }
    else if (name === 'raji' && password === 'raji') {
      dispatch(userLoginSuccess(name))
      history.push('/user')
    }
  }

  const handleLogout = () => {
    if (isAdminAuth) dispatch(adminLogout())
    else dispatch(userLogout())
    history.push('/')
  }

  //console.log("nav",name,password,isAdminAuth,isUserAuth)

  return (
    <>
      <NavContainer pad={`${props.pad}`} position={`${props.position}`}>
        <NavLeftContainer>
          <img
            width="100px"
            height="40px"
            alt=""
            src={props.position > 150 ? "/calm-blue-logo.png" : "/logo.png"}
            onClick={handleHome}
          />
        </NavLeftContainer>
        <NavRightContainer>
          <NavRightContainerItem>
            {!isAdminAuth && !isUserAuth &&
              <>
                <NavRightItems basis="30%">
                  <NavRightButtons position={`${props.position}`} type="button" class="btn btn-lg ">
                    For Business
                  </NavRightButtons>
                </NavRightItems>
                <NavRightItems basis="18%">
                  <NavRightButtons
                    position={`${props.position}`}
                    data-toggle="modal"
                    data-target="#myModal"
                    type="button" class="btn btn-lg" >
                    Log In
                    </NavRightButtons>
                </NavRightItems>
                <NavRightItems basis="40%">
                  <CalmButton position={`${props.position}`} type="button" class="btn btn-lg">Try Calm for Free
                    </CalmButton>
                </NavRightItems>
              </>}
            {isAdminAuth && !isUserAuth &&
              <div>
                <NavRightButtons
                  type="button" class="btn btn-lg" onClick={() => handleLogout()}>
                  Admin Logout
                  </NavRightButtons>
                <Link to='/admin'>Go To Dashboard</Link>
              </div>}
            {isUserAuth && !isAdminAuth &&
              <div>
                <NavRightButtons
                  type="button" class="btn btn-lg" onClick={() => handleLogout()}>
                  User Logout
                  </NavRightButtons>

                <Link to='/user' style={{ color: "red" }}><i>Go To Dashboard</i></Link>
              </div>}
          </NavRightContainerItem>
        </NavRightContainer>
      </NavContainer>
      <div class="modal" id="myModal" >
        <div class="modal-dialog ">
          <div class="modal-content">
            <button type="button" style={{ position: "relative", top: "10px", left: "200px", outline: "0px", border: "none" }} class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <div class="modal-header" style={{ margin: "auto", border: "none" }}>
              <h4 class="modal-title">Log into your account</h4>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group" style={{ position: "relative" }}>
                  <EmailOutlinedIcon style={{ position: "absolute", top: "10px", left: "10px" }}></EmailOutlinedIcon>
                  <input type="text" value={name} class="form-control" placeholder="Username" required="required" onChange={(e) => setName(e.target.value)}
                    style={{ paddingLeft: "40px" }} />
                </div>
                <div class="form-group" style={{ position: "relative" }}>
                  <LockOutlinedIcon style={{ position: "absolute", top: "10px", left: "10px" }}></LockOutlinedIcon>
                  <input type="password" value={password} class="form-control" placeholder="Password" required="required" onChange={(e) => setPassword(e.target.value)}
                    style={{ paddingLeft: "40px" }} />
                </div>
                <p>Forgot your password?<span style={{ fontWeight: "bolder" }}>Click here</span></p>
                <div class="form-group">
                  <button class="btn btn-success btn-block btn-lg rounded-pill" data-dismiss="modal" onClick={handleFormSubmit}>Log in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
