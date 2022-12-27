import React from 'react';
import { useState, useRef } from 'react';
import './Addcustomer.css';
import axios from "axios";

function Addcustomer() {
  const first = useRef();
  const two = useRef();
  const three = useRef();
  const four = useRef();
  const five = useRef();

let [Name,setName] = useState('');
let [Notes,setNotes] = useState('');
let [Email,setEmail] = useState('');
let [Phone,setPhone] = useState('');
let [idnt,setidnt] = useState('');

var way = ""
const getdata= async (event)=>{
event.preventDefault();

alert(`Customer Added Succesfully!`)

// Empty Input Code 

// first.current.value = ""
// two.current.value = ""
// three.current.value = ""
// four.current.value = ""
// five.current.value = ""

try {
  await  axios.post(`http://localhost:5001/customerData`, {
    customername:Name,
    phone: Phone,
    notes: Notes,
    email: Email,
    customerid:idnt,
    
  })

} catch (error) {
  console.log(error)
}

return;

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
     <td><input    ref={first}   id='empty' className="input1" value={Name} autoComplete="off" placeholder='Customer name'  onChange={(e)=>
        {
          setName(e.target.value)
        }
      }
       type="text" /></td>
   </tr>
   <tr>
    <td><span >Customer id:</span> </td>
    <td><input   ref={two}    id='empty1' className="input1" value={idnt} autoComplete="off" type="text" placeholder='Customer id'  
      onChange={(e)=>
        {
          setidnt(e.target.value)
        }
      }/></td></tr>
   <tr>
    <td><span>Phone:</span> </td>
     <td><input  ref={three}   id='empty2'  className="input1" value={Phone} autoComplete="off" type="text" placeholder='Phone' 
       onChange={(e)=>
        {
          setPhone(e.target.value)
        }
      }/></td>
   </tr>
   <tr>  
     <td><span>Email:</span> </td>
     <td><input  ref={four}   id='empty3'  className="input1" value={Email} autoComplete="off"  type="email" placeholder='Email'
       onChange={(e)=>
        {
          setEmail(e.target.value)
        }
      } /></td></tr>
   <tr/>
   <tr>
    <td><span>Notes:</span></td>
    <td> <input  id='empty4'  ref={five}    className="input1" value={Notes} autoComplete="off" type="text" placeholder='Notes'
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