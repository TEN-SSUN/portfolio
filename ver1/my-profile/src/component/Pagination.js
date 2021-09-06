import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Fragment } from 'react';

import ltImg from '../img/lt_t_e.png';
import ltImg_d from '../img/lt_t_d.png';
import gtImg from '../img/gt_t_e.png';
import gtImg_d from '../img/gt_t_d.png';
import db_ltImg from '../img/db_lt_t_e.png';
import db_ltImg_d from '../img/db_lt_t_d.png';
import db_gtImg from '../img/db_gt_t_e.png';
import db_gtImg_d from '../img/db_gt_t_d.png';

const styles  = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'blue',
    height: 0,
    padding: '0 30px',
    margin : '10px'
  },
  ul:{
    position : "absolute"
    ,listStyle:"none"
    ,padding :"0px"
    ,display:'flex'
    // ,alignItems: 'center'
    // ,justify: 'center'
    //,justifyContent:"center"
    ,left : "50%"
    ,transform: "translate(-50%, -50%)"
  },
  li:{
    float: "left"
    ,cursor : "hand"
    ,height : "32px"
    ,minWidth: "32px"
  },
  button:{
    height : "32px"
    ,minWidth: "32px"
  },
  div:{
    height : "34px"
    ,minWidth: "34px"
    ,textAlign:"center"
    ,display:"table-cell"
    ,verticalAlign:"middle"
    ,cursor : "pointer"
    ,margin : "10px"
  },
  div_ltgt:{
    height : "32px"
    ,minWidth: "32px"
    ,textAlign:"center"
    ,display:"table-cell"
    ,verticalAlign:"middle"
    ,margin : "0px 2px 0px 2px"
  },
  imgLt:{
    cursor : "pointer"
    ,height : "32px"
    ,minWidth: "32px"
    ,border : "solid 1px"
    ,borderColor : "lightgray"
  },
  imgGt:{
    cursor : "pointer"
    ,height : "32px"
    ,minWidth: "32px"
    ,border : "solid 1px"
    ,borderColor : "#dddddd"
  },
  registerBtn: {
    position : "absolute"
    ,display:'flex'
    ,margin : '0px'
    ,right : "96px"
    //marginTop : '-30px',
  },
};

const selectedColor = "#dddddd";
const mouseOverColor = "#ececec";

class pageNavi extends Component
{
  state = {
      currentPage:0
      ,pageCount:0
      ,pageList:[
      ]
  }

  setPage= ( e ) => 
  {
    //console.log(e.target.ariaLabel);
    let pageNo = Number(e.target.innerText);
    this.props.onQkrddong(pageNo);
    this.setState({
          currentPage : pageNo
        });
  }

  onClick = (e) =>
  {
    let tempVal = -1;

    if(e.target.name==null)
    {
      console.log("innerText : "+e.target.innerText);
      tempVal = Number(e.target.innerText);
      //document.getElementById(e.target.id.toString()).style.backgroundColor = "#ececec";
    }
    else
    {
      console.log("innerText : "+e.target.name);

      // if(e.target.name==="imgGt")
      // {
      //   tempVal = this.state.currentPage+1;
      //   //tempVal = tempVal>this.state.pageCount?this.state.pageCount:tempVal;
      // }
      // else if(e.target.name==="imgLt")
      // {
      //   tempVal = this.state.currentPage-1;
      // }
      // else 
      if(e.target.name==="imgLt")
      {
        tempVal = 10*Math.floor((this.state.currentPage-1)/10)-10+1;
      }
      else if(e.target.name==="imgGt")
      {
        tempVal = 10*Math.floor((this.state.currentPage-1)/10)+10+1;
      }
      if(e.target.name==="imgDbLt")
      {
        tempVal = 1;
      }
      else if(e.target.name==="imgDbGt")
      {
        tempVal = this.state.pageCount;
      }
    }
    
    if(!(tempVal<1 || tempVal>this.state.pageCount))
    {
      let pageNo = tempVal;
      this.props.onQkrddong(pageNo);
      this.setState({
            currentPage : pageNo
          });
    }
  }

  onMouseEnter= ( e ) => 
  { 
    if("div-"+this.state.currentPage===e.target.id.toString())
    {
      document.getElementById(e.target.id.toString()).style.backgroundColor = "#cccccc";
    }
    else if(document.getElementById(e.target.id.toString()).src === gtImg_d
            ||document.getElementById(e.target.id.toString()).src === ltImg_d
            ||document.getElementById(e.target.id.toString()).src === db_gtImg_d
            ||document.getElementById(e.target.id.toString()).src === db_ltImg_d
            )
    {

    }
    else
    {
      document.getElementById(e.target.id.toString()).style.backgroundColor = mouseOverColor;
    }
  }

  onMouseLeave= (e)=>
  {
    if("div-"+this.state.currentPage===e.target.id.toString())
    {
      document.getElementById(e.target.id.toString()).style.backgroundColor = selectedColor;
    }
    else
    {
      document.getElementById(e.target.id.toString()).style.backgroundColor = "#ffffff";
    }
  }

