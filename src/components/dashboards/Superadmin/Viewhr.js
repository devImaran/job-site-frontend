import React,{useEffect,useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import {Redirect,useHistory} from 'react-router-dom'
import Sidebar from '../../../container/Sidebar/Sidebar'
import Navbar from '../../../container/Content/Navbar'

import Createhr from '../../../container/Content/contentsuper/Createhr'
import '../css/material-dashboard.css'


export default function Viewhr() {
    const [Token,SetToken]=useState('')
    const history=useHistory()
    
    useEffect(()=>{ 
        if(localStorage.getItem('role')!=='super_admin'){
            return history.push('/login')
        }else{
            if(!localStorage.getItem('token')){
                return history.push('/super_admin')
            }
        }
        
    },[])

    return (
        
        <div>
        <Row>
            <Col md={3}>
            <Sidebar list ={
                [
                    {label:'ADD ADMIN',icon:'dashboard',link:'/create_admin'},
                    {label:'ADD HR',icon:'table',link:'/create_hr',active:"active"},
                    {label:'SHOW ALL',icon:'table',link:'/admin_hr'},
                ]
            } 

            />
            </Col>
                <Col md={9}>
                    <Navbar label={"Create Hr"} />
                   <Createhr />
                </Col>
            </Row>
            </div>
    )
}
