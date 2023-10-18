import React ,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import Sidebar from '../../../container/Sidebar/Sidebar'
import Navbar from '../../../container/Content/Navbar'
import Approveadmin from '../../../container/Content/contentadmin/Approveadmin'
import axiosInstance from '../../../helpers'
import {Redirect,useHistory} from 'react-router-dom'
import '../css/material-dashboard.css'


export default function Approvedecline() {
    const [record,setRecord]=useState([])
    const [Token,SetToken]=useState('')   
    const history=useHistory()                

    useEffect(() => {
    
        axiosInstance.get('/application/job/approved/show').then(data=>{
           setRecord([data.data.data])
       }).catch(err=>{
        if(err.response.status===400){
            return history.push('/')
        }
       })
    }, [])

    return (
        Token===null ?<Redirect to="/login" />:
        <div>
        <Row>
            <Col md={3}>
            <Sidebar list ={
                [
                    {label:'View Application',icon:'dashboard',link:'/admin_dashboard/view_apps'},
                    {label:'Approve',icon:'table',link:'/admin_dashboard/approve_apps',active:"active"},
                    {label:'Decline',icon:'table',link:'/admin_dashboard/decline_apps'},
                    {label:'Jobs',icon:'person',link:'/admin_dashboard/jobs'},
                ]
            } 

            />
            </Col>
                <Col md={9}>
                    <Navbar label={"Approve/Decline List"} />
                   <Approveadmin record={record}/>
                </Col>
            </Row>
            </div>
    )
}
