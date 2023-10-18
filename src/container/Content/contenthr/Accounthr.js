import React, { useState } from 'react'
import axiosInstance from '../../../helpers';
import {useHistory} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../../../../node_modules/react-toastify/dist/ReactToastify.css';


export default function Accounthr() {
  const [pass,setPass]=useState('');
  const [new_pass,setNewPass]=useState('');
  const [c_pass,setCPass]=useState('');
  const history=useHistory()

  const submitHandler=(e)=>{
    e.preventDefault();
    const userId=localStorage.getItem('id')
    const token=localStorage.getItem('token')

    if(c_pass!==new_pass){
      return toast.error('Password Not Matched')
    }else{
      const data={pass,new_pass}
      const config={
        'headers':{jwt_react:token}
    }
    axiosInstance.put(`/api/hr/changePassword/status/${userId}`,data,config).then(data=>{
      if(data.status===200){
        toast.success(data.data.msg)
        localStorage.clear()
        setTimeout(() => {
          return history.push('/corporate_login')
        }, 5000);
        
      }
    }).catch(err=>{
      if(err){
        if(err.response===undefined){
          return 0;
        }else{
          err.response.data.error?toast.error(err.response.data.error)
          :toast.error(err.response.data.msg)
        }
       
    }
      
    })
    }
    
    
  }
    return (
        <div>
        <div className="content">
        <div className="container-fluid">
        <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8">
            <div className="card" style={{marginTop:150+"px"}}>
            <ToastContainer position="top-center" />
                <div className="card-header card-header-tabs card-header-primary">
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                      <span className="nav-tabs-title"><h5>Account Status</h5></span>
                    </div>
                  </div>
                  </div>
                  
               
                <div class="card-body">
                  <form onSubmit={submitHandler}>
                    <div class="row">
                      <div class="col-md-5">
                        <div class="form-group">
                          <label class="bmd-label-floating">Old Password</label>
                          <input type="text" class="form-control" onChange={(e)=>setPass(e.target.value)}/>
                        </div>
                      </div>
                      
                     
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">New Passworde</label>
                          <input type="text" class="form-control" onChange={(e)=>setNewPass(e.target.value)}/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Confirm Password</label>
                          <input type="text" class="form-control" onChange={(e)=>setCPass(e.target.value)}/>
                        </div>
                      </div>
                    </div>
                   
                    <button type="submit" class="btn btn-primary pull-right">Update Profile</button>
                    <div class="clearfix"></div>
                  </form>
                </div>
              </div>
              </div>
            </div>
            
        </div>
        </div>
        </div>  
        </div>
        </div>  
        
    )
}
