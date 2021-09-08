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
    left : 60px;
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
    left : 35%;
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
        console.log(props.contents)
        setNum(props.num)
        setBrowserWidth(props.browserWidth);
        setBrowserHeight(props.browserHeight);
    },[props])
    
    return (
            <MainTextDivision id={"MainContentDivision"+num} browserWidth={browserWidth} browserHeight={browserHeight} num={num} color={props.color}>
                <MainImageDiv><MainImage src={props.img} /></MainImageDiv>
                <MainText id="mainTitle">{props.title}</MainText>
                <SubText>{props.contents}</SubText>
            </MainTextDivision>
    );
  }
  
export default Contact;