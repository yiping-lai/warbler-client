import rootReducer from "./reducers";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

export function configureStore(){
	const store=createStore(
		rootReducer,
		compose(
			applyMiddleware(thunk), // used to make async call before dispatch an action
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for redux devtool 
		));
	return store;
}