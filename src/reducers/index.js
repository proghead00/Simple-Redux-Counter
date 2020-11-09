import counter from "./counter";
import isLogged from "./isLogged";

import { combineReducers } from "redux";

const allReducers = combineReducers({
	counter,
	isLogged,
});

export default allReducers;
