/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import {connect} from 'dva'
//

import {SignIn_Action_Type,Register_Action_Type,Profile_Action_Type,SignOut_Action_Type} from '../../actions'

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import SvgIcon from '@material-ui/core/SvgIcon';
import Slide from '@material-ui/core/Slide';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

//import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import AccountCircle from '@material-ui/icons/AccountCircle';


// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.jsx";
import Button from "../CustomButtons/Button.jsx";


import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";


function BlogIcon(props){
  return (
    <SvgIcon {...props}>
      <path fill="#FFFFFF" d="M14,13H9.95A1,1 0 0,0 8.95,14A1,1 0 0,0 9.95,15H14A1,1 0 0,0 15,14A1,1 0 0,0 14,13M9.95,10H12.55A1,1 0 0,0 13.55,9A1,1 0 0,0 12.55,8H9.95A1,1 0 0,0 8.95,9A1,1 0 0,0 9.95,10M16,9V10A1,1 0 0,0 17,11A1,1 0 0,1 18,12V15A3,3 0 0,1 15,18H9A3,3 0 0,1 6,15V8A3,3 0 0,1 9,5H13A3,3 0 0,1 16,8M20,2H4C2.89,2 2,2.89 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z" />
    </SvgIcon>
  )
}


class  HeaderLinks extends React.Component{

  constructor(){
    super();

    this.state={
      Open:false,
      userName:'',
      password:'',
      userRealName:'',
      email:'',
      checkedSignIn:true,
      checkedReg:false,
      anchorEl:''
    }

  }

  handleClickOpen=()=>{
    this.setState({Open:true})
  };
  handleReturn=()=>{
    this.setState(state => ({ checkedSignIn: !state.checkedSignIn }));
    this.setState(state => ({ checkedReg: !state.checkedReg }));

  };
  // 处理注册；
  handleReg=()=>{
    console.log("handleReg");
    // 获取注册数据；并发送注册请求；
    let {userName,userRealName,email,password}=this.state;
    //将请求任务分发；
    this.props.dispatch({type:Register_Action_Type,payload:{userName,userRealName,email,password}});
  }
  handleKeyUp=(event)=>{
    console.log("handleKeyUp");
  if(event.keyCode === 13){
    this.doLogin() ;
  }
  }
  doLogin=()=>{
    console.log("doLogin");
    this.setState({Open:false});
    // 获取输入数据，并发送登录请求；
    let {userName,password}=this.state;
    //将请求任务分发；
    this.props.dispatch({type:SignIn_Action_Type,payload:{userName,password}});
  }

  // 输入框获取输入数据；
  valueHandler=(e,propName)=>{
   this.setState({
     [propName]:e.target.value
   })
  }

