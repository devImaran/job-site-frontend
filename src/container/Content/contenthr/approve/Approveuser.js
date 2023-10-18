import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Input from '../../../../container/Input';
import axiosInstance from '../../../../helpers';
import { ToastContainer, toast } from 'react-toastify';
import {useHistory} from 'react-router-dom'
import '../../../../../node_modules/react-toastify/dist/ReactToastify.css';




export default function Approveuser(props) {
    const [interview_date,setDate]=useState('');
    const [conference_link,setCL]=useState('');
    const [data,setData]=useState([]);
    const history=useHistory()

    useEffect(()=>{
        const commingData=props.location.userData
        setData([commingData])
    },[])
    

    const submitHandler=(e)=>{
        e.preventDefault();
        const userId=(data[0].item.userId._id)
        const jobId=props.match.params.id
        const token=localStorage.getItem('token')
        const config={
            'headers':{'jwt_react':token}
        }
        const formData={interview_date,conference_link,userId,jobId}
        
        axiosInstance.post('/application/hr/job/approved',formData,config).then(data=>{
            toast.success(data.data.msg)
            setTimeout(() => {
                history.push('/hr_dashboard/approvedec_app')
            }, 5000);
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
       <div id="login">
          
          <div className ="row">
              <div className ="col-md-10 offset-md-1">
                  <div className="row">
                  <ToastContainer />
                      <div className="col-md-7 loginarea">
                              <h2>Appoint For InterView</h2>
                              <div className="login-form">
                              
                                  <form onSubmit={submitHandler}>
                                  <Input type="date" placeholder="Interview Date" label="Interview Date" onChange={(e)=>setDate(e.target.value)} />
                                 <Input type="text" placeholder="Conference Link" label="Conference Link" onChange={(e)=>setCL(e.target.value)} />
                                  <button className="btn btn-primary" onClick={()=>history.push('/hr_dashboard/approvedec_app')}>Cancel</button> 

                                  <button className="btn btn-primary" type="submit">Send</button>

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
