import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import UserLogin from "./pages/UserLogin"
import UserSignUp from "./pages/UserSignUp"
import Captainlogin from "./pages/Captainlogin"
import CaptainSianup from "./pages/CaptainSianup"
import Start from "./pages/Start"
import UserProtectedWrapper from "./pages/UserProtectedWrapper"
import UserLogout from "./pages/UserLogout"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>}/> 
        <Route path="/home" element={
          <UserProtectedWrapper>
            <Home/>
          </UserProtectedWrapper>
        }/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/signup" element={<UserSignUp/>}/>
        <Route path="/captainlogin" element={<Captainlogin/>}/>
        <Route path="/captainsignup" element={<CaptainSianup/>}/>
        <Route path="/user/logout" element={
          <UserProtectedWrapper>
            <UserLogout/>
          </UserProtectedWrapper>
        }/>
      </Routes>
    </div>
  )
}

export default App
