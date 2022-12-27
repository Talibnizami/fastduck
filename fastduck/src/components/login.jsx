import React from 'react';
import './login.css';
import logo from './logo.png';
import logobotm from './logobotm.png';
import { Link ,  useNavigate } from "react-router-dom";

function Login() {
  const loginreq=()=>
  {
    // const navigate = useNavigate();
    // navigate("/session-timed-out");

//     const usermail = document.getElementById('email').value;
//     const pasword = document.getElementById('pass').value;
//     if(usermail === "admin" && pasword === "admin")
//     {
//       alert("Check Username and Password") 
//     }else{
// alert("Check Username and Password")      
//     }


  }
  return (
    <>
       <div className="logbody">
<div className="first" >
<img className='imglogom' src={logo} alt="Logo" /><br/>
<img className='imglogo' src={logobotm} alt="Logo"  />
</div>

{/* <!-- login form --> */}
<form className="secound">
  
<input className='input2'  type="text" id='email' required placeholder="Username"/><br/><br/>
<input className='input2' type="password" required placeholder="Password" id='pass'/><br/><br/>
<button id="lib" type='submit'onClick={loginreq}><Link to='addcustomer' id='logbtn' > Log in</Link> </button>
<p  id='forgt'>Forgotten password?</p>
<div  id='botminner'></div>

</form>
<div   id="ld">
</div>

    </div>

    </>
  )
}

export default Login
