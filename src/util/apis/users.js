import axios from 'axios';

// export const receiveUsername = (name) => {
//     return {
//         type: "RECEIVE_USER",
//         name //email
//     }
// }

// export const getUsername = () => {
//     let data;
//     return axios
//         .get("https://randomuser.me/api")
//         .then((result) => {
//             data = result;
//         })
//         .catch(err => console.log(err));
//     return data
// }

export const fetchUser = () => {
    return axios.get("https://randomuser.me/api");
}

// export const fetchQuestion = () => async dispatch => {
//     try {
//         const res = await axios.get('http://localhost:5000/api/questions')
//         dispatch(receiveQuestions(res.data))
//     }
//     catch (err) {
//         console.log(err)
//     }
// }