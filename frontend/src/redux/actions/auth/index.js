import store from '../../store';
import {
    AUTH_ERROR,
    AUTH_REQUEST,
    AUTH_SUCCESS
}from '../../actionTypes';

import axios from 'axios';

export function login(username, password) {
   
    return async function doLoginThunk(dispatch, getState){
         dispatch({type: AUTH_REQUEST});
         axios.post('/api/auth/', {username: username, password: password})
         .then((resp) => {
             console.log(resp);
             const token = `Bearer ${resp.data.token}`;
             localStorage.setItem('token', token);//setting token to local storage
             axios.defaults.headers.common['Authorization'] = token;//setting authorize token to header in axios
             dispatch({type: AUTH_SUCCESS});
         }).catch((err) => {
 
             dispatch({type: AUTH_ERROR, payload: err});
         })
    }
 
 }
 

 export function register(username,email, password) {
   
    return async function doLoginThunk(dispatch, getState){
         dispatch({type: AUTH_REQUEST});
         axios.post('/api/auth/register', {username: username, email: email, password: password})
         .then((resp) => {
             console.log(resp);
             const token = `Bearer ${resp.data.token}`;
             localStorage.setItem('token', `Bearer ${resp.data.token}`);//setting token to local storage
             axios.defaults.headers.common['Authorization'] = token;//setting authorize token to header in axios
             dispatch({type: AUTH_SUCCESS});
         }).catch((err) => {
 
            dispatch({type: AUTH_ERROR, payload: err});
        })
    }
 
 }