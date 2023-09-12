import React, { useState,useEffect } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { updateLog } from '../../actions/logActions'
import M from "materialize-css/dist/js/materialize.min.js"
const EditLogModal = ({current,updateLog}) => {
    const [message,setMessage] = useState("")
    const [attention,setAttention] = useState(false);
    const [tech,setTech] = useState('')
    useEffect(() => {
      if(current){
        setMessage(current.message);
        setAttention(current.attention);
        setTech(current.tech)
      }
    }, [current])
    
    const onSubmit =()=>{
        if(message==="" && tech ===""){
            M.toast({html:"Please enter a message and tech"});

        }else{
        const updlog = {
            id: current.id,
            message,
            attention,
            tech,
            date: new Date()
        };
        updateLog(updlog);
        M.toast({html:`Log Updated by ${tech}`})
            //clear input feilds
            setMessage("");
            setTech('');
            setAttention(false);
        }
    }
  return (
    <div id="edit-log-modal" className='modal' style={modalStyle}>
        <div className='modal-content'>
            <h4>Enter System Log</h4>
            <div className='row'>
            <div className='input-feilds'>
                <input type='text' name='message' value = {message} onChange={e=>(setMessage(e.target.value))}/>
            </div>
            <div className='row'>
                <select name="tech" value={tech} className='browser-default' onChange={e=>setTech(e.target.value)}>
                    <option value="Zajjaj Khan">Zajjaj Khan</option>
                    <option value="Hamza Khan">Hamza Khan</option>
                    <option value="Zara Abasi">Zara Abbasi</option>

                    </select>
                    <div className='row'>
                        <div className='input-feild'>
                            <p>
                                <label>
                                    <input 
                                    type='checkbox'
                                    className='filled-in'
                                    checked={attention}
                                    value = {attention}
                                    onChange={e=>setAttention(!attention)}
                                    />
                                    <span>Need Attention</span>
                                </label>
                            </p>
                        </div>
                    </div>
            </div>
            </div>
        </div>
        <div className='modal-footer'>
            <a href='#!' onClick={onSubmit} className='modal-close waves-effect waves-light btn blue '>
                Submit
            </a>

        </div>
    </div>
  )
}
const modalStyle = {
    width:'75%',
    height:'75%'
}
EditLogModal.prototype ={
    current:PropTypes.object,
    updateLog:PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    current: state.log.current
});
export default connect(mapStateToProps,{updateLog})(EditLogModal);