import {createStore, compose} from 'redux'
import rootReducer from './reducers/'

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers
  )
}
