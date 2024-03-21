import React from 'react'
import './DashboardContact.css'
// import Contact from '../components/Contact'
import { useStateContext } from '../Context/AppContext'

const DashboardContact = () => {
  const { Contacts} = useStateContext();
  return (
<>
<h1 className='contactheader'>Contact List</h1>
<table className='VICKY'>
  <tr>
    <th>fullNames</th>
    <th>Email</th>
    <th>phoneNumber</th>
    <th>Services</th>
    <th>Message</th>
  </tr>

    {Contacts?.map((cont,index) => (
        <tr key={index}>
          <td>{cont.fullName}</td>
         <td>{cont.email}</td>
         <td>{cont.phoneNumber}</td>
         <td>{cont.service}</td>
         <td>{cont.message}</td>
       </tr>
    ))}
</table>
</>


  )
}

export default DashboardContact