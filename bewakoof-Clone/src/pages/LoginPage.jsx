import LoginSignup from "../components/Login/Login"
import { Navbar } from "../components/Navbar"
import { MiddleNavbar } from "../components/Navbar2"


const LoginPage = () => {
  return (
    <div>
        <Navbar/>
        <MiddleNavbar/>
      <LoginSignup/>
    </div>
  )
}

export default LoginPage
