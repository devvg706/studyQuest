import React from 'react'
import Templatels from '../components/core/LoginSignup/Templatels'
import signupimg from '../assests/Images/signupimg.png'


const Signup = ({setisloggedin}) => {
  return (
    <div>
        <Templatels
            tittle="Join the millions learning to code with StudyQuest for free"
            desc1="Build skills for today, tommorow and beyond."
            desc2="Education to future-proof your career."
            formtype="signup"
            setisloggedin={setisloggedin}
            image={signupimg}
        
        >

        </Templatels>
    </div>
  )
}

export default Signup