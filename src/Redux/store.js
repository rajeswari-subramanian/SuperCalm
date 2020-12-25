import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import adminReducer from './Admin/reducer'
import userReducer from './User/reducer'

const rootReducer = combineReducers({ admin: adminReducer, user: userReducer });

let composeEnhancers = compose

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;