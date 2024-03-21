import React from 'react'
import abtBigImage from '../../public/Images/about-big-image.jpg'
import  abtSmallImage from '../../public/Images/about-small-image.jpg'


const HomeAbout = () => {
  return (
    <section className="main-about common-sec">
   
    <div className="abt-container">
      <div className="row">
        <div className="two-col">
          <div className="abt-image">
            <div className="abt-img">
              <div className="about-image-box big-img">
                <div className="about-image back-image">
                  <img src={abtBigImage} />
                </div>
              </div>
              <div className="about-image-box small-img">
                <div className="about-image back-image">
                  <img src={abtSmallImage} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="two-col">
          <div className="abt-content">
            <div className="line-title">
              <h4 className="h4-title">About us</h4>
            </div>
            <h2 className="h2-title">
              Plan Your <span>Trip</span> With <span>Us</span>
            </h2>
            <div className="about-content-text">
              <p>
                Far far away, behind the word mountains, far from the
                countries Vokalia and Consonantia, there live the blind
                texts. Separated they live in Bookmarksgrove right at the
                coast of the Semantics, a large language ocean. A small
                river named Duden flows by their place and supplies it with
                the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth. Even
                the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic. Italic Mountains, she
                had a last view back on the skyline
              </p>
            </div>
            <a href="/about" className="sec-btn">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HomeAbout