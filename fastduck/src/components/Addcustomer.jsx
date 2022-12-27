import React from 'react';
import { useState } from 'react';
import './Addcustomer.css';
import axios from "axios";

function Addcustomer() {


let [Name,setName] = useState('');
let [Notes,setNotes] = useState('');
let [Email,setEmail] = useState('');
let [Phone,setPhone] = useState('');
let [idnt,setidnt] = useState('');


const getdata= async (event)=>
{
event.preventDefault();

alert(`Customer Added Succesfully!`)

try {
  var a=await  axios.post(`http://localhost:5001/customerData`, {
         customername:Name,
        phone: Phone,
        notes: Notes,
        email: Email,
        customerid:idnt,
         
       })
       console.log(a);




} catch (error) {
  console.log(error)
}




}
  return (
    <>
    <div className='maine'>
    <div className="pagename">
     <h1>  Add Customer</h1>
</div>

      <form className="studentform" onSubmit={getdata} >
    
    <table>
      <tbody>
       <div className='tablehead'> <th>ADD CUSTOMER WAIT LIST</th>  <i className="fa-solid fa-xmark"></i></div>
   <tr>
    <td><span> Customeer Name:</span> </td>
     <td><input  id='empty' className="input1"  placeholder='Customer name'  onChange={(e)=>
        {
          setName(e.target.value)
        }
      }
       type="text" /></td>
   </tr>
   <tr>
    <td><span >Customer id:</span> </td>
    <td><input  id='empty1' className="input1" type="text" placeholder='Customer id'  
      onChange={(e)=>
        {
          setidnt(e.target.value)
        }
      }/></td></tr>
   <tr>
    <td><span>Phone:</span> </td>
     <td><input  id='empty2'  className="input1" type="text" placeholder='Phone' 
       onChange={(e)=>
        {
          setPhone(e.target.value)
        }
      }/></td>
   </tr>
   <tr>  
     <td><span>Email:</span> </td>
     <td><input  id='empty3'  className="input1" type="email" placeholder='Email'
       onChange={(e)=>
        {
          setEmail(e.target.value)
        }
      } /></td></tr>
   <tr/>
   <tr>
    <td><span>Notes:</span></td>
    <td> <input  id='empty4'  className="input1" type="text" placeholder='Notes'
      onChange={(e)=>
        {
          setNotes(e.target.value)
        }
      } /></td>
    </tr>
    
     
<tr><td><button type="submit" className='submit'>ADD</button></td></tr>

</tbody>
    </table>
</form>

    </div>
    </>
  )
}

export default Addcustomer