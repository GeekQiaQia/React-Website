import {uploadAvatar} from "../services/userOperations";

export default {

  namespace: 'profile',

  state: {

  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *uploadAvatar({payload},{call,put,select}){
      // 异步发起请求；

      let result =yield call(uploadAvatar,payload);

    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
