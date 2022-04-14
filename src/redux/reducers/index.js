import { combineReducers } from "redux";

import auth from "./userReducers";
import data from "./dataReducers";

export default combineReducers({ auth, data });
