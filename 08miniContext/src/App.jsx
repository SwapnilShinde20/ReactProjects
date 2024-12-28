import Login from "./Components/Login"
import Profile from "./Components/Profile"
import UserContextProvider from "./context/UserContextProvider"
import './App.css'
function App() {

  return (
    <UserContextProvider>
      <h1>React With Chai</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
