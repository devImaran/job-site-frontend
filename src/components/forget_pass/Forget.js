import React , {useState} from 'react'
import './forget.css'
import Input from '../../container/Input'
import axiosInstance from '../../helpers';
import {ToastContainer,toast} from 'react-toastify'

export default function Forget() {
    const [email,setEmail]=useState('');
    const [reset,setReset]=useState('');

    const submitHandler=(e)=>{
        e.preventDefault();
        const token=localStorage.getItem('token')
        const config={
            'headers':{jwt_react:token}
        }
        const formData={email}
        axiosInstance.post('/api/reset/password',formData,config).then(data=>{
            if(data.status===200){
                toast.success(data.data.msg)
            }
        }).catch(err=>{
            if(err){
                err.response.data.error?toast.error(err.response.data.error)
                :toast.error(err.response.data.msg)
            }
        })
    }
    return (
        <div id="forget">
        <div className="form-gap"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                    <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="text-center">
                        <h3><i className="fa fa-lock fa-4x"></i></h3>
                        <h2 className="text-center">Forgot Password?</h2>
                        <p>You can reset your password here.</p>
                        <ToastContainer/>
                        <div className="panel-body">
                          <form onSubmit={submitHandler} id="register-form" role="form" autocomplete="off" className="form" method="post">
                            <Input type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} />
                             <div className="form-group">
                             <button name="recover-submit" className="btn btn-lg btn-primary btn-block" type="submit" onChange={(e)=>setReset(e.target.value)} >Reset</button>
                            </div>
                            
                            </form>
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
