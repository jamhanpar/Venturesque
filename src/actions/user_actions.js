import { createAction } from '@reduxjs/toolkit';
// import axios from 'axios';
import * as userUtils from '../util/apis/users';

export const receiveUser = createAction('RECEIVE_USER');

// export const fetchUser = () => async dispatch => {
//     try {
//         const res = await axios.get("https://randomuser.me/api");
//         dispatch(receiveUser(res.data))
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

export const fetchUser = () => dispatch => {
    return userUtils.fetchUser()
        .then(res => dispatch(receiveUser(res.data.results)))
        .catch(err => console.log(err))
};