  componentWillReceiveProps()
  {
    let currentPage = this.props.pageNo;
    let maxPageCount = this.props.pageCount;//this.props.pageCount
    let tempArray = [];
    let startCnt = 1+(10*Math.floor((currentPage-1)/10));
    
    for(let i=startCnt ; (i<=maxPageCount && i<startCnt+10) ;i++)
    {
      tempArray.push({num:i});
    }

    this.setState({
      pageList : []
      ,pageCount:maxPageCount
      ,currentPage : currentPage
    },()=>this.setPageList(tempArray));
  }

  setPageList (tempArray)
  {
    const { pageList } = this.state;
    this.setState({
      pageList : pageList.concat(...tempArray)
    });
  }

  componentDidUpdate ()
  {
    if(document.getElementById("div-"+this.state.currentPage)!=null)
    {
      document.getElementById("div-"+this.state.currentPage).style.backgroundColor = selectedColor;
    }

    // move to prev page 
    // if(this.state.currentPage===1)
    // {
    //   document.getElementById("imgLt").src = ltImg_d;
    //   document.getElementById("imgLt").style.cursor = "default";
    // }
    // else
    // {
    //   document.getElementById("imgLt").src = ltImg;
    //   document.getElementById("imgLt").style.cursor = "pointer";
    // }
    // move to next page 
    // if(this.state.currentPage===this.state.pageCount)
    // {
    //   document.getElementById("imgGt").src = gtImg_d;
    //   document.getElementById("imgGt").style.cursor = "default";
    // }
    // else
    // {
    //   document.getElementById("imgGt").src = gtImg;
    //   document.getElementById("imgGt").style.cursor = "pointer";
    // }

    // "<"
    if(Math.floor((this.state.currentPage-1)/10)<=0)
    {
      document.getElementById("imgLt").src = ltImg_d;
      document.getElementById("imgLt").style.cursor = "default";
    }
    else
    {
      document.getElementById("imgLt").src = ltImg;
      document.getElementById("imgLt").style.cursor = "pointer";
    }
    // ">"
    if(Math.floor((this.state.currentPage-1)/10)===Math.floor((this.state.pageCount-1)/10))
    {
      document.getElementById("imgGt").src = gtImg_d;
      document.getElementById("imgGt").style.cursor = "default";
    }
    else
    {
      document.getElementById("imgGt").src = gtImg;
      document.getElementById("imgGt").style.cursor = "pointer";
    }
    // "<<"
    if(this.state.currentPage===1)
    {
      document.getElementById("imgDbLt").src = db_ltImg_d;
      document.getElementById("imgDbLt").style.cursor = "default";
    }
    else
    {
      document.getElementById("imgDbLt").src = db_ltImg;
      document.getElementById("imgDbLt").style.cursor = "pointer";
    }
    // ">>"
    if(this.state.currentPage===this.state.pageCount)
    {
      document.getElementById("imgDbGt").src = db_gtImg_d;
      document.getElementById("imgDbGt").style.cursor = "default";
    }
    else
    {
      document.getElementById("imgDbGt").src = db_gtImg;
      document.getElementById("imgDbGt").style.cursor = "pointer";
    }
  }
  
  render()
  {
    const {classes} = this.props;
    const pageList = this.state.pageList;
    const list = pageList.map(info => (
      <li name={"li"+info.num} key={info.num} className={classes.li} style={{"margin":"0px 2.5px 0px 2.5px"}}><div id={"div-"+info.num} name={"div-"+info.num} className={classes.div} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onClick={this.onClick}>{info.num}</div> </li>
    ));

    return (
      <Fragment>
      <nav>
        <ul className={classes.ul}>
          <li name="liDbLt" key={"<<"} className={classes.li} ><div id={"div-db-lt"} name={"div-db-lt"} className={classes.div_ltgt}  onClick={this.onClick} ><img id="imgDbLt" name="imgDbLt" className={classes.imgLt} src={db_ltImg} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} alt="prev"/></div></li>
          <li name="liLt" key={"<"} className={classes.li} ><div id={"div-lt"} name={"div-lt"} className={classes.div_ltgt}  onClick={this.onClick} ><img id="imgLt" name="imgLt" className={classes.imgLt} src={ltImg} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} alt="prev"/></div></li>
          {list}
          <li name="liGt" key={">"} className={classes.li} ><div id={"div-gt"} name={"div-gt"} className={classes.div_ltgt}  onClick={this.onClick} ><img id="imgGt" name="imgGt" className={classes.imgGt} src={gtImg} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} alt="next"/></div></li>
          <li name="liDbGt" key={">>"} className={classes.li} ><div id={"div-db-gt"} name={"div-db-gt"} className={classes.div_ltgt}  onClick={this.onClick} ><img id="imgDbGt" name="imgDbGt" className={classes.imgGt} src={db_gtImg} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} alt="next"/></div></li>
        </ul>
      </nav>
      <Button 
        variant="contained"
        color="primary" 
        className={classes.registerBtn}
        onClick={()=>{this.props.history.push({
          pathname: '/DetailContent',
          state: {id:null,refno:null}
        })}}>
      REGISTER
      </Button>
      </Fragment>
    )
  }
}
export default withStyles(styles)(withRouter(pageNavi))