import React, { Fragment, useState, useEffect} from "react";
import styled from "styled-components";
import {useHistory,withRouter} from "react-router-dom";

const MenuListDiv = styled.div`
    position: absolute;
    display: block;
    top: 0px;
    height: 100%;
    right: 0px;
    width: ${props => props.menuWidth}px;
    background-color: white;
    transition : all ease ${props => props.animationSpeed}s; //스타일이 변경될때 1초의 시간동안 변경
    overflow: hidden; //화면이 넘어가도 스크롤바 가안생기게
`;

const TableDiv = styled.div`
    position : absolute;
    top : 100px;
    left: 30px;
    right: 30px;
`;

const ListUl = styled.ul`
    top: 100px;
    width: 100%;
    list-style : none;
    margin : 0px;
    padding : 0px;
`;

const ListLi = styled.li`

    cursor : pointer;
    font-size : 40px;
    margin: 0px;
    padding-top: 20px;
    &:hover {
        font-weight : bolder;
      }
`;

const ListHr = styled.hr`
    position : absolute;
    transition : all ease 0.3s;
    left : 0px;
    align : left;
    width : 0px;
    visibility : hidden;
    border-top : 1px solid;
    border-left : 1px none;
    border-bottom : 1px none;
    border-right : 1px none;
`;

// background-repeat: no-repeat;
// background-size: 40px auto;
// background-image: url(${minusMenuIcon});

function RightMenuList(props) 
{
    const history = useHistory();

    const [menuWidth, setMenuWidth] = useState(props.menuWidth);
    const [animationSpeed, setAnimationSpeed] = useState(0.1);
    
    // const [bOpenMenu, setBOpenMenu] = useState(false);

    useEffect(() => {
        setAnimationSpeed(props.menuWidth===0?0.15:0.5);
        setMenuWidth(props.menuWidth);
    }, [setMenuWidth,props.menuWidth,setAnimationSpeed,animationSpeed]);

    const onClick=(e)=>
    {
        history.push({
            pathname: '/'+ (e.target.id).substring(0,(e.target.id).length-2),
            state: {id:'id'}
        });
        props.onQkrddong(false);
    }

    const onMouseEnterList=(e)=>
    {
        let tempId= (e.target.id).substring(0,(e.target.id).length-2);
        
        document.getElementById(tempId+"Hr").style.width = (document.getElementById(tempId+"Sp").offsetWidth+10)+"px";
        document.getElementById(tempId+"Hr").style.visibility = "visible";
    }

    const onMouseLeaveList=(e)=>
    {
        let tempId= (e.target.id).substring(0,(e.target.id).length-2);

        document.getElementById(tempId+"Hr").style.width = "0px";
        document.getElementById(tempId+"Hr").style.visibility = "hidden";
    }

    return (
        <Fragment>
            <MenuListDiv id="menuListDiv" menuWidth={menuWidth} animationSpeed={animationSpeed}>
                <TableDiv>
                    <ListUl>
                        {/* Work */}
                        <ListLi id="workLi" onClick={onClick} onMouseEnter={onMouseEnterList}  onMouseLeave={onMouseLeaveList}>
                            <span id="workSp" onClick={onClick} onMouseEnter={onMouseEnterList}  onMouseLeave={onMouseLeaveList}>Work</span>
                        </ListLi>
                        <ListHr id="workHr"/>

                        {/* About */}
                        <ListLi id="aboutLi" onClick={onClick} onMouseEnter={onMouseEnterList}  onMouseLeave={onMouseLeaveList}>
                            <span id="aboutSp" onClick={onClick} onMouseEnter={onMouseEnterList}  onMouseLeave={onMouseLeaveList}>About</span>
                        </ListLi>
                        <ListHr id="aboutHr"/>
                        
                        {/* Contact */}
                        <ListLi id="contactLi" onClick={onClick} onMouseEnter={onMouseEnterList}  onMouseLeave={onMouseLeaveList}>
                            <span id="contactSp" onClick={onClick} onMouseEnter={onMouseEnterList}  onMouseLeave={onMouseLeaveList}>Contact</span>
                        </ListLi>
                        <ListHr id="contactHr"/>
                    </ListUl>
                </TableDiv>
            </MenuListDiv>
        </Fragment>
    );
  }
  
export default withRouter(RightMenuList);