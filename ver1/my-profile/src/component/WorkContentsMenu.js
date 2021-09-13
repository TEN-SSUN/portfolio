import React, {useState, useEffect} from "react";
import styled from "styled-components";

const delaySec = 0.07;
const WrapDiv = styled.div`
`;
// position : fixed;
// left: 40px;
// bottom : ${props => (props.browserHeight*(0.8-((props.num-(1))*props.gapPercent)))
//     +(props.num>props.currentPage?-100:0)}px;
// //width:1000px;
// transition : all ease 0.3s;

const MainTextDivision = styled.div`
    position : fixed;
    bottom : ${props => (props.browserHeight*(0.8-((props.num-(1))*props.gapPercent)))
                        +(props.num>props.currentPage?-150:0)}px;
    width : ${props => (props.num===props.currentPage?40:30)}px;
    left: 40px;
    height : 2px;
    background-color:white; 
    transition : all ease 0.3s;
    padding:0px;
    margin:0px;
`;

const NumberingText = styled.span`
    font-size: ${props => (props.num===props.currentPage?48:32)}px;
    position : fixed;
    bottom : ${props => (props.browserHeight*(0.8-((props.num-1) *props.gapPercent)))
                        +(props.num>props.currentPage?-150:0)}px;
    left: ${props => (props.num===props.currentPage?90:80)}px;
    padding-top : 0px;
    padding-right : 10px;
    padding-bottom : 0px;
    padding-left : 0px;
    margin : 0px;
    color : white;
    transform: translate(0, 50%);
    transition : all ease 0.3s;
    cursor : pointer;
    &:hover {
        left:90px;
    }
`;

const TitleDivision = styled.div`
    position : fixed;
    //background-color:white; 
    transition : all ease ${props => (props.num===props.currentPage?0.3:0)}s;
    padding:0px;
    margin:0px;
    visibility:${props => (props.num===props.currentPage?"visible":"hidden")};
    height:40px;
    bottom : ${props => (props.browserHeight*(0.8-((props.num-1) *props.gapPercent)))
                        +(props.num!==props.currentPage?-150:0)-70}px;
    left : 100px;
    overflow:hidden;
    font-size:30px;
    color:white;
    transition-delay:${delaySec}s;
`;

const SubTextDivision = styled.div`
    position : fixed;
    //background-color:white; 
    transition : all ease ${props => (props.num===props.currentPage?0.3:0)}s;
    padding:0px;
    margin:0px;
    visibility:${props => (props.num===props.currentPage?"visible":"hidden")};
    height:40px;
    bottom : ${props => (props.browserHeight*(0.8-((props.num-1) *props.gapPercent)))
                        +(props.num!==props.currentPage?-150:0)-110}px;
    left : 100px;
    overflow:hidden;
    font-size:20px;
    color:white;
    transition-delay:${delaySec}s;
`;

// position : fixed;
// bottom : ${props => (props.browserHeight*(0.8-((props.num-(1))*props.gapPercent)))
//                     +(props.num>props.currentPage?-150:0)}px;
// width : ${props => (props.num===props.currentPage?40:30)}px;
// left: 40px;
// height : 2px;

function lpad(s, padLength, padString)
{ 
    s = s+"";

    while(s.length < padLength)
        s = padString + s;

    return s;
}


function Contact(props) 
{
    const [num, setNum] = useState(0);
    const [gapPercent, setGapPercent] = useState(props.browserHeight);
    const [browserHeight, setBrowserHeight] = useState(props.browserHeight);
    const [currentPage, setCurrentPage] = useState(0);

    const onMouseEnter =()=> {
        
        //document.getElementById("workMenuDiv"+num).style.width="40px";
        // if(num!==currentPage)
        // document.getElementById("workNumText"+num).style.transform="translate(10px, 50%)";
        
    }
    
    const onMouseLeave =()=> {
        
        //document.getElementById("workMenuDiv"+num).style.width="30px";   
        // if(num!==currentPage)
        // document.getElementById("workNumText"+num).style.transform="translate(0, 50%)"; 
    }

    const onClick =()=>{
        props.omMoveContent(num);
    }

    useEffect(() => {
        setNum(props.num);
        setGapPercent(props.gapPercent);
        setBrowserHeight(props.browserHeight);
        setCurrentPage(props.currentPage);
    },[props])
    
    return (
        <WrapDiv onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave} 
                onClick={onClick}
                gapPercent={gapPercent} 
                browserHeight={browserHeight} 
                num={num} color={props.color} 
                currentPage={currentPage}>
            <MainTextDivision id={"workMenuDiv"+num} gapPercent={gapPercent} browserHeight={browserHeight} num={num} color={props.color} currentPage={currentPage}/>
            <NumberingText id={"workNumText"+num} gapPercent={gapPercent} browserHeight={browserHeight} num={num} currentPage={currentPage}>{lpad(num,2,"0")}</NumberingText>
            <TitleDivision  gapPercent={gapPercent} browserHeight={browserHeight} currentPage={currentPage}  num={num}>{props.title}</TitleDivision>
            <SubTextDivision  gapPercent={gapPercent} browserHeight={browserHeight} currentPage={currentPage}  num={num}>{props.contents}</SubTextDivision>
        </WrapDiv>
    );
  }
  
export default Contact;