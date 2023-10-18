import React from 'react'

export default function Approveadmin({record}) {

  const showRecord=(el)=>{
    console.log(el)
    if(el[0]===undefined){
      return<h4>loading...</h4>
    }
    return el[0].map((item,index)=>{
      if(el[0]===undefined){
        return <h3>loading...</h3>
      }
      console.log(item)
      const {conference_link,interview_date,createdAt}=item
      if(item.userId===null){
        return 'user is deleted'
      }
      
      const {role}=item.jobId
      const {fullname}=item.userId
      index++
      return (
        <tr>
        <td>{index}</td>
        <td>{fullname}</td>
        <td>{role}</td>
        <td>{interview_date.substr(0,10)}</td>
        <td>{conference_link}</td>
        <td>{createdAt.substr(0,10)}</td>
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
                      <span className="nav-tabs-title"><h5>Approved User</h5></span>
                    </div>
                  </div>
                  </div>
                  
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>ID</th>
                        <th>CANDIDATE Name</th>
                        <th>FOR </th>
                        <th>INTERVIEW DATE</th>
                        <th>CONFERENCE LINK</th>
                        <th>APPROVED ON</th>
                      </thead>
                      <tbody class=" text-primary">
                        {showRecord(record)}
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
