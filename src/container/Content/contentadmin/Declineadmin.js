import React from 'react'

export default function Declineadmin({record}) {
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
      const {role,profile,createdAt}=item
      const {fullname,email}=item.userId
      
      index++
      return (
        <tr>
        <td>{index}</td>
        <td>{fullname}</td>
        <td>{email}</td>
        <td>{role}</td>
        <td>{profile}</td>
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
                      <span className="nav-tabs-title"><h5>Declined Users</h5></span>
                    </div>
                  </div>
                  </div>
                  
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>ID</th>
                        <th>CANDIDATE NAME</th>
                        <th>CANDIDATE EMAIL</th>
                        <th>ROLE</th>
                        <th>PROFILE</th>
                        <th>REJECTED ON</th>
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
