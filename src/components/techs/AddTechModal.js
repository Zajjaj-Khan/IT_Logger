import React, { useState } from 'react'
import M from "materialize-css/dist/js/materialize.min.js"
const AddLogModel = () => {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("");
   

    const onSubmit =()=>{
        if(firstName==="" && lastName ===""){
            M.toast({html:"Please enter a message and tech"});

        }else{
        //clear Input Feilds
        setFirstName("");
        setLastName("");
        }
    }
  return (
    <div id="add-tech-modal" className='modal'>
        <div className='modal-content'>
            <h4>New Technicain</h4>
            <div className='row'>
            <div className='input-feilds'>
                <input type='text' name='firstName' value = {firstName} onChange={e=>(setFirstName(e.target.value))}/>
                <label htmlFor="firstName"className='active'>
                    First Name
                </label>
            </div>
            <div className='row'>
            <div className='input-feilds'>
                <input type='text' name='lastNmae' value = {lastName} onChange={e=>(setLastName(e.target.value))}/>
                <label htmlFor="lastName"className='active'>
                    Last Name
                </label>
            </div>
            </div>
        </div>
        <div className='modal-footer'>
            <a href='#!' onClick={onSubmit} className='modal-close waves-effect waves-light btn blue '>
                Submit
            </a>

        </div>
    </div>
    </div>
  )
}
export default AddLogModel