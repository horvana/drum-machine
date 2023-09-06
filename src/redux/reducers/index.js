import { combineReducers } from "redux";
import cssReducer from "./cssReducer";

const rootReducer = combineReducers({
    css: cssReducer
})

export default rootReducer