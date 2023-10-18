import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import axiosInstance from '../../../../helpers';
import Input from '../../../Input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router-dom';
import {useHistory} from 'react-router-dom'



export default function Edits(props) {
    const [email,setEmail]=useState('hello');
    const [username,setUsername]=useState('');
    const [fullname,setName]=useState('');
    const [mobile,setMobile]=useState('');
    const [userId,setUserId]=useState('')
    const history=useHistory()

    useEffect(()=>{
        const myId=props.match.params.id;
        setUserId(myId)
        const token=localStorage.getItem('token')
        const config={
            'headers':{'jwt_react':token}
        }
        axiosInstance.get('/api/show/onlyone/registered/user/'+myId,config).then(data=>{
            const {fullname,username,mobile,email}=data.data.data
            console.log(data.data.data)
            setName(fullname);
            setUsername(username);
            setEmail(email);
            setMobile(mobile);
        }).catch(err=>{
            console.log(err)
        })
    },[])
    
    

    const submitHandler=(e)=>{
        e.preventDefault();
        const token=localStorage.getItem('token')

        const config={
            'headers':{'jwt_react':token}
        }
        const formData={fullname,username,email,mobile}
        axiosInstance.put('/api/update/registered/user/'+userId,formData,config).then(data=>{
           toast.success(data.data.msg)
           setTimeout(() => {
           return history.push('/admin_hr')
           }, 4000);
        }).catch(err=>{
            console.log(err)
        })
        
        }
    
    return (
        <div>
       <div>
       <div id="login">
          
          <div className ="row">
              <div className ="col-md-10 offset-md-1">
                  <div className="row">
                  <ToastContainer/>
                      <div className="col-md-7 loginarea">
                              <h2>Edit Details</h2>
                              <div className="login-form">
                                  <form onSubmit={submitHandler}>
                                  <Input type="text" placeholder="Enter Name" label="Full Name" value={fullname} onChange={(e)=>setName(e.target.value)} />
                                  <Input type="text" placeholder="Enter Username" label="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                                  <Input type="number" placeholder="Enter Mobile Number" label="Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
                                  <Input type="email" placeholder="Enter Email" label="E-mail" value={email} onChange={(e)=>setEmail(e.target.value)} />
                                  <button className="btn btn-primary" onClick={()=>history.push('/admin_hr')}>Cancel</button> 

                                  <button className="btn btn-primary" type="submit">Update</button>

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
