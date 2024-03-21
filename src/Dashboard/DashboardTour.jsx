import React, { useState } from 'react'
import './DashboardTour.css'
import { Link } from 'react-router-dom';
import { BiPencil } from 'react-icons/bi'
import { FaTrash } from 'react-icons/fa'
import { useStateContext } from "../Context/AppContext";
import axios from 'axios';
import Notiflix from 'notiflix';
import AddTour from './AddTour';
import {useForm } from 'react-hook-form';
// import EditTour from './EditTour';

function EditTour({selectedItem,update}){

  console.log(selectedItem);
  // const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data,item) => {
    console.log(data);
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('destination', data.destination);
      formData.append('Duration', data.Duration);
      formData.append('Description', data.Description);
     formData.append('backdropImage', data.backdropImage[0]);
     formData.append('Gallery', data.gallery[0]);
      formData.append('Group_size', data.GroupTize);
      formData.append('Seats', data.Seats);
      formData.append('Price', data.Price);
      formData.append('Discount', data.Discount);
      formData.append('Tour_type', data.TourType);
      formData.append('Departure', data.Departure);
      formData.append('Return_Time', data.ReturnTime);
      formData.append('fromMonth', data.fromMonth);
      formData.append('toMonth', data.toMonth);
      formData.append('departureTime', data.departureTime);

      const response = await axios.put(
        `https://holiday-api-zj3a.onrender.com/api/v1/tour/update?fieldName=_id&value=${selectedItem._id}`,formData);
      window.location.reload();

    //  console.log(response);
      // Handle the response as needed, e.g., show a success message to the user
    } catch (error) {
      alert(error )
      console.error('Error:', error);
      // Handle errors, e.g., show an error message to the user
    }
  };
  const {register,handleSubmit}=useForm();
  return(

    <div className='edit-user-wrapper'>
      <form method='POST'  className='form-user' onSubmit={handleSubmit(onSubmit)} >
      <h3 className="tour__title">Edit Tour</h3>
         {/* <FaTimes className='fa-times' onClick={TourChange}/> */}
             <label htmlFor="" >tour title</label>
             <input type="text" name="title" defaultValue={selectedItem?.title} placeholder='tour title' {...register("title",{required:true})} />
             <label htmlFor="">country</label>
             <input type="text"  name="destination" defaultValue={selectedItem?.destination} placeholder='country' {...register("destination",{required:true})}/>
             <label htmlFor="">tour duration</label>
             <input type='text'  name="Duration" defaultValue={selectedItem?.Duration} {...register("Duration",{required:true})} />
             <label htmlFor="">tour description</label>
             <input type="text" placeholder='tour description' defaultValue={selectedItem?.Duration} name="Description"  {...register("Description",{required:true})}/>
             <label htmlFor="">tour image</label>
             <input type="file" name='backdropImage' accept='image/*' {...register("backdropImage",{required:true})} />
             <label htmlFor="">gallery</label>
             <input type="file" name='gallery' accept='image/*' multiple {...register("gallery",{required:true})} />
             <input type="text" placeholder='groupsize' defaultValue={selectedItem?.GroupTize} name='GroupTize' {...register("GroupTize",{required:true})} />
              <input type="text" placeholder='seats'  defaultValue={selectedItem?.Seats} name='Seats' {...register("Seats",{required:true})} />
                 <input type="text" placeholder='price' defaultValue={selectedItem?.Price} name='Price'{...register("Price",{required:true})} />
                 <input type="text" placeholder='discount' defaultValue={selectedItem?.Discount} name='Discount' {...register("Discount",{required:true})} />
                 <input type="text" placeholder='tour type' defaultValue={selectedItem?.TourType} name='TourType' {...register("TourType",{required:true})} />
                 <input type="text" placeholder='Departure' defaultValue={selectedItem?.Departure} name='Departure' {...register("Departure",{required:true})} />
                 <input type="text" placeholder='fromMonth' defaultValue={selectedItem?.fromMonth} name='fromMonth' {...register("fromMonth",{required:true})} />
                 <input type="text" placeholder='toMonth' defaultValue={selectedItem?.toMonth} name='toMonth' {...register("toMonth",{required:true})} />
                 <input type="text" placeholder='departureTime' defaultValue={selectedItem?.departureTime} name='departureTime' {...register("depatureTime",{required:true})} />
                 <input type="text" placeholder='ReturnTime' defaultValue={selectedItem?.ReturnTime} name='ReturnTime' {...register("ReturnTime",{required:true})}/>
             <div className="button-edit-cancel">
             <button className='btn-submit-edit'>edit</button>
             <button type='button' className='btn-cancel-edit' onClick={update} >cancel</button>
             </div>
     </form>
 </div>
  )
}

