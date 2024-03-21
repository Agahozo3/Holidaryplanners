import React,{useState} from 'react'
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsTelephone } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi'
import Logo from '../../public/Images/white-logo.png'
import {FaTimes} from 'react-icons/fa'





const Nav = () => {
  const [isModalOpen,setIsModalOpen]=useState(false)

  const openModal=()=>{
    setIsModalOpen(true);
  }
  const CloseModal=()=>{
    setIsModalOpen(false);
  }
  return (
    <div className='header'>
      <div className='nav__1'>
        <div className="flex">
          <div className='flex-icon'>

            <HiOutlineMail className='mail__icon' />
            <p className='header__text'> holidaryplanners@gmail.com</p>
          </div>
          <hr />
          <div className='flex-icon'>
            <BsTelephone className='phone__icon' />
            <p className='header__phone'>+123 456 7890</p>
          </div>
        </div>
        <div className="icons">

          <div className='icon'><a><FaFacebookF /></a></div>
          <hr />
          <div className='icon'><a><BsInstagram /></a></div>
          <hr />
          <div className='icon'><a><AiOutlineTwitter /></a></div>
        </div>
      </div>
      <div class="bottom-header">
        <div class="site__branding">
          <img src="public/images/logo.png" alt="Logo"/>
        </div>
        <div className='site__btn'>
          <a href="/Login" className='button'>Login</a>
          <AiOutlineSearch className='searchIcon' />
        
          <div className="menu">
            <button type="button" onClick={openModal}>
             <span><BiMenuAltRight /></span> 
             </button>
            
          {isModalOpen && (
         <div className="bottom-header">
         <div className="row">
             <div className="col-lg-4">
                 <div className="site-branding">
                     <a href=""><img src={Logo} alt="Logo" /></a>
                 </div>
             </div>
             <div className="col-lg-8">
                 <div className="header-menu-side">
                     <div className="header-reserve-btn for-des">
                         <a href="" className="sec-btn"><span>Reserve</span></a>
                     </div>
                     <div className="search-wp">
                         <div className="search-icon">
                             <span><AiOutlineSearch /></span>
                             <FaTimes />
                         </div>
                     </div>
                     {/* =======================MODAL=========================================================                            */}
                     <div className="menu">
                         <button type="button" className="men" onClick={openModal}>
                             <span><BiMenuAltRight/></span>
                         </button>
                         {isModalOpen && (
                             <div className="modal-overlay">
                                 <div className="modal">
                                     <div className="logo-icon">
                                         <img src={Logo} alt="logo-icon-white" />
                                     </div>
                                         <div className="full-menu-logo-row">
                                                     <div className="site-branding">
                                                         <a href="index.html" title="Travel & Tour"><img src={Logo} alt="Logo" /></a>
                                                     </div>
                                                     
                                         </div>
                                         <div className="close-modal">
                                   <button className="close-modal-one" onClick={CloseModal}>
                                         <FaTimes />
                                     </button>
                                   </div>
                                     <div className="modal-content">
                                      <ul>
                                         <li>
                                             <Link to='/'className="fff" onClick={CloseModal} >Home</Link>
                                         </li>
                                         {/* <li>
                                             <Link to='/About'href='/About' onClick={CloseModal}>About </Link>
                                         </li> */}
                                         {/* <li>
                                             <Link to='/Destination' onClick={CloseModal}>Destination</Link> 
                                         </li>                                                                */}
                                 
                                             
                                         <li>
                                                 <Link to='/Tour' onClick={CloseModal}>Tour</Link> 
                                         </li>                                                               
                                                
{/*                                          
                                         <li>
                                             <Link to='/Blog' onClick={CloseModal}>Blog</Link>
                                             
                                         </li> */}
                                         <li>
                                          <Link to='./Login' onClick={CloseModal}>Login</Link>
                                          </li>   
                                         <li>
                                             <Link to='/Contact' onClick={CloseModal}>Contact us</Link> 
                                         </li> 
                                         
                                           {/* <li>
                                             <Link to='/Dashboard' onClick={CloseModal}>Dashboard</Link> 
                                       </li>   */}
                                                                                             
                                     </ul>
                                   </div>
                                   
                                     
                                 
                                 </div>

                             </div>
                         )}
                     </div>
                 </div>
             </div>
         </div>
     </div>

)
}
</div>
</div>
</div>

</div> 
  )}
export default Nav;