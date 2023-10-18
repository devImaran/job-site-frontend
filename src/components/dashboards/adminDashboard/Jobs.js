import React,{useEffect,useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import Sidebar from '../../../container/Sidebar/Sidebar'
import Navbar from '../../../container/Content/Navbar'
import Jobsadmin from '../../../container/Content/contentadmin/Jobsadmin'
import {Redirect,useHistory} from 'react-router-dom'
import '../css/material-dashboard.css'


export default function Jobs() {
    const [Token,SetToken]=useState('')
    const history=useHistory()
    

    useEffect(()=>{
        SetToken(localStorage.getItem('token'))
        if(localStorage.getItem('role')!=='admin'){
            return history.push('/')
        }
        
    },[])
    return (
        Token===null?<Redirect to="/login" />:
        <div>
        <Row>
            <Col md={3}>
            <Sidebar list ={
                [
                    {label:'View Application',icon:'dashboard',link:'/admin_dashboard/view_apps'},
                    {label:'Approve',icon:'table',link:'/admin_dashboard/approve_apps'},
                    {label:'Decline',icon:'table',link:'/admin_dashboard/decline_apps'},
                    {label:'Jobs',icon:'person',link:'/admin_dashboard/jobs',active:"active"},
                ]
            } 

            />
            </Col>
                <Col md={9}>
                    <Navbar label={"Jobs Form"} />
                   <Jobsadmin />
                </Col>
            </Row>
            </div>
    )
}
