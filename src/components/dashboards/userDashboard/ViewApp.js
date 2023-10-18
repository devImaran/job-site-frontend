import React, { useEffect,useState } from 'react'
import Sidebar from '../../../container/Sidebar/Sidebar'
import ViewContent from '../../../container/contentJob/ViewContent'
import {Row,Col} from 'react-bootstrap'
import Navbar from '../../../container/Content/Navbar'
import axiosInstance from '../../../helpers'
import { Redirect } from 'react-router-dom'
import '../css/material-dashboard.css'

export default function ViewApp(props) {

    const [appliedJob,setAppliedJob]=useState([])
    const [Token,SetToken]=useState('')
    const [idToSend,setIdToSend]=useState('')
  
    useEffect(()=>{
        if(props.location.state.userid){
            const id=props.location.state.userid
            if(id.perJobId){
                setIdToSend(id.perJobId)
            }else{
                setIdToSend(id.idToSend)
            }
             
        }
        const userId=localStorage.getItem('id')
        const token=localStorage.getItem('token')
        SetToken(token)
        const config={
            'headers':{jwt_react:token}
        }
    axiosInstance.get(`/application/user/job/applied/show/${userId}`,config).then(data=>{
        setAppliedJob([data.data.data])
    }).catch(err=>{
        console.log(err)
    })
    },[])
    
    return (
       Token===null?<Redirect to="/login" />:
        <div>
        <Row>
            <Col md={3}>
            <Sidebar list={
                [
                    {label:'Job Application',icon:'dashboard',link:`/user_dashboard/job_application/${idToSend}`},
                    {label:'View Application',icon:'person',link:'/user_dashboard/view_application',active:"active"},
                    {label:'Status',icon:'table',link:'/user_dashboard/status',data:{idToSend}},
                ]
            } />
            </Col>
            <Col md={9}>
            <Navbar label={"View Application"}/>
            <ViewContent appliedJob={appliedJob}/>
            </Col>
        </Row>
        </div>
    )
}
