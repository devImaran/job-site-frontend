import React from 'react'
import {useHistory} from 'react-router-dom'
import axiosInstance from '../../../helpers';
import { ToastContainer, toast } from 'react-toastify';
import '../../../../node_modules/react-toastify/dist/ReactToastify.css';



export default function Approvehr({allJobs}) {
  const history=useHistory()

  const approveHandler=(id,item)=>{
   history.push({
      pathname:'/contenthr/approve/'+id,
      userData:{
          item:item
       }
     });
 
  }
  const declineHandler=(items)=>{
    console.log(items)
    const token=localStorage.getItem('token')
    const config={
      'headers':{jwt_react:token}
    }
    axiosInstance.post('/application/declined/hr/job',items,config).then(data=>{
      if(data.status===200){
        toast.success(data.data.msg)
        setTimeout(() => {
          history.go(0)
        }, 5000);
      }
    }).catch(err=>{
      if(!err){
       return 0;
    }else{
      if(err.response==undefined){
        return 0;
      }else{
        err.response.data.error?toast.error(err.response.data.error)
        :toast.error(err.response.data.msg)
      }
        
    }
    })
    
  }

  const getRecords=(el)=>{
    if(el===undefined){
      return<h4>loading...</h4>
    }
    return el.map((item,index)=>{
      if(el===undefined){
        return <h3>loading...</h3>
      }
      const {_id,role,profile,userId}=item
      index++
      return (
        <tr key={index}>
          <td>{index}</td>
          <td>{role}</td>
          <td>{profile}</td>
          <td>{userId===null?'user is deleted by admin':userId.fullname}</td>
          
          <td> {userId===null?'':<div><button className="btn btn-success" onClick={()=>approveHandler(_id,item)}>Approve</button>
          <button className="btn btn-danger" onClick={()=>declineHandler(item)}>Decline</button></div>}</td>
          
        </tr>
      )
    })
  }
    return (
        <div>
        <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
            <div className="card" style={{marginTop:150+"px"}}>
            <ToastContainer position="top-center" />
                <div className="card-header card-header-tabs card-header-primary">
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                      <span className="nav-tabs-title"><h5>Approve/Decline Jobs</h5></span>
                    </div>
                  </div>
                  </div>
                  
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>S.NO</th>
                        <th>ROLE</th>
                        <th>PROFILE</th>
                        <th>CANDIDATE</th>
                        <th>ACTIONS</th>
                        
                      </thead>
                      <tbody class=" text-primary">
                       {getRecords(allJobs)}
                      </tbody>
                      </table>
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
