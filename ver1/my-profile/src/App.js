import React,{useState} from "react";
import Header from "./component/Header";
import RightMenuList from "./component/RightMenuList";
import MainPage from "./component/MainPage";
import Work from "./component/Work";
import About from "./component/About";
import Contact from "./component/Contact";

//import Background from './img/greenBack1.jpg';
import styled from "styled-components";
import { 
	BrowserRouter as Router, 
	Switch, 
	Route 
} from 'react-router-dom';


const LeftMenuWidth = 350;

const BackgroundMain = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-size: fill;
	background-color:#000;
`;
//background-image: url(${Background});

const BackgroundCover = styled.div`
	background-color:#ffffff;
	background-size: cover;
	position: absolute;
	width: 100%;
	height: 100%;
	opacity: 0.13;
`;

const MenuOpenCover = styled.div`
	background-color :#ffffff;
	background-size : cover;
	position : absolute;
	width : 100%;
	height : 100%;
	opacity : ${props => props.menuOpenCoverOpacity};
	transition : all ease 0.2s; //스타일이 변경될때 1초의 시간동안 변경
	visibility: ${props => props.menuOpenCover};
`;

//background: url('./img/greenBack1.jpg');
function App() 
{
	const menuOpenCoverOpacityRate = 0.3;
	const [menuWidth, setMenuWidth] = useState(0);
	const [menuOpenCover, setMenuOpenCover] = useState('hidden');
	const [menuOpenCoverOpacity, setMenuOpenCoverOpacity] = useState(0);

	const onQkrddong=(w)=>
	{
		if(w)
		{
			setMenuWidth(LeftMenuWidth);
			setMenuOpenCover('visible');
			setMenuOpenCoverOpacity(menuOpenCoverOpacityRate);
		}
		else
		{
			setMenuWidth(0);
			setMenuOpenCover('hidden');
			setMenuOpenCoverOpacity(0);
		}
	}

	const onBlinkMove=(w)=>
	{
		setMenuOpenCover('visible');
		setMenuOpenCoverOpacity(menuOpenCoverOpacityRate);
		// setMenuOpenCover('hidden');
		// setMenuOpenCoverOpacity(0);
	}

	const backClick = ()=>{
		onQkrddong(false);
	}

	return (
		<BackgroundMain id="mainBody">
			<BackgroundCover/>
			<Router>

				<Switch>
					<Route path="/" exact>  <MainPage  onClick={backClick}/>         </Route>
					<Route path="/work">     <Work/>     </Route>
					<Route path="/about">    <About/>    </Route>
					<Route path="/contact">  <Contact/>  </Route>
				</Switch>
				
				<MenuOpenCover onClick={backClick} menuOpenCover={menuOpenCover} menuOpenCoverOpacity={menuOpenCoverOpacity}/>
				<RightMenuList id="RightMenuList" styled={{position:'absolute'}} menuWidth={menuWidth}  onQkrddong={onQkrddong}/>
				<Header id="Header" styled={{position:'absolute'}} menuWidth={menuWidth} onQkrddong={onQkrddong} onBlinkMove={onBlinkMove}/>

			</Router>
		</BackgroundMain>
	);
}

export default App;
