import {
   GET_USER_DATA_REQUEST,
   GET_USER_DATA_SUCCESS,
   GET_USER_DATA_ERROR,
 } from '../constant';

 import axios from 'axios';
 
 export const getUserData = () => {
   return (dispatch) => {
     dispatch({
       type: GET_USER_DATA_REQUEST,
       payload: {
         user: false,
         loading: true,
         error: false,
       },
     });
     axios({
        method: 'get',
        url:'https://randomuser.me/api/?results=28',
     })
       .then((response) => {
         console.log(response);
         dispatch({
           type: GET_USER_DATA_SUCCESS,
           payload: {
             user: response.data.results,
             loading: false,
             error: false,
           },
         });
       })
       .catch((error) => {
         dispatch({
           type: GET_USER_DATA_ERROR,
           payload: {
             user: false,
             loading: false,
             error: error.message,
           },
         });
       });
   };
 };