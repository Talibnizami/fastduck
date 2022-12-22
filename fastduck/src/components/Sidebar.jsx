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
            <li className="sub"><i className="fa-solid fa-user"></i> <Link to="/addcustomer">Add Customer</Link></li>
            <li className="sub">  <i className="fa-solid fa-circle-info"></i><Link to="/showcustomer">Show Customer</Link></li>
            <li className="sub">  <i className="fa-solid fa-location-dot"></i> <Link to="/addLocation">Add Location</Link></li>
            <li className="sub">  <i className="fa-solid fa-gear"></i><Link to='/set'>Settings</Link></li>
            <li className="subsi submit"><Link to='/' className='signoutbtn'>Sign out</Link></li>
        </ul>
    </div>

</div>
    </div>
    
    </>
  )
}

export default Sidebar