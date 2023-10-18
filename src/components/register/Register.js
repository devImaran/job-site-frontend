import React,{useState} from 'react'
import Input from '../../container/Input';
import {Container,Row,Col} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import axiosInstance from '../../helpers/index'
import '../login/login.css'
import { ToastContainer, toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';

export default function Register() {
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
        
        const formData={fullname,username,email,pass,dob,mobile}
        axiosInstance.post('/api/register/create',formData).then(data=>{
            if(data.status===201){
                return history.push('/login')
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

        <div id="login">
          
          <div className ="row">
              <div className ="col-md-10 offset-md-1">
                  <div className="row">
                      <div className="col-md-5 adminarea">
                          <h1>Already Have Account</h1>
                          <h3>Login Here</h3>

                          <Link className="btn btn-warning" to={`/login`}>Login Now</Link>
                      </div>
                      <div className="col-md-7 registerarea">
                              <h2>Register</h2>
                              <div className="login-form">
                              <ToastContainer position="top-center" />
                                  <form onSubmit={submitHandler}>
                                  <Row>
                        <Col md={12}> <Input type="text" placeholder="Enter Name" label="Full Name" onChange={(e)=>setName(e.target.value)} /></Col>
                        <Col md={6}> <Input type="text" placeholder="Enter Username" label="Username" onChange={(e)=>setUsername(e.target.value)} /></Col>
                        <Col md={6}> <Input type="email" placeholder="Enter Email" label="E-mail" onChange={(e)=>setEmail(e.target.value)} /></Col>
                        <Col md={6}> <Input type="password" placeholder="Enter Password" label="Password" onChange={(e)=>setPassword(e.target.value)} /></Col>
                        <Col md={6}> <Input type="password" placeholder="Confirm Password" label="Confirm Password" onChange={(e)=>setConfirmpassword(e.target.value)} /></Col>
                        <Col md={6}> <Input type="date" placeholder="Date Of Birth" label="Date Of Birth" onChange={(e)=>setDob(e.target.value)} /></Col>
                        <Col md={6}> <Input type="number" placeholder="Enter Mobile Number" label="Mobile" onChange={(e)=>setMobile(e.target.value)} /></Col>
                        <Col md={6}>   <button type="submit" className="btn btn-danger">Sign Up</button></Col>
                        <Col md={6}>  <button type="reset" className="btn btn-danger">Reset</button></Col> 

                    </Row>
                    </form>
                             
                      </div>
                      
                  </div>
                  </div> 
          </div>
      </div>
      </div>

       
           
        </div>
    )
}
