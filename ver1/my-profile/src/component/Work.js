import React, { Fragment, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import sunset from '../img/sunset2.jpg';

const WorkFullDivision = styled.div`
    position : absolute;
    width : ${props => props.browserWidth}px;
    height : ${props => props.browserHeight*3}px; 
    background-color:${props => props.worksMainColor};
    transition : all ease 0.2s;
`;

const MainTextDivision = styled.div`
    position : absolute;
    top : ${props => props.browserHeight*0}px;
    width : ${props => props.browserWidth}px;
    height : ${props => props.browserHeight}px; 
`;
const MainTextDivision2 = styled.div`
    position : absolute;
    top : ${props => props.browserHeight*1}px;
    width : ${props => props.browserWidth}px;
    height : ${props => props.browserHeight}px;
`;
const MainTextDivision3 = styled.div`
    position : absolute;
    top : ${props => props.browserHeight*2}px;
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
    color : #CC723D;
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
    cursor: pointer;
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
    const [worksMainColor, setWorksMainColor] = useState("#C4B73B");

    const location = useLocation();
    console.log(location);

    const handleWindowResize = useCallback(event => {
        setBrowserWidth(document.documentElement.clientWidth);
        setBrowserHeight(document.documentElement.clientHeight);
    }, []); 

    const handleScrollMove = useCallback(event => {
        console.log((700>=window.pageYOffset)+" | "+((Number(browserHeight*0)+Number(700))<Number(window.pageYOffset))+" | "+ ((Number(browserHeight*1)+Number(700))<Number(window.pageYOffset)));

        if((Number(browserHeight*1)+Number(700))<Number(window.pageYOffset))
        {
            setWorksMainColor("#C4003B");
        }
        else if((Number(browserHeight*0)+Number(700))<Number(window.pageYOffset))
        {
            setWorksMainColor("#00B73B");
        }
        else if(700>=window.pageYOffset)
        {
            setWorksMainColor("#C4B73B");
        }

    }, []); 

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        window.addEventListener('scroll', handleScrollMove);
    },[handleWindowResize])
    
    return (
        <Fragment>
            <WorkFullDivision id="WorkFullDivision" browserWidth={browserWidth} browserHeight={browserHeight} worksMainColor={worksMainColor}>
                <MainTextDivision id="MainTextDivision" browserWidth={browserWidth} browserHeight={browserHeight}>
                    <MainImageDiv><MainImage src={sunset} /></MainImageDiv>
                    <MainText id="mainTitle"></MainText>
                    <SubText>Freelance Front-End and Back-End Developer with an appetite for web design, based in Korea</SubText>
                </MainTextDivision>
                <MainTextDivision2 id="MainTextDivision2" browserWidth={browserWidth} browserHeight={browserHeight}>
                    <SubText>Freelance Front-End and Back-End Developer with an appetite for web design, based in <span style={{fontColor:"red"}}>Korea</span></SubText>
                </MainTextDivision2>
                <MainTextDivision3 id="MainTextDivision3" browserWidth={browserWidth} browserHeight={browserHeight}>
                    <SubText>Freelance Front-End and Back-End Developer with an appetite for web design, based in <span style={{fontColor:"red"}}>Korea</span></SubText>
                </MainTextDivision3>
            </WorkFullDivision>
        </Fragment>
    );
  }
  
export default Contact;