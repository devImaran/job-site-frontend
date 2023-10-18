import React,{useEffect, useState} from 'react'
import JobContent from '../../../container/contentJob/JobContent'
import Sidebar from '../../../container/Sidebar/Sidebar'
import {Row,Col} from 'react-bootstrap'
import Navbar from '../../../container/Content/Navbar'
import axiosInstance from '../../../helpers'
import {Redirect} from 'react-router-dom'
import '../css/material-dashboard.css'

export default function JobApp(props) {
    const [singleJob,setSingleJob]=useState([])
    const [Token,SetToken]=useState('')
    const [perJobId,setPerJobId]=useState('')

    useEffect(()=>{
        const token=localStorage.getItem('token')
        SetToken(token)
        getDetail()
    },[])

    const getDetail=()=>{
        const jobId=props.match.params.id
        setPerJobId(jobId)
        axiosInstance.get(`application/job/show/single/${jobId}`).then(data=>{
            return setSingleJob(data.data.data)
        }).catch(err=>{
            console.log(err)
        })
    }


    return (
        Token==null?<Redirect to="/login" />:
        <div>
        <Row>
            <Col md={3}>
            <Sidebar list={
                [
                    {label:'Job Application',icon:'dashboard',link:`/user_dashboard/job_application/${perJobId}`,active:"active"},
                    {label:'View Application',icon:'person',link:'/user_dashboard/view_application',data:{perJobId}},
                    {label:'Status',icon:'table',link:'/user_dashboard/status',data:{perJobId}},
                ]
            } />
            </Col>
            <Col md={9}>
                <Navbar label={"Job Application"}/>
                <JobContent singleJob={singleJob}/>
            </Col>
        </Row>
        </div>
    )
}
