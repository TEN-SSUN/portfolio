import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import minusMenuIcon_b from '../img/minus.png';
import minusMenuIcon_w from '../img/minus_w.png';
//import ten_ssun_logo from '../img/ten_ssun_logo.png';
import {useHistory,withRouter} from "react-router-dom";

const LogoDiv = styled.div`
    position: relative;
    top: 5px;
    float: left;
    left:2%;
    cursor:pointer;
    color : white;
    font-weight : bold;
    background-size: cover;
`;
//background-image: url(${ten_ssun_logo});
    // width: 40px;
    // height: 40px;

const MenuIconDiv = styled.div`
    display: block;
    position: relative;
    width: 40px;
    height: 33px;
    top: 0px;
    float: right;
    right: 1%;
    cursor:pointer;
`;

const MenuIconTop = styled.span`
    position: relative;
    display: block;
    width: 40px;
    height: 4px;
    background-image: url(${minusMenuIcon_w});
    background-repeat: no-repeat;
    background-size: 40px auto;
    top: ${props => props.topMenuBarTop};
    transform:${props => props.topMenuBarRote};
    transition : all ease 0.2s;
`;

const MenuIconBottom = styled.span`
    position: relative;
    display: block;
    width: 40px;
    height: 4px;
    background-image: url(${minusMenuIcon_w});
    background-repeat: no-repeat;
    background-size: 40px auto;
    top:${props => props.bottomMenuBarTop};
    transform:${props => props.bottomMenuBarRete};
    transition : all ease 0.2s;
`;

const MenuBarTop = 10;

function Header(props) 
{
    const history = useHistory();
    const [topMenuBarTop, setTopMenuBarTop] = useState((MenuBarTop+1)+'px');
    const [topMenuBarRote, setTopMenuBarRote] = useState('rotate( 0deg )');
    const [bottomMenuBarTop, setBottomMenuBarTop] = useState((MenuBarTop+6)+'px');
    const [bottomMenuBarRete, setBottomMenuBarRete] = useState('rotate( 0deg )');
    const [bOpenMenu, setBOpenMenu] = useState(false);

    const onClick = () => 
    {
        //color === 'red' ? setColor('yellow') : setColor('red');
        if(bOpenMenu)
        {
            setBOpenMenu(false);
            setTopMenuBarTop((MenuBarTop+1)+'px');
            setTopMenuBarRote('rotate( 0deg )');
            setBottomMenuBarTop((MenuBarTop+6)+'px');
            setBottomMenuBarRete('rotate( 0deg )');
            props.onQkrddong(false);
        }
        else
        {
            setBOpenMenu(true);
            setTopMenuBarTop((MenuBarTop+4)+'px');
            setTopMenuBarRote('rotate( 45deg )');
            setBottomMenuBarTop(MenuBarTop+'px');
            setBottomMenuBarRete('rotate( -45deg )');
            props.onQkrddong(true);
        }
    };

    const onClickLogo = () =>
    {
        history.push({
            pathname: '/',
            state: {id:'id'}
        });

        if(bOpenMenu)
        {
            setBOpenMenu(false);
            setTopMenuBarTop((MenuBarTop+1)+'px');
            setTopMenuBarRote('rotate( 0deg )');
            setBottomMenuBarTop((MenuBarTop+6)+'px');
            setBottomMenuBarRete('rotate( 0deg )');
            props.onQkrddong(false);
        }
        else
        {
            props.onBlinkMove();
        }
    }
    
    useEffect(() => 
    {
        if(props.menuWidth===0)
        {
            setBOpenMenu(false);
            setTopMenuBarTop((MenuBarTop+1)+'px');
            setTopMenuBarRote('rotate( 0deg )');
            setBottomMenuBarTop((MenuBarTop+6)+'px');
            setBottomMenuBarRete('rotate( 0deg )');
            props.onQkrddong(false);
            document.getElementById('menuIconTop').style.backgroundImage = "url("+minusMenuIcon_w+")";
            document.getElementById('menuIconBottom').style.backgroundImage = "url("+minusMenuIcon_w+")";
        }
        else
        {
            setBOpenMenu(true);
            setTopMenuBarTop((MenuBarTop+4)+'px');
            setTopMenuBarRote('rotate( 45deg )');
            setBottomMenuBarTop(MenuBarTop+'px');
            setBottomMenuBarRete('rotate( -45deg )');
            props.onQkrddong(true);
            document.getElementById('menuIconTop').style.backgroundImage = "url("+minusMenuIcon_b+")";
            document.getElementById('menuIconBottom').style.backgroundImage = "url("+minusMenuIcon_b+")";
        }
        
    }, [props
        ,setBOpenMenu
        ,setTopMenuBarTop
        ,setTopMenuBarRote
        ,setBottomMenuBarTop
        ,setBottomMenuBarRete]);
    
    return (
        <Fragment>
        <div style={{padding:'18px' ,position:'absolute' ,left:'0px',right:'0px'}}>
            <LogoDiv id="logo" onClick={onClickLogo}>TEN_SSUN</LogoDiv>
            <MenuIconDiv onClick={onClick}>
                <MenuIconTop    id="menuIconTop"        topMenuBarTop={topMenuBarTop} topMenuBarRote={topMenuBarRote} id="menuIconTop"></MenuIconTop>
                <MenuIconBottom id="menuIconBottom"     bottomMenuBarTop={bottomMenuBarTop} bottomMenuBarRete={bottomMenuBarRete} id="menuIconBottom"></MenuIconBottom>
            </MenuIconDiv>
        </div>
        </Fragment>
    );
  }
  
export default withRouter(Header);