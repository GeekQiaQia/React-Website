import React from 'react'

import {connect } from 'dva'

import {withRouter,Redirect} from 'dva/router'

class CheckLogin extends React.Component{

  constructor(){
    super();
    this.state={

    }

  }

  render(){
    let {isLogin}=this.props;
    // 获取当前路由
    console.log(this.props);
    let {pathname}=this.props.location;
    console.log(pathname);
    if(pathname=='/profile'){
      // 如果是登录状态，则允许跳转，如果非登录状态，则跳转到首页；
      if(!isLogin){return <Redirect to='/'/>}


  }
    return this.props.children;

}
}

export default  withRouter(connect(
  state=>{
    return {
      isLogin:state.user.isLogin
    }
  }
)(CheckLogin));
