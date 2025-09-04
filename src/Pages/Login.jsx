import React from 'react'
import Templatels from '../components/core/LoginSignup/Templatels'
import loginimg from '../assests/Images/loginimg.png'


const Login = ({setisloggedin}) => {
  return (
    <div>
        <Templatels
            tittle="Welcome Back"
            desc1="Build skills for today, tommorow and beyond."
            desc2="Education to future-proof your career."
            formtype="login"
            setisloggedin={setisloggedin}
            image={loginimg}
        ></Templatels>
    </div>
  )
}

export default Login