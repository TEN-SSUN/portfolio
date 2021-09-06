import React, { Fragment } from "react";
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import sunset from '../img/sunset2.jpg';

const MainTextDivision = styled.div`
    position : absolute;
    width : 100%;
    height : 100%;
    background-color:white;
`;

const HeadImageDivision = styled.div`
    position : absolute;
    width : 100%;
    height : 150px;
    background-color:blue;
	background-image: url(${sunset});
`;

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
    color : black;
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
                <HeadImageDivision/>
                <MainText id="mainTitle">Work</MainText>
                {/* <SubText>zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</SubText> */}
            </MainTextDivision>
        </Fragment>
    );
  }
  
export default Contact;