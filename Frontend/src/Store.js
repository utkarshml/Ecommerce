import {createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import reducerProduct from "./reducer/reducer.js";

const reducer = combineReducers({
   products : reducerProduct
});

const intaialStates = {}
const middleware = [thunk]

const Store = createStore( reducer,intaialStates,composeWithDevTools(applyMiddleware(...middleware)))

export default Store;