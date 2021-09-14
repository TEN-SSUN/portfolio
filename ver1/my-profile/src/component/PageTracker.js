import React, { useEffect } from "react";
import styled from "styled-components";

import bottom_arrow from '../img/bottom_arrow.png';
import top_arrow from '../img/top_arrow.png';

const WorkFullDivision = styled.div`
    position: fixed;
    width: 48px;
    bottom:15px;
    right:15px;
    box-sizing: border-box;
    box-shadow: 0 1rem 5rem -2rem rgba(black,0.5);
`;

const ImgButton = styled.img`
    width:48px;
    height:48px;
    margin-bottom:3px;
    cursor : pointer;
`;

//config vars
const lagAmount = 50;
const maxSpeed = 1000;
const frameRate = 20;
//code
let scrollTop = 0;
let pinTop = 0;
let lastTime;

const updatePinPosition = (time) => 
{
    if(document.getElementById('fullDiv')!=null)
    {
        if (!lastTime)
        {
            lastTime = time;
        }

        let delta = time - lastTime;
        if (delta >= frameRate)
        {
            scrollTop = window.pageYOffset;
            var move = (scrollTop - pinTop) * delta / (lagAmount + delta);
            var direction = move === 0 ? 0 : move / Math.abs(move);
            pinTop = pinTop + Math.min( Math.abs(move), maxSpeed ) * direction;

            document.getElementById('fullDiv').style.transform = `translateY(${-move}px)`;
            lastTime = time;
        }
    }
    requestAnimationFrame(updatePinPosition);
}

export default function Contact(props) 
{
    const moveTop = () =>
    {
        props.onMoveTop();
    }
    const moveBottom = () =>
    {
        props.onMoveBottom();
    }

    
    useEffect(() => 
    {
        updatePinPosition();
    },[]);

    return (
        <WorkFullDivision id='fullDiv'> 
            <ImgButton src={top_arrow} onClick={moveTop}/>
            <ImgButton src={bottom_arrow} onClick={moveBottom}/>
        </WorkFullDivision>
    );
}