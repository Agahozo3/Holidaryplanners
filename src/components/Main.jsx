import React from 'react'
import { FaCalendarAlt,FaCaretDown,FaFlag,FaMapMarkerAlt } from 'react-icons/fa'



const main = () => {
  return (
    <section className="banner-form">
    <div className="form-container">
      <form action="" className="form">
        <div className="banner-form-input">
          <span className="input-box where-wrap">
            <span className="icon">
              <FaMapMarkerAlt />
            </span>
            <input type="text" className="form-input" placeholder="Where To?" />
          </span>
        </div>
        <div className="banner-form-input">
          <span className="input-box when-wrap">
            <span className="icon">
              <FaCalendarAlt />
            </span>
            <select className="form-input">
              <option>When?</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
            <span className="arrow">
              <FaCaretDown />
            </span>
          </span>
        </div>
        <div className="banner-form-input">
          <span className="input-box travel-wrap">
            <span className="icon">
              {/* <FaFlag /> */}
            </span>
            <select className="form-input">
              <option>Travel Type</option>
              <option>Cultural</option>
              <option>Adventure</option>
              <option>Historical</option>
              <option>Seaside</option>
              <option>Discovery</option>
            </select>
            <span className="arrow">
              <FaCaretDown />
            </span>
          </span>
        </div>
        <div className="banner-form-input form-btn">
          <span className="input-box button-wrap">
            <button className="sec-btn">
              <span>Find Now</span>
            </button>
          </span>
        </div>
      </form>
    </div>
    
  </section>
  )
}

export default main