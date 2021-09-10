import React, { Fragment,useState,useEffect,useCallback } from "react";
import styled from "styled-components";

import WorkTracker from './WorkTracker';

import { useLocation } from 'react-router-dom';
//import wave from '../img/wave2.jpg';

const MainTextDivision = styled.div`
    position : absolute;
    width : ${props => props.browserWidth}px;
    height : ${props => props.browserHeight}px; 
    background-color:lightgray;
`;
const MainTextDivision2 = styled.div`
    position : absolute;
    top : ${props => props.browserHeight}px;
    width : ${props => props.browserWidth}px;
    height : ${props => props.browserHeight}px;
    background-color:white;
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

const SubText = styled.h1`
    position : relative;
    color : gray;
    font-weight : bold;
    font-size : 45px;
    margin : 10px;
    transition : all ease 0.3s; 
    width : 750px;
    left : 50%;
    top : 50%;
    transform: translate(-50%, -50%);
    opacity:0.7;
`;

const SubText2 = styled.span`
    color : black;
    opacity: 0.7;
    &:hover {
        opacity: 1;
      }
`;

const TextKorea = styled.span`
    background: linear-gradient(to bottom, #ff0000 15%, #0000ff);
    -webkit-background-clip: text;
            background-clip: text;
    color: transparent;
    font-size: 48px;
    font-weight: bold;
`;

function Contact() 
{
    const [browserWidth, setBrowserWidth] = useState(document.documentElement.clientWidth);
    const [browserHeight, setBrowserHeight] = useState(document.documentElement.clientHeight);
    const [posStatus, setPosStatus] = useState("N");

    const location = useLocation();
    //console.log(location);

    const handleWindowResize = useCallback(event => {
        setBrowserWidth(document.documentElement.clientWidth);
        setBrowserHeight(document.documentElement.clientHeight);
    }, []); 

    let cPos =0; 
    const handleScrollMove = useCallback(event => {

        if(Number(cPos)-Number(window.pageYOffset)<0)
        {
            setPosStatus("D");
        }
        else if(Number(cPos)-Number(window.pageYOffset)>0)
        {
            setPosStatus("U");
        }
        else
        {
            setPosStatus("N")
        }

        cPos=window.pageYOffset;

        // for(let i=workList.length-1; i>=1 ;i--)
        // {
        //     if((Number(browserHeight*(i-1))+Number(300))<Number(window.pageYOffset))
        //     {
        //         setWorksMainColor(workList[i].color);
        //         break;
        //     }
        //     else if(300>=window.pageYOffset)
        //     {
        //         setWorksMainColor(workList[0].color);
        //         break;
        //     }
        // }
        
    }, []); 

    const onMoveTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const onMoveBottom = () =>{
        let tempTop = 1000;//document.getElementById('MainContentDivision'+(workList.length)).offsetTop;

        window.scrollTo({top:tempTop,behavior: 'smooth'});
    }

    useEffect(() => {
        setBrowserWidth(document.documentElement.clientWidth);
        setBrowserHeight(document.documentElement.clientHeight);

        window.addEventListener('resize', handleWindowResize);
        window.addEventListener('scroll', handleScrollMove);
    },[handleWindowResize,handleScrollMove])
    
    return (
        <Fragment>
            <MainTextDivision id="MainTextDivision" browserWidth={browserWidth} browserHeight={browserHeight}>
                <MainText id="mainTitle"></MainText>
                <SubText>Freelance <SubText2>Front-End</SubText2> and <SubText2>Back-End</SubText2> Developer with an appetite for web design, based in <TextKorea>Korea</TextKorea></SubText>
            </MainTextDivision>
            <MainTextDivision2 id="MainTextDivision2" browserWidth={browserWidth} browserHeight={browserHeight}>
                <SubText>Freelance <SubText2>Front-End</SubText2> and Back-End Developer with an appetite for web design, based in <p style={{fontColor:"red"}}>Korea</p></SubText>
            </MainTextDivision2>
            <WorkTracker posStatus={posStatus} onMoveTop={onMoveTop} onMoveBottom={onMoveBottom}/>
        </Fragment>
    );
  }
  
export default Contact;