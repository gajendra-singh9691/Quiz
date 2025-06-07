import { createRoot } from "react-dom/client";
import Users from "./Users";
import Questions from "./Questions";
import { combineReducers } from "redux";

const rootreduser = combineReducers({
    Users : Users,
    Questions : Questions
})

export default rootreduser