import {request} from '../utils/index'

export let toDoLogin=(payload)=>request( 'auth/login', {method:'post',data:payload});
export let toDoRegister=(payload)=>request( 'auth/reg', {method:'post',data:payload});
export let toDoLogOut=(payload)=>request( 'auth/logout', {method:'post',data:payload});
export let uploadAvatar=(payload)=>request( 'auth/changeProfile', {method:'post',data:payload});

