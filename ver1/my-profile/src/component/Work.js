import React, { Fragment, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import sunset from '../img/sunset2.jpg';

const MainTextDivision = styled.div`
    position : absolute;
    width : ${props => props.browserWidth}px;
    height : ${props => props.browserHeight}px; 
    background-color:black;
`;
const MainTextDivision2 = styled.div`
    position : absolute;
    top : ${props => props.browserHeight}px;
    width : ${props => props.browserWidth}px;
    height : ${props => props.browserHeight}px;
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

const SubText = styled.p`
    position : relative;
    color : gray;
    font-weight : bold;
    font-size : 45px;
    margin : 10px;
    transition : all ease 0.3s; 
    width : 750px;
    left : 50%;
    top : 65%;
    transform: translate(-50%, -50%);
    opacity:0.9;
`;

const MainImageDiv = styled.div` 
    width : 300px;
    height: 450px;
    background-color:white;
    position : absolute;
    top : 30%;
    left : 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    padding:0px;
    margin:0px;
    &:after{
        content:"";
        width: 1px; 
        height: 60px;
        left: 50%; 
        top: -50%;
        background: #ffffff;
        position: absolute;
        opacity: 0;
        z-index: 1;
        transition: all 0.4s ease;
        transform: translate(-50%, -50%);
    }
    &:before{
        content:"";
        width: 60px; 
        height: 1px; 
        left: 150%;
        top: 50%;
        background: #fff;
        position: absolute;
        opacity: 0;
        z-index: 1;
        transition: all 0.4s ease;
        transform: translate(-50%, -50%);
    }
    &:hover:after,&:hover:before {
        opacity: 1;
        left: 50%;
        top: 50%;
    }
`;

const MainImage = styled.img`
    width : 300px;
    height: 450px;
    object-fit : cover;
    overflow: hidden;
    transition : transform ease 0.3s ease-in-out; 
    &:hover {
        opacity: 0.8;
    }
`;

const MainImageCover = styled.div`     
    position : absolute;
    left : 0px;
    top : 0px;
    width : 100%;
    height: 100%;
    background-color:white;
    opacity: 0;
    &:hover {
        opacity: 0.1;
    }
`;

function Contact() 
{
    const [browserWidth, setBrowserWidth] = useState(document.documentElement.clientWidth);
    const [browserHeight, setBrowserHeight] = useState(document.documentElement.clientHeight);

    const location = useLocation();
    console.log(location);

    const handleWindowResize = useCallback(event => {
        setBrowserWidth(document.documentElement.clientWidth);
        setBrowserHeight(document.documentElement.clientHeight);
    }, []); 

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
    },[handleWindowResize])
    
    return (
        <Fragment>0.
            <MainTextDivision id="MainTextDivision" browserWidth={browserWidth} browserHeight={browserHeight}>
                <MainImageDiv><MainImage src={sunset} /></MainImageDiv>
                <MainText id="mainTitle"></MainText>
                <SubText>Freelance Front-End and Back-End Developer with an appetite for web design, based in Korea</SubText>
            </MainTextDivision>
            <MainTextDivision2 id="MainTextDivision2" browserWidth={browserWidth} browserHeight={browserHeight}>
                <SubText>Freelance Front-End and Back-End Developer with an appetite for web design, based in <span style={{fontColor:"red"}}>Korea</span></SubText>
            </MainTextDivision2>
        </Fragment>
    );
  }
  
export default Contact;