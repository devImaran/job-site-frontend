import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import Sidebar from '../../../container/Sidebar/Sidebar'
import Navbar from '../../../container/Content/Navbar'
import Accounthr from '../../../container/Content/contenthr/Accounthr'
import {Redirect,useHistory} from 'react-router-dom'
import '../css/material-dashboard.css'

export default function Account() {
    const [Token,SetToken]=useState('')
    const history=useHistory()
    useEffect(()=>{
        SetToken(localStorage.getItem('token'))
        if(localStorage.getItem('role')!=='hr'){
            return history.push('/login')
        }
    },[])
    return (
        Token===null?<Redirect to="/login" />:
        <div>
        <Row>
            <Col md={3}>
            <Sidebar list ={
                [
                    {label:'View Application',icon:'dashboard',link:'/hr_dashboard'},
                    {label:'Approve/Decline',icon:'table',link:'/hr_dashboard/approvedec_app'},
                    {label:'Account',icon:'person',link:'/hr_dashboard/account',active:"active"},
                ]
            } 

            />
            </Col>
                <Col md={9}>
                    <Navbar label={"Account"} />
                   <Accounthr />
                </Col>
            </Row>
            </div>
    )
}
