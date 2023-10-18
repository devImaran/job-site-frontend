import React,{useState} from 'react'
import axiosInstance from '../../../helpers'
import { ToastContainer, toast } from 'react-toastify';
import '../../../../node_modules/react-toastify/dist/ReactToastify.css';

import {useHistory} from 'react-router-dom'


export default function Jobsadmin() {
    
    const [role,setRole]=useState('')
    const [profile,setProfile]=useState('')
    const [description,setDescription]=useState('')
    const history=useHistory()
   

    const submitHandler=(e)=>{
        e.preventDefault();
        
            const formdata={role,profile,description}
            const token=localStorage.getItem('token');
            const config={
                'headers':{'jwt_react':token}
            }
            axiosInstance.post('/application/admin/job/create',formdata,config).then(data=>{
                if(data.status===200){
                    toast.success(data.data.msg)
                    setTimeout(() =>history.go(0),5000);
                }
            }).catch(err=>{
                 if(!err){
                     console.log('all is well')
                 }else{
                     if(err.response===undefined){
                         return 0;
                     }else{
                         err.response.data.error?toast.error(err.response.data.error)
                         :toast.error(err.response.data.msg)
                     }
                   
                 }
             })
       
    }
    return (
        <div>
        
        <div className="card" style={{marginTop:150+"px"}}>
        
                        <div className="card-header card-header-tabs card-header-primary">
                        <div className="nav-tabs-navigation">
                            <div className="nav-tabs-wrapper">
                                <span className="nav-tabs-title"><h5>About the Job</h5></span>
                            </div>
                
                        </div>
                        </div>
                        <div className="card-body">
                        <ToastContainer/>
                        <div className="tab-content">
                            <div className="tab-pane active" id="profile">
                    <form onSubmit={submitHandler}>
                               
            <div className="form-group">
                <label for="exampleFormControlInput1">Job Title</label>
                <input type="text" className="form-control"  placeholder="Enter Job Title" onChange={(e)=>setRole(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">Job Designation</label>
                <input type="text" className="form-control"  placeholder="Enter Job Designation" onChange={(e)=>setProfile(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Job Details</label>
                <textarea className="form-control"  rows="3" onChange={(e)=>setDescription(e.target.value)} />
            </div>
            
            <button className="col-md-2 col-lg-2 btn btn-primary">Add Job</button>

            
        </form>
                </div>
            </div>
        </div>
    </div>
    </div>

            )
        }
