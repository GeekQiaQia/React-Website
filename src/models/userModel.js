// 通过公共函数来发起请求；
import {toDoLogin,toDoRegister,toDoLogOut} from "../services/userOperations";
import {routerRedux} from 'dva/router'

// 为了让点击刷新refresh不改变当前登录状态
let userInfo=JSON.parse(window.localStorage.getItem('access-user')||'{}');
let isLogin=userInfo.isLogin||false;
let user=userInfo.user||{};
let userRealName=userInfo.userRealName;
export default {

  namespace:'user',

  state: {
      isLogin,
      userToken:'',
      userRealName,
      user
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *doSignin({ payload }, { call, put ,select}) {  // eslint-disable-line
      // 异步发起请求：
      console.log("doSignin");
      let result=yield call(toDoLogin,payload);
      // 如果当前用户存在，则触发reducer改变登录状态；
      console.log(result);
      if(result.data.code=="0000"){
        yield put({type:'logined',payload:{user:result.data}});
      }

    },
    *doRegister({payload},{call,put,select}){

      //异步发起请求；
      console.log("doRegister");
      let result=yield call(toDoRegister,payload);
      console.log(result);

    },
    *doLogout(action,{call,put,select}){
       // 发起请求，清除后台登录状态；
      let result= yield  call(toDoLogOut,action.payload);
      // 发送put 触发reducers改变状态；
      yield put({type:'logOut'});
      yield put(routerRedux.push('/'));

    },
    *goProfile(action,{call,put,select}){
      //
      yield put(routerRedux.push('/profile'));
    }
  },

  reducers: {
    logined(state, action) {
      let newState={
        ...state,
        isLogin: true,
        userToken:action.payload.user.token,
        userRealName:action.payload.user.userName,
        user:action.payload.user
      };
      window.localStorage.setItem('access-user',JSON.stringify(newState));
      return newState;
    },
    logOut(state,action){
      let newState={
        ...state,
        isLogin:false,
        userToken:'',
        userRealName:'',
        user:null
      };
      window.localStorage.setItem('access-user',JSON.stringify(newState))

      return newState;
    }
  },

};
