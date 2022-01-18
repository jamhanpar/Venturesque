import { combineReducers } from "redux";
import { questionReducer } from "./question_reducer";
import { userReducer } from "./user_reducer";
import { restaurantReducer } from "./restaurant_reducer";

export const rootReducer = combineReducers({
    // activities
    user: userReducer,
    restaurants: restaurantReducer,
    questions: questionReducer
})