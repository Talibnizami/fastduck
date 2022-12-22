import React from 'react'

function Set() {
  return (
    <>
    <div className='maine'>
    <div className="pagename">
     <h1>Settings</h1>
</div>

      <form className="settingform" >
    
    <table>
      <tbody>
       <div className='tablehead titleable'> <th className='titleable'>Settings</th>  </div>
   <tr> 
    <td><span> Old Password </span> </td>
     <td><input  className="input1" type="text"  placeholder='Old Password'/></td>
   </tr>
   <tr>
    <td><span >New Password</span> </td>
    <td><input className="input1" type="text" placeholder='New Password'/></td></tr>

   
    
     
<tr><td><button  type='button' className="submit" >UPDATE</button></td></tr>

</tbody>
    </table>
</form>

    </div>
    </>
  )
}

export default Set