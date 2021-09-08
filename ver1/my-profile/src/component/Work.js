import React, { Fragment, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import WorkContents from './WorkContents';

import sunset from '../img/sunset2.jpg';
import sunglesses from '../img/cat_sunglesses.jpg';
import wave from '../img/wave2.jpg';
import sky_forest from '../img/sky_forest.jpg';

const WorkFullDivision = styled.div`
    position : absolute;
    width : ${props => props.browserWidth}px;
    height : ${props => props.browserHeight* props.workListCount}px; 
    background-color:${props => props.worksMainColor};
    transition : all ease 0.2s;
`;

function Contact() 
{
    const workList= [
                        {
                        seq: 1
                        ,color:"#C4B73B"
                        ,img:sunset
                        ,title:"SunSet"
                        ,contents:"Peaceful sea"
                        },
                        {
                        seq: 2
                        ,color:"#80b463"
                        ,img:sky_forest
                        ,title:"Forest"
                        ,contents:"I Love Camping"
                        },
                        {
                        seq: 3
                        ,color:"#b0dfb8"
                        ,img:wave
                        ,title:"Wave"
                        ,contents:"So~~Cooooooooooooooooool"
                        },
                        {
                        seq: 4
                        ,color:"#ef404f"//C4003B
                        ,img:sunglesses
                        ,title:"Cat"
                        ,contents:"Gangnam Style~"
                        }
                    ]

    const [browserWidth, setBrowserWidth] = useState(document.documentElement.clientWidth);
    const [browserHeight, setBrowserHeight] = useState(document.documentElement.clientHeight);
    const [worksMainColor, setWorksMainColor] = useState(workList[0].color);

    const [workListCount] = useState(workList.length);

    const location = useLocation();
    //console.log(location);

    const handleWindowResize = useCallback(event => {
        setBrowserWidth(document.documentElement.clientWidth);
        setBrowserHeight(document.documentElement.clientHeight);
    }, []); 

    const handleScrollMove = useCallback(event => {

        for(let i=workList.length-1; i>=1 ;i--)
        {
            if((Number(browserHeight*(i-1))+Number(300))<Number(window.pageYOffset))
            {
                setWorksMainColor(workList[i].color);
                break;
            }
            else if(300>=window.pageYOffset)
            {
                setWorksMainColor(workList[0].color);
                break;
            }
        }
        //console.log(worksMainColor+" | "+window.pageYOffset);
    }, []); 

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        window.addEventListener('scroll', handleScrollMove);
    },[handleWindowResize])
    
    return (
        <Fragment>
            <WorkFullDivision id="WorkFullDivision" browserWidth={browserWidth} browserHeight={browserHeight} worksMainColor={worksMainColor} workListCount={workListCount}>
                {workList.map(({ seq, img, title, contents }) => (
                    <WorkContents id={"workContents"+seq} browserWidth={browserWidth} browserHeight={browserHeight} num={seq} img={img} title={title} contents={contents}/>
                    ))} 
            </WorkFullDivision>
        </Fragment>
    );
  }
  
export default Contact;