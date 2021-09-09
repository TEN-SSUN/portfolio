import React, { useEffect, useState } from "react";
import styled from "styled-components";

const WorkFullDivision = styled.div`
    position: fixed;
    width: 30px;
    height: 150px;
    bottom:${props => props.topMove}px;
    left:15px;
    box-sizing: border-box;
    padding: 2rem;
    background: white;
    box-shadow: 0 1rem 5rem -2rem rgba(black,0.5);
    //transition: transform 100ms linear;
    transition: all ease 1s;
    transition-delay : ${props => props.delaySec}s;
`;

export default function Contact(props) 
{
    const moveGap = 10;
    const trackerTop = 300;

    const [topMove,setTopMove] = useState(trackerTop);
    const [delaySec,setDelaySec] = useState(trackerTop);

    useEffect(() => 
    {
        if(props.posStatus==='U')
        {
            if(1===1)
            {
                setDelaySec(1);
                setTopMove(trackerTop-moveGap);
            }
            setDelaySec(0);
            setTopMove(trackerTop);
        }
        else if(props.posStatus==='D')
        {
            if(1===1)
            {
                setDelaySec(1);
                setTopMove(trackerTop+moveGap);
            }
            setDelaySec(0);
            setTopMove(trackerTop);
        }
        else
        {
            setTopMove(300);
        }
    },[props]);

    return (
        
        <WorkFullDivision topMove={topMove} delaySec={delaySec}> 
        <p>
        T <br/>
        B <br/>
        H <br/>
        </p>
        </WorkFullDivision>
    );
}