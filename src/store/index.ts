import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {registrationReducer} from "./registrationReducer";

export const store = createStore(registrationReducer, composeWithDevTools());
