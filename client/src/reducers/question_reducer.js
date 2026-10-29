import { createReducer } from '@reduxjs/toolkit';

const initialState = {}

// alternative using switch case
// need to import switch cases
// function questionReducer(state = initialState, action) {
//     switch(action.type) {
//         case 'RECEIVE_QUESTIONS':
//             return action.payload
//         case 'RECEIVE_QUESTION': 
//             state[action.payload._id] = action.payload
//         case 'REMOVE_QUESTION':
//             return state.delete(action.payload._id)
//         default:
//             return state
//     }
// }

export const questionReducer = createReducer(initialState, builder => {
    builder
        .addCase('RECEIVE_QUESTIONS', (state, action) => {
            state = action.payload
        })
        .addCase('RECEIVE_QUESTION', (state, action) => {
            state[action.payload._id] = action.payload
        })
        .addCase('REMOVE_QUESTION', (state, action) => {
            return state.delete(action.payload._id)
        })
        .addDefaultCase((state, action) => {
            return state
        })
})