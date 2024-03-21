import React from 'react'
import dest1img from '../../public/Images/destination-img1.jpg'
import dest2img from '../../public/Images/destination-img2.jpg'
import dest3img from '../../public/Images/destination-img3.jpg'
import dest4img from '../../public/Images/destination-img4.jpg'

const homeDestination = () => {

    const destinationBgStyle = {
        backgroundImage: 'url(../public/Images/wave-design.jpg)',
        backgroundSize: "cover",
        backgroundPosition: "center center",
      };
    const dest1Style = {
        backgroundImage: 'url(../public/Images/destination-img1.jpg)',
        backgroundSize: "cover",
        backgroundPosition: "center center",
      };
    const dest2Style = {
        backgroundImage: 'url(../public/Images/destination-img2.jpg)',
        backgroundSize: "cover",
        backgroundPosition: "center center",
      };
    const dest3Style = {
        backgroundImage: 'url(../public/Images/destination-img3.jpg)',
        backgroundSize: "cover",
        backgroundPosition: "center center",
      };
    const dest4Style = {
        backgroundImage: 'url(../public/Images/destination-img4.jpg)',
        backgroundSize: "cover",
        backgroundPosition: "center center",
      };

  return (
     <section className="main-destination common-sec" style={destinationBgStyle}>
     <div className="container">
       <div className="row">
         <div className="col-6">
           <div className="sec-title">
             <div className="line-title">
               <h4 className="h4-title">Amazing Destination</h4>
             </div>
             <h2 className="h2-title">
               Choose The <span>Destination</span> Just Right For{" "}
               <span>Your Vocation</span>
             </h2>
           </div>
         </div>
       </div>
       <div className="row">
         <div className="col-8">
           <div className="destination-box">
             <a href="/destination-detail">
               <div className="destination-box-image-wp">
                 <div
                   className="destination-box-image"
                   style={dest1Style}
                 ></div>
               </div>
               <div className="destination-box-content">
                 <div className="destination-box-content-inner">
                   <h3 className="h3-title">Greece</h3>
                 </div>
               </div>
             </a>
           </div>
           <div className="row">
             <div className="col-6">
               <div className="destination-box">
                 <a href="/destination-detail">
                   <div className="destination-box-image-wp">
                     <div
                       className="destination-box-image"
                       style={dest2Style}
                     ></div>
                   </div>
                   <div className="destination-box-content">
                     <div className="destination-box-content-inner">
                       <h3 className="h3-title">Thailand</h3>
                     </div>
                   </div>
                 </a>
               </div>
             </div>
             <div className="col-6">
               <div className="destination-box">
                 <a href="/destination-detail">
                   <div className="destination-box-image-wp">
                     <div
                       className="destination-box-image"
                       style={dest3Style}
                     ></div>
                   </div>
                   <div className="destination-box-content">
                     <div className="destination-box-content-inner">
                       <h3 className="h3-title">Switzerland</h3>
                     </div>
                   </div>
                 </a>
               </div>
             </div>
           </div>
         </div>
         <div className="col-4">
           <div className="destination-box big-height">
             <a href="/destination-detail">
               <div className="destination-box-image-wp">
                 <div
                   className="destination-box-image"
                   style={dest4Style}
                 ></div>
               </div>
               <div className="destination-box-content">
                 <div className="destination-box-content-inner">
                   <h3 className="h3-title">India</h3>
                 </div>
               </div>
             </a>
           </div>
         </div>
       </div>
       <div className="row">
         <div className="col-12">
           <div className="dest-see-more">
             <a href="/destination" className="btn">
               <span>View All</span>
             </a>
           </div>
         </div>
       </div>
     </div>
   </section>
 
  );
}

export default homeDestination