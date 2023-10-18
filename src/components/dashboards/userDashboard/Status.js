import React,{useEffect,useState} from 'react'
import Sidebar from '../../../container/Sidebar/Sidebar'
import StatusContent from '../../../container/contentJob/StatusContent'
import {Row,Col} from 'react-bootstrap'
import Navbar from '../../../container/Content/Navbar'
import { Redirect } from 'react-router-dom'
import '../css/material-dashboard.css'


export default function Status(props) {
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
       const token=localStorage.getItem('token')
        SetToken(token)
    },[])
    
    return (
        Token===null?<Redirect to="/login" />:
        <div>
        <Row>
            <Col md={3}>
            <Sidebar list={
                [
                    {label:'Job Application',icon:'dashboard',link:`/user_dashboard/job_application/${idToSend}`},
                    {label:'View Application',icon:'person',link:'/user_dashboard/view_application',data:{idToSend}},
                    {label:'Status',icon:'table',link:'/user_dashboard/status',active:"active"},
                ]
            } />
            </Col>
            <Col md={9}>
            <Navbar label={"Manage Password"}/>
            <StatusContent/>
            </Col>
        </Row>
        </div>
    )
}
