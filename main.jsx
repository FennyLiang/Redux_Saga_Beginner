import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import HelloSaga from './saga'
import React from 'react'
import ReactDom from 'react-dom'




const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(HelloSaga)


const action = type => store.dispatch({type})

