import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AddTodo from './components/AddTodo.jsx'
import ListTodo from './components/ListTodo.jsx'
import { Provider } from 'react-redux'
import {store} from './app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <AddTodo/>
    <ListTodo/>
  </Provider>,
)
