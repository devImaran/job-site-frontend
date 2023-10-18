import React from 'react'
import './App.css';
import Forget from './components/forget_pass/Forget';
import {Switch,Route} from 'react-router-dom'
import Register from './components/register/Register'
import Login from './components/login/Login';
import Home from './components/Home/Home';
import Corporate from './components/corporate/Corporate';
import userDasboard from './components/dashboards/userDashboard/JobApp';
import ViewApp from './components/dashboards/userDashboard/ViewApp';
import Status from './components/dashboards/userDashboard/Status';
import hrDashboard from './components/dashboards/hrDashboard/Viewapp';
import Approve from './components/dashboards/hrDashboard/Approve';
import Account from './components/dashboards/hrDashboard/Account';
import Approveuser from './container/Content/contenthr/approve/Approveuser';
import adminDashboard from './components/dashboards/adminDashboard/Viewadmin';
import Approvedecline from './components/dashboards/adminDashboard/Approvedecline';
import Jobs from './components/dashboards/adminDashboard/Jobs';
import Decline from './components/dashboards/adminDashboard/Decline';
import Editadmin from './container/Content/contentadmin/editadmin/Editadmin';
import EditUser from './container/Content/contentadmin/editadmin/EditUser';
import Reset from './components/forget_pass/Reset';
import Viewadmin from './components/dashboards/Superadmin/Viewadmin';
import Viewhr from './components/dashboards/Superadmin/Viewhr';
import Viewuser from './components/dashboards/Superadmin/Viewuser';
import Superadmin from './components/Superadmin Login/Superadmin';
import Edits from './container/Content/contentsuper/editAll/Edits';


function App() {
 
return (
    <div>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path="/register" component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/login/forget_pass" component={Forget} />
        <Route path="/corporate_login" component={Corporate} />
        <Route path="/user_dashboard/job_application/:id" exact component={userDasboard} />
        <Route path="/user_dashboard/view_application"  exact component={ViewApp} />
        <Route path="/user_dashboard/status"  exact component={Status} />
        <Route path="/hr_dashboard" exact component={hrDashboard} />
        <Route path="/hr_dashboard/approvedec_app" exact component={Approve} />
        <Route path="/hr_dashboard/account" exact component={Account} />
        <Route path="/contenthr/approve/:id" exact component={Approveuser} />
        <Route path="/admin_dashboard/view_apps" exact component={adminDashboard} />
        <Route path="/admin_dashboard/approve_apps" exact component={Approvedecline} />
        <Route path="/admin_dashboard/decline_apps" exact component={Decline} />
        <Route path="/admin_dashboard/jobs" exact component={Jobs} />
        <Route path="/contentadmin/editadmin/:id" exact component={Editadmin} />
        <Route path="/admin/edituser/:id" exact component={EditUser} />
        <Route path="/reset/password/:token" exact component={Reset} />
        <Route path="/create_hr"  exact component={Viewhr} />
        <Route path="/create_admin" exact component={Viewadmin} />
        <Route path="/admin_hr" exact component={Viewuser} />
        <Route path="/super_admin" exact component={Superadmin} />
        <Route path="/superadmin/area/edit/:id" exact component={Edits} />


      </Switch>
    </div>
)
}

export default App ;

