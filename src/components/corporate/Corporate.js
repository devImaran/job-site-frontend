import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import './corporate.css'
import axiosInstance from '../../helpers'
import Input from '../../container/Input'
import { ToastContainer, toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';


export default function Corporate() {
	const [role,setRole]= useState('')
	const [email,setEmail]= useState('')
	const [pass,setPass]= useState('')
	const history=useHistory()

	const submitHandler=(e)=>{
		e.preventDefault()
		const FormDate={email,pass,role}
		
		axiosInstance.post('/api/user/login',FormDate).then(data=>{
			if(data.status===200){
				const {email,fullname,_id}=data.data.user
				localStorage.setItem('token',data.data.token)
				localStorage.setItem('fullname',fullname)
				localStorage.setItem('email',email)
				localStorage.setItem('id',_id)
				localStorage.setItem('role',data.data.user.role)
				if(data.data.user.role==='admin'){
					return history.push('/admin_dashboard/view_apps')
				}else{
					return history.push('/hr_dashboard')
				}
			}
		}).catch(err=>{
			if(!err){
                return 0;
            }else{
                err.response.data.error?toast.error(err.response.data.error)
                :toast.error(err.response.data.msg)
            }
           
		})
	}
    return (
			<div>
			<div id="corp">
				<div className="box">
					<input type="checkbox" className="togg-btn" onChange={(e)=>setRole(e.target.value)}></input>
					<div className="hrarea">
				<form onSubmit={submitHandler}>
				<h2>HR LOGIN</h2>
				<ToastContainer position="top-center" />
				<Input type="text" placeholder="Enter Email" label="Email" onChange={(e)=>setEmail(e.target.value)} />
                <Input type="password" placeholder="Enter Password" label="Password" onChange={(e)=>setPass(e.target.value)} />
                <button type="submit" className="btn btn-primary">Login</button>
				</form>
				<Link className="forget" to="/login/forget_pass">Forget Password</Link>
				</div>
				<div className="adminlogin">
				<form onSubmit={submitHandler}>
				<h2>ADMIN LOGIN</h2>
				<ToastContainer position="top-center" />
				<Input type="text" placeholder="Enter Email" label="Email" onChange={(e)=>setEmail(e.target.value)} />
                <Input type="password" placeholder="Enter Password" label="Password" onChange={(e)=>setPass(e.target.value)} />
				<Link className="forget" to={`/login/forget_pass`}>Forget Password</Link>
				<button type="submit" className="btn btn-primary">Login</button>

				</form>
				
				</div>
				</div>
			</div>
			</div>
    )
}
