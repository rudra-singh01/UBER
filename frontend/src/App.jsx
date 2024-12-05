import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import UserLogin from "./pages/UserLogin"
import UserSignUp from "./pages/UserSignUp"
import Captainlogin from "./pages/Captainlogin"
import CaptainSignup from "./pages/CaptainSignup"
import Start from "./pages/Start"
import UserProtectedWrapper from "./pages/UserProtectedWrapper"
import UserLogout from "./pages/UserLogout"
import CaptainHome from "./pages/CaptainHome"
import CaptainProtectedWrapper from "./pages/captainProtectedWrapper"
import CaptainLogout from "./pages/CaptainLogout"

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
        <Route path="/captainsignup" element={<CaptainSignup/>}/>
        <Route path="/user/logout" element={
          <UserProtectedWrapper>
            <UserLogout/>
          </UserProtectedWrapper>
        }/>
        <Route path="/captain-home" element={
         <CaptainProtectedWrapper>
           <CaptainHome/>
         </CaptainProtectedWrapper>
        }/>
        <Route path="/captain/logout" element={
          <CaptainProtectedWrapper>
            <CaptainLogout/>
          </CaptainProtectedWrapper>
        }/>
      </Routes>
    </div>
  )
}

export default App