const DashboardTour = () => {
  const { tours } = useStateContext()
  console.log(tours);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [tourToDelete, setTourToDelete] = useState(null)
  const[isModel,setIsModel]=useState(false)
  const[isEdit,setIsEdit]=useState(false);
  const[selectedItem,SetSelectedItem]=useState(null)
  
  const handleEdit =(item)=>{
    SetSelectedItem(()=>item)
    update()

  }


  const handleConfirmDelete = async (item) => {
    try {
      Notiflix.Confirm.show(
        "confirm delete tour",
        "Do You want to delete",
        "yes",
        "No",
        async () => {
          const res = await axios.delete(
            `https://holiday-api-zj3a.onrender.com/api/v1/tour/delete?fieldName=_id&value=${item._id}`,


          );
          window.location.reload();
        },
        () => {
          alert('if you say so...');
        },
        {}
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteClick = (tours) => {
    setTourToDelete(tours);
    handleConfirmDelete();
  };
  const handleCancelDelete = () => {
    setShowDeleteConfirm(false)
  };

  function TourChange(){
    setIsModel(!isModel)
  }
 function update(){
    setIsEdit(!isEdit);
   }



  return (
    <>
    {/* {isModel && (
      <EditTour TourChange={TourChange}/>
    )} */}
    <div className="tour-table-container">
   <h2 className="tour-detail">Tour Details</h2>
  <button className='Addition' onClick={TourChange}>Add Tour</button>
      {isModel && <AddTour TourChange={TourChange}/>} 
      {isEdit && <EditTour  selectedItem={selectedItem} update={update} />} 
      <table className="tour-table">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Title</th>
            <th>Destination</th>
            {/* <th>Duration</th>
            <th>Description</th>
            <th>GroupSize</th>
            <th>Discount</th>
            <th>Seats</th>
            <th>Status</th>
            <th>Frommonth</th>
            <th>ToMonth</th> */}
            <th>Tour_Type</th>
            <th>dest_Image</th>
            <th>Price</th>
            {/* <th>Return_Time</th> */}
            {/* <th>Gallery</th> */}
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {tours?.map((item) => (
            <tr key={item._id}>
              {/* <td>{item._id}</td> */}
              <td>{item.title}</td>
              <td>{item.destination}</td>
              {/* <td>{item.Duration}</td>
              <td>{item.Description}</td>
              <td>{item.Group_size}</td>
              <td>{item.Price}</td>
              <td>{item.Discount}</td>
              <td>{item.Seats}</td>
              <td>{item.fromMonth}</td>
              <td>{item.toMonth}</td> */}
              <td>{item.Tour_type}</td>
              <td>
                <img src={item.backdropImage} alt="" className='tour__img' />
              </td>
              <td>{item.Price}</td>
              {/* <td>{item.ReturnTime}</td> */}
              {/* <td>{item.Gallery}</td> */}
            
              <td className='tourssss'>
                <div className='edit' onClick={()=>handleEdit(item)}><BiPencil /></div>
    
                <div className='delete' onClick={() => handleConfirmDelete(item)}><FaTrash /></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showDeleteConfirm && (
        <div className="popup">
          <p>Are you sure you want to delete {tourToDelete._id}?</p>
          <button onClick={handleDeleteClick}>Ok</button>
          <button onClick={handleCancelDelete}>Cancel</button>
        </div>
      )}
    </div>
    </>
  )
}

export default DashboardTour