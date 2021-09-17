import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import playlistReducers from './playlist'
import showListReducers from './showList'
import showAlertReducers from './showAlert'

const rootReducer = combineReducers({
  playlist: playlistReducers,
  showList: showListReducers,
  showAlert: showAlertReducers
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
  const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)))
  return store;
}
