import React, { Fragment } from "react";
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
//import sky_forest from '../img/sky_forest.jpg';
//import AnimationTest from './AnimationTest';

const MainTextDivision = styled.div`
    position : absolute;
    width : 100%;
    height : 100%;
    background-color:black;
`;

// const HeadImageDivision = styled.div`
//     position : absolute;
//     width : 100%;
//     height : 150px;
//     background-color:blue;
// 	background-image: url(${sky_forest});
// `;

const MainText = styled.p`
    position : absolute;
    padding :0px;
    margin : 0px;
    display:flex;
    left : 50%;
    top: 170px;
    transform: translate(-50%);
    font-size : 80px;
    transition : all ease 0.3s;
    color : white;
    font-weight : bold;
`;

// const SubText = styled.p`
//     position : relative;
//     color : white;
//     font-weight : bold;
//     font-size : 30px;
//     margin : 10px;
//     transition : all ease 0.3s; 
//     width : 500px;
// `;

function Contact() 
{
    const location = useLocation();
    console.log(location);

    return (
            <Fragment>
             <MainTextDivision>
                 <MainText id="mainTitle">CONTACT ME</MainText>
             </MainTextDivision>
             </Fragment>
        
    );
  }
  
export default Contact;