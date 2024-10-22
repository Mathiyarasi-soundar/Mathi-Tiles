import React, { useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import './Styles/Signup.css'

const Signup = () => {

  const [change, setChange] = useState("Login");
  return (
    <section className='sign'>
      <div className='signup-container'>
        <div className="signup-header">
          <div className="signup-text">{change} </div>
          <div className="signup-underline"></div>
        </div>
        <div className="signup-inputs">
          {change === "Login" ? <div></div> : <div className="signup-input">
            <i>{< FaRegUser />}</i>
            <input type="text" placeholder='Name' />
          </div>}

          <div className="signup-input">
            <i>{<MdOutlineEmail />}</i>
            <input type="email" placeholder='E-mail' />
          </div>
          <div className="signup-input">
            <i>{<RiLockPasswordLine />}</i>
            <input type="password" placeholder='Password' />
          </div>
        </div>
        {change === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password?<span>Click Here!</span></div>}

        <div className="submit-container">
          <div className={change === "Login" ? "submit gray" : "submit"} onClick={() => { setChange("Sign Up") }}> Sign Up</div>
          <div className={change === "Sign up" ? "submit gray" : "submit"} onClick={() => { setChange("Login") }}>Login</div>
        </div>
      </div>
    </section>
  )
}

export default Signup