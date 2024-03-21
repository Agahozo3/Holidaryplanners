import React  from 'react';
import Sidenav from './Sidenav';
import Header from "./Header"
// import Userimp from './UserImp';
import { Outlet } from 'react-router-dom';
import "./Dashboard.css"

function Dashboard() {
return (
  <div className='dashboard-content'>
    {/* <Userimp /> */}
<div>
  <Sidenav/>
  <Header />
  <Outlet/>
</div>
{/* <div className="content1"> */}

</div>
  // </div>
 
  );
}

export default Dashboard;