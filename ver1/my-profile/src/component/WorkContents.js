import React, {useState, useEffect} from "react";
import styled from "styled-components";

const ImgWidth = 900;
const ImgHeight = 550;

const MainTextDivision = styled.div`
    position : absolute;
    top : ${props => props.browserHeight*(props.num-1)}px;
    width : ${props => props.browserWidth}px;
    height : ${props => props.browserHeight}px; 
`;

const MainImageDiv = styled.div` 
    width : ${ImgWidth}px;
    height: ${ImgHeight}px;
    background-color:white;
    position : absolute;
    top : 50%;
    left : 60%;
    //right:70px;
    transform: translate(${props => (props.num===props.currentPage?-40:-20)}%, -50%);
    overflow: hidden;
    padding:0px;
    margin:0px;
    cursor: pointer;
    opacity:${props => (props.num===props.currentPage?1:0)};
    transition : all ease 1s;
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
    width : ${ImgWidth}px;
    height: ${ImgHeight}px;
    object-fit : cover;
    overflow: hidden;
    transition : transform ease 0.3s ease-in-out; 
    opacity:${props => (props.num===props.currentPage?1:0)};
    &:hover {
        opacity: 0.8;
    }
`;

function Contact(props) 
{
    const [num, setNum] = useState();
    const [browserWidth, setBrowserWidth] = useState(props.browserWidth);
    const [browserHeight, setBrowserHeight] = useState(props.browserHeight);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        setNum(props.num);
        setBrowserWidth(props.browserWidth);
        setBrowserHeight(props.browserHeight);
        setCurrentPage(props.currentPage);
    },[props])
    
    return (
            <MainTextDivision   id={"MainContentDivision"+num} 
                                browserWidth={browserWidth} 
                                browserHeight={browserHeight} 
                                num={num} 
                                color={props.color}
                                currentPage={currentPage}>
                <MainImageDiv   num={num}
                                currentPage={currentPage}><MainImage src={props.img} /></MainImageDiv>
            </MainTextDivision>
    );
  }
  
export default Contact;