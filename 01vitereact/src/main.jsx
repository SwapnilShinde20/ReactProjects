import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>MyApp</h1>
    </div>
  )
}
const myEle = {
  type:'a',
  props:{
      href:"https://google.com",
      target:"_blank"
  },
  children:"Click me to visit Google.com"
}

const AnotherEle = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

// const ReactElement = React.createElement(
//   myEle.type,
//   myEle.props,
//   myEle.children
// )
const anotherUser = "Swapnil"
const ReactElement = React.createElement(
  'a',
  {href:"https://google.com",target:"_blank"},
  "Click me to visit Google.com !!!",
  anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
  // ReactElement
)
