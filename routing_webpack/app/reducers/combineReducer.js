import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';
import  tracks  from './infoReducer';
import  newsReducer from './infoNewsReduser';
import  productReducer from './infoProductReducer';
import activeTracks from "./activeReducer"

 //routing: routerReducer, - обяз  для routing
const reducers = combineReducers({
    routing: routerReducer,
    tracks:tracks,
    active:activeTracks,
    newsTitle:newsReducer, 
    productsTitle:productReducer 

    
})

export default reducers