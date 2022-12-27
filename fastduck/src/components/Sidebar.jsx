import React from 'react';
import './Sidebar.css';
import logo from './logo.png';
import logobotm from './logobotm.png';
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
   <div className="main">
{/* <!-- sidebar --> */}
<div className="sidebar">
    {/* <!-- logo or name --> */}
    <div className="logo">
      <img src={logo} alt="Logo" /><br/>
      <img src={logobotm} alt="Logo" className='imgbtm' />
    </div>
{/* <!-- options --> */}
    <div className="option">
        <ul className="subparent">
            <Link to="/addcustomer"><li className="sub"><i className="fa-solid fa-user"></i> Add Customer</li></Link>
            <Link to="/showcustomer"> <li className="sub">  <i className="fa-solid fa-circle-info"></i>Show Customer</li></Link>
            <Link to="/addLocation"> <li className="sub">  <i className="fa-solid fa-location-dot"></i>Add Location</li></Link>
            <Link to='/set'><li className="sub">  <i className="fa-solid fa-gear"></i>Settings</li></Link>
            <Link to='/history'> <li className="sub">  <i className="fa-solid fa-clock-rotate-left"></i>History</li> </Link>
            <Link to='/' className='signoutbtn'><li className="subsi submit">Sign out</li></Link>
        </ul>
    </div>

</div>
    </div>
    
    </>
  )
}

export default Sidebar