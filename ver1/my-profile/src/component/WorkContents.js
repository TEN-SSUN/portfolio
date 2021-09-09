import React, {useState, useEffect, useCallback} from "react";
import styled from "styled-components";

const MainTextDivision = styled.div`
    position : absolute;
    top : ${props => props.browserHeight*(props.num-1)}px;
    width : ${props => props.browserWidth}px;
    height : ${props => props.browserHeight}px; 
`;

const MainImageDiv = styled.div` 
    width : 300px;
    height: 450px;
    background-color:white;
    position : absolute;
    top : 50%;
    left : 40px;
    transform: translate(0%, -40%);
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

const MainText = styled.p`
    position : absolute;
    padding :0px;
    margin : 0px;
    display:flex;
    justify-content:center;
    left : 60px;
    //transform: translate(-50%);
    //left : 50%;
    top: 170px;
    font-size : 80px;
    transition : all ease 0.3s;
    color : black;
    font-weight : bold;
`;
//text-align : center;

const SubText = styled.p`
    position : absolute;
    color : #CC723D;
    font-weight : bold;
    font-size : 45px;
    margin-top : 10px;
    margin-right : 0px;
    margin-bottom : 0px;
    margin-left : 0px;
    transition : all ease 0.3s; 
    width : ${props => Number(props.browserWidth*1)-Number(420)}px;
    left : 380px;
    top : 30%;
    //transform: translate(-50%, -50%);
    opacity:0.9;
`;

function Contact(props) 
{
    const [num, setNum] = useState(0);
    const [browserWidth, setBrowserWidth] = useState(props.browserWidth);
    const [browserHeight, setBrowserHeight] = useState(props.browserHeight);
    //const [worksMainColor, setWorksMainColor] = useState("#C4B73B");

    useEffect(() => {
        setNum(props.num)
        setBrowserWidth(props.browserWidth);
        setBrowserHeight(props.browserHeight);
    },[props])
    
    return (
            <MainTextDivision id={"MainContentDivision"+num} browserWidth={browserWidth} browserHeight={browserHeight} num={num} color={props.color}>
                <MainImageDiv><MainImage src={props.img} /></MainImageDiv>
                <MainText id="mainTitle">{props.title}</MainText>
                <SubText browserWidth={browserWidth}>{props.contents}</SubText>
            </MainTextDivision>
    );
  }
  
export default Contact;