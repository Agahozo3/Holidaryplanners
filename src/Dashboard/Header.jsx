import React from 'react'
// import { MdOutlineLightMode, MdSettings} from 'react-icons/md'
import './Header.css'
// import { iconsImgs } from "../../utils/images";
import {BsSearch} from 'react-icons/bs'

const header = () => {
  return (
    // <div className="header__container">
    // <div className="header-nav">
    //         <div className="row">
    //           <div className="user-greeting">
    //             <h3 className="h3-title">
    //               Hello, <span className="username">Hossein</span>
    //             </h3>
    //           </div>
    //           <div className="row right-header-nav">
    //             <div className="setting">
    //               <span className="settings" style={{color: '#924aef'}}>
    //                 <MdSettings />
    //               </span>
    //             </div>
    //             <div className="theme" style={{color: '#a5a5a5'}}>
    //               <span className="light-them">
    //                 <MdOutlineLightMode />
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       </div>
        <div className="main-content-top">
        {/* <div className="content-top-left">
            <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar() }>
                <img src={ iconsImgs.menu } alt="" />
            </button>
            <h3 className="content-top-title">Home</h3>
        </div> */}
        <div className="content-top-btns">
            <button type="button" className="search-btn content-top-btn">
                {/* <img src={ iconsImgs.search } alt="" /> */}
                <BsSearch />
            </button>
            <button className="notification-btn content-top-btn">
                {/* <img src={ iconsImgs.bell } /> */}
               
                <span className="notification-btn-dot"></span>
            </button>
        </div>
    </div>
  )
}

export default header