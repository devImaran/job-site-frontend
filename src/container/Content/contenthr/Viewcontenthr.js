import React from 'react'

export default function Viewcontenthr({allJobs}) {

  const getRecords=(el)=>{
    if(el===undefined){
      return<h4>loading...</h4>
    }
    return el.map((item,index)=>{
      if(el===undefined){
        return <h3>loading...</h3>
      }
      const {role,profile,userId}=item
      // if(userId===null){
      //   return 'user deleted'
      // }
      index++
      return (
        <tr key={index}>
          <td>{index}</td>
          <td>{role}</td>
          <td>{profile}</td>
          <td>{userId===null?'user is deleted by admin':userId.fullname}</td>
          <td>{userId===null?'user deleted':userId._id}</td>
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
                <div className="card-header card-header-tabs card-header-primary">
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                      <span className="nav-tabs-title"><h5>View Application</h5></span>
                    </div>
                  </div>
                  </div>
                  
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>S.No</th>
                        <th>ROLE</th>
                        <th>PROFILE</th>
                        <th>CANDIDATE NAME</th>
                        <th>CANDIDATE ID</th>
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
