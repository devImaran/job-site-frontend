import React from 'react'


export default function navb({label}) {
  const logoutHandler=()=>{
  localStorage.clear();
    window.location.reload()
  }
    return (
        <nav className="navb navb-expand-lg navb-transparent navb-absolute fixed-top">
        <div className="container-fluid">
          <div className="navb-wrapper">
            <p className="navb-brand">{label}</p>
          </div>
          <button className="navb-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="sr-only">Toggle navigation</span>
            <span className="navb-toggler-icon icon-bar"></span>
            <span className="navb-toggler-icon icon-bar"></span>
            <span className="navb-toggler-icon icon-bar"></span>
          </button>
          <div className="collapse navb-collapse justify-content-end">
            <ul className="navb-nav">
         
            
              <li class="nav-item dropdown">
                <a class="nav-link" href="javascript:;" id="navbDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="material-icons">person</i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbDropdownProfile">
                <button href="#" className="dropdown-item ml-4" onClick={()=>logoutHandler()}>Log out</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
