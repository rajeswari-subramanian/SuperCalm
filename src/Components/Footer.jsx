import React from "react";
import styled from 'styled-components'

const FooterContainer = styled.div`
    background-color: #717171;
    padding-top: 50px;              
    width: 100%;
    height: 70vh;
    display: flex;
    flex-wrap:wrap
`;

const FooterColumns = styled.div`
margin-left: ${(props) => (props.left ? props.left : null)};
flex-basis: ${(props) => (props.basis ? props.basis : "20%")} 
`;

const FooterTitle = styled.p`                            
    cursor: pointer;
    text-align:left;
    font-size: 18px;
    color: #F0F0F0;
    font-weight: 700px;
    letter-spacing: 0.2px;
    font-family: sans-serif;
`;

const FooterItems = styled.p`                            
    color: #DADADA;
    text-align: left;
    style: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 0.2px;                           

`;

const SPAN = styled.span`
    padding:14px;
`;

const FooterCopyright = styled.p`
   color: #B5B5B5;
   margin: 20px;
   flex-basis: 100%
`;

export default function Footer() {
    return (
        <FooterContainer>
            <FooterColumns left="15%">
                <FooterTitle>
                    Company
                    </FooterTitle>
                <FooterItems>
                    About
                    </FooterItems>
                <FooterItems>
                    Careers
                    </FooterItems>
                <FooterItems>
                    Press
                    </FooterItems>
                <FooterItems>
                    Blog
                    </FooterItems>
                <FooterItems>
                    Meet our Instructor
                </FooterItems>
                <FooterItems>
                    Calm Science
                    </FooterItems>
                <FooterItems>
                    Brand Partnerships
                </FooterItems>
            </FooterColumns>
            <FooterColumns>
                <FooterTitle>
                    Offers
                    </FooterTitle>
                <FooterItems>
                    Buy a Gift
                    </FooterItems>
                <FooterItems>
                    Redeem a Gift
                    </FooterItems>
                <FooterItems>
                    Calm for Business
                    </FooterItems>
            </FooterColumns>
            <FooterColumns>
                <FooterTitle>
                    Help
                    </FooterTitle>
                <FooterItems>
                    FAQ
                    </FooterItems>
                <FooterItems>
                    Contact Us
                    </FooterItems>
                <FooterItems>
                    Terms
                </FooterItems>
                <FooterItems>
                    Privacy
                    </FooterItems>
                <FooterItems>
                    Cookies
                </FooterItems>
            </FooterColumns>
            <FooterColumns basis="10%">
                <div style={{ color: "#DADADA" }}>
                    <SPAN><i class="fab fa-instagram"></i></SPAN>
                    <SPAN><i class="fab fa-facebook-f"></i></SPAN>
                    <SPAN><i class="fab fa-twitter"></i></SPAN>
                </div>
            </FooterColumns>
            <FooterCopyright>
                Copyright © 2020 Calm. All rights reserved
            </FooterCopyright>
        </FooterContainer>
    );
}