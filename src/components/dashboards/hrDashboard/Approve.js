import React,{useEffect,useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import Sidebar from '../../../container/Sidebar/Sidebar'
import Navbar from '../../../container/Content/Navbar'
import Approvehr from '../../../container/Content/contenthr/Approvehr'
import axiosInstance from '../../../helpers'
import {Redirect,useHistory} from 'react-router-dom'
import '../css/material-dashboard.css'


export default function Approve() {
    const [allJobs,setAllJobs]=useState([])
    const [Token,SetToken]=useState('')
    const history=useHistory()
 
    useEffect(()=>{
        SetToken(localStorage.getItem('token'))
        if(localStorage.getItem('role')!=='hr'){
            return history.push('/login')
        }
        getAllDetail()
    },[])

    const getAllDetail=()=>{
        const token=localStorage.getItem('token')
        const config={
            'headers':{jwt_react:token}
        }
    axiosInstance.get('/application/user/all/jobs/applied',config).then(data=>{
        return setAllJobs(data.data.data)
    }).catch(err=>{
        console.log(err)
    })
    }
    return (
        Token===null?<Redirect to="/login" />:
        <div>
        <Row>
            <Col md={3}>
            <Sidebar list ={
                [
                    {label:'View Application',icon:'dashboard',link:'/hr_dashboard'},
                    {label:'Approve/Decline',icon:'table',link:'/hr_dashboard/approvedec_app',active:"active"},
                    {label:'Account',icon:'person',link:'/hr_dashboard/account'},
                ]
            } 

            />
            </Col>
                <Col md={9}>
                    <Navbar label={"Approve/Decline"} />
                    <Approvehr allJobs={allJobs}/>
                </Col>
            </Row>
            </div>
    )
}
