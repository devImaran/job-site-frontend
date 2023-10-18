import React,{useState} from 'react'
import axiosInstance from '../../../helpers'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useHistory} from 'react-router-dom'


export default function Createadmin() {
    const [email,setEmail]=useState('');
    const [pass,setPassword]=useState('');
    const [username,setUsername]=useState('');
    const [fullname,setName]=useState('');
    const [dob,setDob]=useState('');
    const [mobile,setMobile]=useState('');
    const [c_pass,setConfirmpassword]=useState('');
    const history=useHistory()

    const submitHandler=(e)=>{
        e.preventDefault();
        if(pass!==c_pass){
            return toast.error('Password not Matched')
        }
        const role='admin'
        
        const formData={fullname,username,email,pass,dob,mobile,role}
        axiosInstance.post('/api/register/create',formData).then(data=>{
            if(data.status===201){
                toast.success(data.data.msg)
                setTimeout(() => {
                    return history.go(0)
                }, 5000);
              
            }
        }).catch(err=>{ 
            if(err){
                err.response.data.error?toast.error(err.response.data.error)
                :toast.error(err.response.data.msg)
            }
            if(err.response.status===500){
               if(err.response.data.err.code===11000){
                    return toast.error(Object.entries(err.response.data.err.keyValue)[0][1] +' is already in use')
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
                                <span className="nav-tabs-title"><h5>CREATE NEW HR</h5></span>
                            </div>
                
                        </div>
                        </div>
                        <div className="card-body">
                        <ToastContainer/>
                        <div className="tab-content">
                            <div className="tab-pane active" id="profile">
                    <form onSubmit={submitHandler}>
                               
            <div className="form-group">
                <label for="exampleFormControlInput1"> FULL NAME</label>
                <input type="text" className="form-control"  onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">USERNAME</label>
                <input type="text" className="form-control"  onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">EMAIL</label>
                <input type="email" className="form-control"  onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">PASSWORD</label>
                <input type="text" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">CONFIRM PASSWORD</label>
                <input type="text" className="form-control"  onChange={(e)=>setConfirmpassword(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">DOB</label>
                <input type="date" className="form-control"  onChange={(e)=>setDob(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">PHONE NUMBER</label>
                <input type="number" className="form-control" onChange={(e)=>setMobile(e.target.value)}/>
            </div>
            
            
            <button className="col-md-2 col-lg-2 btn btn-primary" type="submit">Add HR</button>

            
        </form>
                </div>
            </div>
        </div>
    </div>
    </div>

            )
        }
