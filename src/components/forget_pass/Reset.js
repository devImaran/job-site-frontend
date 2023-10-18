import React , {useState,useEffect} from 'react'
import './forget.css'
import Input from '../../container/Input'
import axiosInstance from '../../helpers';
import {useParams,useHistory} from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify'
export default function Forget() {
    const [pass,setPass]=useState('');
    const history=useHistory()
    const token=useParams()
        const sendToken=token.token

   const submitHandler=(e)=>{
        e.preventDefault();
        const formData={sendToken,pass}
        axiosInstance.post('/api/new-password/forget',formData).then(data=>{
            if(data.status===200){
                toast.success(data.data.msg)
                setTimeout(() => {
                    history.push('/login')
                },5000);
            }
        }).catch(err=>{
            if(err){
                err.response.data.error?toast.error(err.response.data.error)
                :toast.error(err.response.data.msg)
            }
        })
 
        
    }
    return (
        <div>
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
                        <ToastContainer />
                        <div className="panel-body">
                          <form onSubmit={submitHandler} id="register-form" role="form" autocomplete="off" className="form" method="post">
                            <Input type="text" placeholder="Enter New Password" onChange={(e)=>setPass(e.target.value)} />
                             <div className="form-group">
                                <button name="recover-submit" className="btn btn-lg btn-primary btn-block" type="submit">change password</button>
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