  handleMenu = event => {

    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleProfile=()=>{
    this.setState({ anchorEl: null });
    //将请求任务分发；
    this.props.dispatch({type:Profile_Action_Type});
  };

  handleLogOut=()=>{
    //将请求任务分发；
    this.props.dispatch({type:SignOut_Action_Type,payload:{}});
  }

  render() {
    const { classes,...rest } = this.props;
    const { checkedSignIn,checkedReg,anchorEl } = this.state;
    const isLogin=this.props.isLogin;
    const open = Boolean(anchorEl);
    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="Categories"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={Apps}
            dropdownList={[
              <Link to="/" className={classes.dropdownLink}>
                所有文章
              </Link>,
              <Link to="/" className={classes.dropdownLink}>
                旅游
              </Link>,
              <Link to="/" className={classes.dropdownLink}>
                摄影
              </Link>,
              <Link to="/" className={classes.dropdownLink}>
                文学
              </Link>,
              <Link to="/" className={classes.dropdownLink}>
                计算机
              </Link>


            ]}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip  id="instagram-twitter"
                    title="博客"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href="https://www.cnblogs.com/xgyy/"
              color="transparent"
              target="_blank"
              className={classes.navLink}
            >
              <BlogIcon className={classes.icons} color="inherit" /> Blog
            </Button>
          </Tooltip>
        </ListItem>
        {!isLogin&&(<ListItem className={classes.listItem}>
          <Tooltip  id="instagram-twitter"
                    title="登录/注册"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              target="_blank"
              className={classes.navLink}
              onClick={this.handleClickOpen}
            >
              <AccountCircle className={classes.icons} /> Login/Register
            </Button>
          </Tooltip>
        </ListItem>)}
        {isLogin&&(<ListItem className={classes.listItem}>

    <div>
      <Button

        color="transparent"
        target="_blank"
        className={classes.navLink}
        onClick={this.handleMenu}
      >
        <AccountCircle className={classes.icons} />我的账户
      </Button>
      <Menu
        id="menu-appbar"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={this.handleClose}
      >
        <MenuItem onClick={this.handleProfile}>Profile</MenuItem>
        <MenuItem onClick={this.handleClose}>My account</MenuItem>
        <MenuItem onClick={this.handleLogOut}>Log Out</MenuItem>
      </Menu>
    </div>

        </ListItem>)

        }
        <div>
          <Dialog
          open={this.state.Open}
          onClose={this.handleClose}
          onClick={this.handleClose}
          aria-labelledby="form-dialog-title"
          classes={{paperWidthSm:classes.paperWidthSm}}

          >

            <Slide direction="left" in={checkedSignIn} mountOnEnter unmountOnExit>
              <div>
                <DialogTitle  classes={{root:classes.root}} id="form-dialog-title">
                  登录或者注册<br></br>LoginOrRegister
                </DialogTitle>
                <DialogContentText>
                  如果您已经有了账户，请直接登录即可；如果您是新用户，请先点击注册按钮
                </DialogContentText>

                <TextField  autoFocus
                            margin="dense"
                            id="userName"
                            label="昵称/nickName"
                            type="text"
                            onChange={event => this.valueHandler(event,'userName')}
                            fullWidth
                />
                <TextField
                            margin="dense"
                            id="password"
                            label="密码/password"
                            type="password"
                            onKeyUp={this.handleKeyUp.bind(this)}
                            onChange={event => this.valueHandler(event,'password')}
                            fullWidth
                />
                <DialogActions>
                  <Button  classes={{label:classes.label}}  onClick={this.doLogin} color="primary">
                    登录/Login
                  </Button>
                  <Button classes={{label:classes.label}}  onClick={this.handleReturn} color="primary">
                    注册/Register
                  </Button>
                </DialogActions>
              </div>

            </Slide>

            <Slide direction="left" in={checkedReg} mountOnEnter unmountOnExit>
              <div>
                <DialogTitle  classes={{root:classes.root}} id="form-dialog-title">
                  注册/Register
                </DialogTitle>
                <DialogContentText>
                  亲，等你很久了哦，请填写注册信息，点击完成按钮即可！
                </DialogContentText>
                <TextField  autoFocus
                            margin="dense"
                            id="userName"
                            label="昵称/nickName"
                            type="text"
                            onChange={event => this.valueHandler(event,'userName')}
                            fullWidth
                />
                <TextField
                            margin="dense"
                            id="userRealName"
                            label="用户名/userRealName"
                            type="text"
                            onChange={event => this.valueHandler(event,'userRealName')}
                            fullWidth
                />
                <TextField
                            margin="dense"
                            id="userEmail"
                            label="登录邮箱/email"
                            type="email"
                            onChange={event => this.valueHandler(event,'email')}
                            fullWidth
                />
                <TextField
                            margin="dense"
                            id="password"
                            label="用户密码/password"
                            type="password"
                            onChange={event => this.valueHandler(event,'password')}
                            fullWidth
                />
                <DialogActions>
                  <Button classes={{label:classes.label}}  onClick={this.handleReturn} color="primary">
                    返回登录/Login
                  </Button>
                  <Button classes={{label:classes.label}}  onClick={this.handleReg} color="primary">
                   完成/Done
                  </Button>
                </DialogActions>
              </div>
            </Slide>

          </Dialog>
        </div>
      </List>
    )

  }

}


export default withStyles(headerLinksStyle)(connect(state=>{
  return {
    isLogin:state.user.isLogin
  }
})(HeaderLinks));
