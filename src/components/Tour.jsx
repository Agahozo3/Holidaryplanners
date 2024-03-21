import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { invoice } from './data'
import { useStateContext } from '../Context/AppContext'


const Tour = () => {
  const { tours }=useStateContext();
  return (
    <>
     <div>
        <div className='tour'>
        <p>Tour List</p>
       </div>
      <div className='tourists'>
      <div className='touristsse'>
   {tours?.map((invo)=>(
    <div className="card">
      <img src={invo.backdropImage} />
      <button className='RWANDA'>{invo.destination}</button>
      <div className="card-body">
        <h2>{invo.code}</h2>
        <p>{invo.date}</p>
        <div className='duration'>
        <div >
          <b>Duration</b>
          <p>{invo.Duration}</p>
        </div>
        <div>
          <b>Group Size</b>
          <p>{invo.Group_size}</p>
        </div>
        </div>
        <div className='durationn'>
          <p>{invo.Price}</p>
          <Link to={`/Book/${invo._id}`}>
          <button  className="find-buttonn">BOOK NOW</button>
          </Link>
        </div>
       </div>
       </div>
       ))}
   </div>
        <div className='tourists22'>
        <div className='card2'>
         <p>FIND YOUR TOUR</p>
         <div>
          <input type="text" placeholder="Search Tour" class="filterinput" />
        </div>
        <div>
          <input type="text" placeholder="WHERE TO?" class="filterinput" />
        </div>
        <div>
          <select class="filterselect">
            <option value="">Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div>
        <label>
         <b>Duration</b>
        </label>
        <select class="filterselect">
          <option value="">Any</option>
          <option value="">1 Day Tour</option>
          <option value="">2-4 Days Tour</option>
          <option value="">5-7 Days Tour</option>
          <option value="">7+ Days Tour</option>
        </select>
        </div>
        <div className='number'>
          <input type="number" className='number-1' />
          <input type="number" className='number-1'/>
        </div>
        <div className='sects'>
        <label class="custom-checkbox">
        <input type="checkbox"/>
        Cultural
    </label><br></br>
    <label class="custom-checkbox">
        <input type="checkbox"/>
        Adventure
    </label><br></br>
    <label class="custom-checkbox">
        <input type="checkbox"/>
        Historical
    </label><br></br>
    <label class="custom-checkbox">
        <input type="checkbox"/>
        Seaside
    </label><br></br>
    <label class="custom-checkbox">
        <input type="checkbox"/>
        Discovery
    </label>
      </div>
        <button class="findbutton">FIND NOW</button>
      </div>
             <div className='TOURLIST '>
        <b>WHY BOOK WITH US?</b>
        <div className='TOURLIST1'>
        <h>Best Price Guarantee</h>
        <h>Customer care available 24/7</h>
        <h>Free Travel Insureance</h>
        <h>Hand-picked Tours & Activities</h>
        </div>
        </div>
        <div className='TOURLIST2'>
       <b>GET A QUESTION?</b>
       <p>Do not hesitage to give us a call.<br/>
       We are an expert team and we are happy <br/>
       to talk to you.</p>
       <div className='TOURLIST2-1'>
        <h>holidayplanners@gmail.com</h>
        <h>+123 456 7890</h>
       </div>
             </div>
        </div>
      </div>
         </div>
    
  
    </>
 
  )
}

export default Tour