import {
   GET_USER_DATA_REQUEST,
   GET_USER_DATA_SUCCESS,
   GET_USER_DATA_ERROR,
 } from "../constant";
 
 const initialState = {
   user: false,
   loading: true,
   error: false,
 };
 
const userReducer = (state = initialState, action) => {
   const {type, payload}= action;
   switch (type) {
      case GET_USER_DATA_REQUEST:
         return {
           ...state,
           user: payload.user,
           loading: payload.loading,
           error: payload.error,
         };
       case GET_USER_DATA_SUCCESS:
       return {
         ...state,
         user: payload.user,
         loading: payload.loading,
         error: payload.error,
       };
     case GET_USER_DATA_ERROR:
       return {
         ...state,
         user: payload.user,
         loading: payload.loading,
         error: payload.error,
       };
     default:
       return state;
   }
 };

 export default userReducer;