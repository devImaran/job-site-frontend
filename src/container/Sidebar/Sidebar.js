import React from 'react'
import {Link} from 'react-router-dom'

export default function Sidebar({list,active,data}) {

  

  const showLinks=(el)=>{
    return el.map((item,index)=>{
      return (
        <li className={`nav-item ${item.active}` }key={index}>
            <Link className="nav-link"
             to={{pathname:item.link,
                  state: {
                    userid: item.data
                  }}}>

              <i className="material-icons">{item.icon}</i>
              <p>{item.label}</p>
            </Link>
          </li>
      )
    })
  }

  return (
    <div className="sidebar" data-color="purple" data-background-color="white" data-image="assets/img/sidebar-1.jpg">
     <div className="logo"><a href="/" className="simple-text logo-normal">
          LOGO
        </a></div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          {showLinks(list)}
       </ul>
      </div>
    </div>
  )
}
