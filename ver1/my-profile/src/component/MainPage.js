import React, { Fragment,useState,useEffect } from "react";
import styled from "styled-components";
import {withRouter} from "react-router-dom";
import mainPageImg from '../img/cat_keyboard.jpg';

const BgDivision = styled.div`
    position : absolute;
    width : 100%;
    height : 100%;
    background-color:black;
    overflow: hidden;
`;

const MainImage = styled.div`
    position : absolute;
    top : 30%;
    left : 800px;
    width : 300px;
    height: 450px;
    background-color : white;
    background-size: cover;
    background-image : url(${mainPageImg});
`;

const MainTextDivision = styled.div`
    position : absolute;
    top : 55%;
    left : 150px;
`;

const MainText = styled.p`
    position : relative;
    color : white;
    font-weight : bold;
    font-size : 80px;
    margin : 10px;
    transition : all ease 0.3s; 
`;

const SubText = styled.p`
    position : relative;
    color : white;
    font-weight : bold;
    font-size : 30px;
    margin : 10px;
    transition : all ease 0.3s; 
    width : 500px;
`;

const Circle = styled.div`
	width: 100px;  
    height: 100px;
	background-color: #FFF;
	position: absolute;
	top: 60px; 
    left: 60px;
	mix-blend-mode: difference; 
	border-radius: 50%;
	will-change: transform;
    transition : all ease 0.0001s;
`;

//transform :  translate3d(${props => props.moveX}px, ${props => props.moveY}px, 0);
    
// let circleX = 0;
// let circleY = 0;

// const onMouseMoveCircle =() =>
// {
//     if(document.getElementById('circle')!=null)
//     {
//         document.getElementById('circle').style.transform = `translate3d(${circleX}px, ${circleY}px, 0 )`;
//     }

//     requestAnimationFrame(onMouseMoveCircle);
// }

function MainPage() 
{
    // const [moveX]  = useState(0);
    // const [moveY] = useState(0);

    // const handleMouseMove =(e)=>
    // {
    //     circleX = e.clientX-100;
    //     circleY = e.clientY-100;
    // }

    useEffect(() => 
    {
        //onMouseMoveCircle();
    });
    
    return (
        <Fragment>
            <BgDivision >
            {/* // onMouseMove={handleMouseMove} */}
            <MainImage></MainImage>
            <MainTextDivision>
                <MainText>Hi, I'm Dongsun Park</MainText>
                <SubText>Freelance Front-End and Back-End Developer with an appetite for web design, based in Korea</SubText>
            </MainTextDivision>
            {/* <Circle id="circle" moveX={moveX} moveY={moveY}/> */}
            </BgDivision>
        </Fragment>
    );

    
}
  
export default withRouter(MainPage);
