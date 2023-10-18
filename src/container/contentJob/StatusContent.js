import React, { useState } from 'react'
import axiosInstance from '../../helpers';
import {Redirect} from 'react-router-dom';

export default function StatusContent() {
  
  const [pass,setPass]=useState('');
  const [new_pass,setNewPass]=useState('');
  const [c_pass,setCPass]=useState('');
  const [error,setError]=useState('');
  const [success,setSuccess]=useState('');

  const submitHandler=(e)=>{
    e.preventDefault();
    const userId=localStorage.getItem('id')
    const token=localStorage.getItem('token')
    if(c_pass!==new_pass){
      setError('Password Not Matched')
    }
    const data={pass,new_pass}
    const config={
        'headers':{jwt_react:token}
    }
    axiosInstance.put(`/api/user/status/changePassword/${userId}`,data,config).then(data=>{
      if(data.status===200){
        localStorage.clear()
        return <Redirect to={'/login'}/>
      }
    }).catch(err=>{
      if(err){
        err.response.data.error?setError(err.response.data.error)
        :setError(err.response.data.msg)
    }
      
    })
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
                <div className="card-header card-header-tabs card-header-primary">
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                      <span className="nav-tabs-title"><h5>Change Password</h5></span>
                    </div>
                  </div>
                  </div>
                  
                <div className={`${success===''?'alert alert-danger mt-3':'alert alert-success'}` }role="alert" style={error===''?{display:'none'}:{display:'block'}}>
                 {error!==''? error:success}
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
