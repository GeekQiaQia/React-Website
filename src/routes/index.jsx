import LoginPage from '../views/LoginPage/LoginPage'
import HomePage from '../views/HomePage/HomePage'
import ProfilePage from '../views/ProfilePage/ProfilePage'
import avatarUpload from '../views/ProfilePage/avatarUpload'

var indexRoutes=[
  {path:'/Login',name:'LoginPage',component:LoginPage},
  {path:'/Profile',name:'ProfilePage',component:ProfilePage},
  {path:'/avatarUpload',name:'avatarUpload',component:avatarUpload},
  {path:'/',name:'HomePage',component:HomePage}
];
export default indexRoutes;
