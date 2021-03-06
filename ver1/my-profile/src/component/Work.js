import React, { Fragment, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import WorkContents from './WorkContents';
import WorkContentsMenu from './WorkContentsMenu';

import sunset from '../img/sunset2.jpg';
import sunglesses from '../img/cat_sunglesses.jpg';
import wave from '../img/wave2.jpg';
import sky_forest from '../img/sky_forest.jpg';

const WorkFullDivision = styled.div`
    position : absolute;
    width : ${props => props.browserWidth}px;
    height : ${props => props.browserHeight* props.workListCount}px; 
    background-color:${props => props.worksMainColor};
    transition : background-color ease 1s;
    overflow: hidden;
`;

const LeftMenuDivision = styled.div`
    position : fixed;
    width : 2px;
    height : ${props => props.browserHeight*0.8}px; 
    bottom : 0px;
    left : 40px;
    background-color:white;
    transition : background-color ease 1s;
    overflow: hidden;
`;

// const TestDiv = styled.div`
//     margin:5px;
//     text-align: center;
//     font-size:30px;
//     line-height: 100px;
//     border:solid 1px black;
//     background-color: yellow;
//     position:sticky;
//     top:0px;
// `;

function Contact() 
{
    const [workList]= useState([
                                {
                                seq: 1
                                ,color:"#ffcc00"
                                ,img:sunset
                                ,title:"SunSet"
                                ,contents:"Peaceful sea"
                                },
                                {
                                seq: 2
                                ,color:"#03C9A9"
                                ,img:sky_forest
                                ,title:"Forest"
                                ,contents:"I Love Camping"
                                },
                                {
                                seq: 3
                                ,color:"#22A7F0"
                                ,img:wave
                                ,title:"Wave"
                                ,contents:"So~~Cooooooooooooooooool"
                                },
                                {
                                seq: 4
                                ,color:"#F64747"//C4003B
                                ,img:sunglesses
                                ,title:"?????? ?????? ????????? ???"
                                ,contents:`Gangnam Style~
                                            Korea
                                            `
                                },
                            ])
    //let cPos =0; 

    const [browserWidth, setBrowserWidth] = useState(document.documentElement.clientWidth);
    const [browserHeight, setBrowserHeight] = useState(document.documentElement.clientHeight);
    const [worksMainColor, setWorksMainColor] = useState(workList[0].color);
    const [workListCount] = useState(workList.length);
    //const [gapPercent] = useState((0.8-0.4)/(workList.length-1));
    const [gapPercent] = useState((0.075));
    const [currentPage,setCurrentPage] = useState(0);

    const handleWindowResize = useCallback(event => {
        setBrowserWidth(document.documentElement.clientWidth);
        setBrowserHeight(document.documentElement.clientHeight);
    }, []); 

    const handleScrollMove = useCallback(event => {
        
        for(let i=workList.length-1; i>=1 ;i--)
        {
            if((Number(browserHeight*(i-1))+(Number(browserHeight)/2))<Number(window.pageYOffset))
            {
                setWorksMainColor(workList[i].color);
                setCurrentPage(i+1);
                break;
            }
            else if((Number(browserHeight)/2)>=window.pageYOffset)
            {
                setWorksMainColor(workList[0].color);
                setCurrentPage(1);
                break;
            }
        }
        
    }, [browserHeight,workList]); 

    const omMoveContent =(num)=>
    {
        let tempTop = document.getElementById('MainContentDivision'+(num)).offsetTop;
        window.scrollTo({top:tempTop,behavior: 'smooth'});
    }

    useEffect(() => 
    {
        setBrowserWidth(document.documentElement.clientWidth);
        setBrowserHeight(document.documentElement.clientHeight);

        window.addEventListener('resize', handleWindowResize);
        window.addEventListener('scroll', handleScrollMove);

        setCurrentPage(1);

    },[handleWindowResize,handleScrollMove]);
    
    return (
        <Fragment>
            <WorkFullDivision id="WorkFullDivision" browserWidth={browserWidth} browserHeight={browserHeight} worksMainColor={worksMainColor} workListCount={workListCount}>
                
                {/* <TestDiv>div3</TestDiv> */}
                {workList.map(({ seq, img, title, contents }) => (
                    <WorkContents   browserWidth={browserWidth} 
                                    browserHeight={browserHeight} 
                                    num={seq}  
                                    currentPage={currentPage}
                                    img={img} 
                                    title={title} 
                                    contents={contents}/>
                    ))} 
            </WorkFullDivision>
            <LeftMenuDivision id="LeftMenuDivision" browserHeight={browserHeight}>
            {workList.map(({ seq, status, title, contents }) => (
                    <WorkContentsMenu   num={seq} 
                                        status={status} 
                                        gapPercent={gapPercent} 
                                        browserHeight={browserHeight} 
                                        omMoveContent={omMoveContent} 
                                        currentPage={currentPage}
                                        title={title} 
                                        contents={contents}
                                    />
                    ))}
            </LeftMenuDivision>
        </Fragment>
    );
  }
  
export default Contact;