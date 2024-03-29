import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'

import rootReducer from './rootReducer'

const middlewares = []

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

export default store