import React from 'react'
import {FaTrash} from 'react-icons/fa'
import {BiPencil} from 'react-icons/bi'
import { useStateContext } from '../Context/AppContext'
import Book from '../components/Book'


const DashboardBook = () => {

  const {Books} = useStateContext()
  
  return (
    <>
<h1 className='booking_title'> Booking List</h1>
<table className='VICKY'>
 <tr>
    <th>TourId</th>
    <th>UserId</th>
    <th>IsPayment</th>
    <th>PaymentMethod</th>
    <th>Actions</th>
  </tr>
  {Books?.map((Bk,index) => (
  <tr key={index}>
          <td>{Bk.tourID}</td>
          <td>{Bk.UserID}</td>
         <td>{Bk.isPayed ? "Yes":"No"}</td>
         <td>{Bk.paymentMethod}</td>
         <td className='btm'>
            <div className="edit">
  
           <BiPencil />
            </div>
            <div className="delete" >
              <FaTrash />
              
            </div>
          </td>
         
       </tr>
           ))}
    </table>
    </>
  )
}

export default DashboardBook