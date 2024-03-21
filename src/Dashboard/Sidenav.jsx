import React from 'react'
import './Sidenav.css'
import { BsGrid, BsWechat, } from 'react-icons/bs'
import { RiCalendarTodoFill } from 'react-icons/ri'
import { GiCommercialAirplane } from 'react-icons/gi'
import { CiLocationOn } from 'react-icons/ci'
import { FaRegUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { HiOutlineLogout } from 'react-icons/hi'
// import {Agahozo} from  '/images/agahozo.jpg'




const Sidenav = () => {
    return (
        <nav>
            <div className="logo-name">
                <div className="logo-image">
                    <img src="/public/images/logo.png" alt="" />
                </div>
                {/* <span className="logo_name">Holidary planner</span> */}
            </div>
            <div className="menu-items">
                <ul className="nav-links">
                    <li><a href="/Dashboard" className='links'>
                        <BsGrid />
                        <span className="link-name">Dashboard</span>
                    </a></li>
                    {/* <li><Link to="/Dashboard/Places" className='links'>
                        <CiLocationOn /> Places
                    </Link></li> */}
        
                    <li><Link to="/Dashboard/User" className='links'>
                        <FaRegUser />
                        <span className="link-name">User</span>
                    </Link></li>
                    <li><Link to="/Dashboard/Tour" className='links'>
                        <GiCommercialAirplane />
                        <span className="link-name">Tour</span>
                    </Link></li>
                     <li><Link to="/Dashboard/Booking" className='links'>
                     <CiLocationOn />
                        <span className="link-name">Booking</span>
                    </Link></li>
                    <li><Link to="/Dashboard/Contact" className='links'>
                        <RiCalendarTodoFill />
                        <span className="link-name">Contact</span>
                    </Link></li>
                 
                    {/* <li><Link to="/Dashboard/Chart" className='links'>
                        <BsWechat />
                        <span className="link-name">Chart</span>
                    </Link></li> */}
                </ul>

                <ul className="logout-mode">
                    <li><Link to="/" className='links'>
                        <HiOutlineLogout />
                        <span className="link-name">Logout</span>
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Sidenav