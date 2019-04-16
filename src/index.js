import dva from 'dva';
import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading'

import './index.css';

import {userModel} from './models'
// 1. Initialize
const app = dva({
  history:createHistory(),
  onError(e,dispatch){

    console.log(e.message);

  },
});

// 2. Plugins
 app.use(createLoading());

// 3. Model
// app.model(require('./models/example').default);
app.model(userModel);
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
