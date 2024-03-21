import React,{useState, useContext} from 'react'
import { Link } from 'react-router-dom';
// import Signup from '../components/Signup';
import SignupForm from './SignupForm';
import {FaTrash} from 'react-icons/fa'
import {BiPencil} from 'react-icons/bi'
import { useStateContext } from '../Context/AppContext';
import EditUser from './EditUser';
import Notiflix from 'notiflix';
import axios from 'axios';
const DashboardUser = () => {
  // const [users, setUsers] = useState([
  //   { id: 1, name: "John Doe", email: "test@example.com" },
  //   { id: 2, name: "James Andrew", email: "test@example.com" },
  //   { id: 3, name: "Agnes Drew", email: "test@example.com" },
  //   { id: 4, name: "Paul Gady", email: "test@example.com" },
  //   { id: 5, name: "Haryy Pooter", email: "test@example.com" },
  //   { id: 6, name: "James Green", email: "test@example.com" },
  // ]);
EditUser
  const {users} = useStateContext();

  const[model,setModal]=useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [userToDelete, setUserToDelete] = useState(null)
  const[edit,setEdit]=useState(false)

  const handleEdit = (userId) => {
    console.log(`Editing user with ID ${userId}`);
  };

    const handleDelete = (userId) => {
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
    };
    function openForm(){
      setModal(!model)
    }
    function Editing(){
      setEdit(!edit)
    }
    const handleConfirmDelete = async (user) => {
      try {
        Notiflix.Confirm.show(
          "confirm delete tour",
          "Do You want to delete",
          "yes",
          "No",
          async () => {
            const res = await axios.delete(
              `https://holiday-api-zj3a.onrender.com/api/v1/auth/users/delete/${user.email}`,
  
  
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
    const handleDeleteClick = (user) => {
      setUserToDelete(user);
      handleConfirmDelete();
    };
    const handleCancelDelete = () => {
      setShowDeleteConfirm(false)
    };
return (
  <div className='table-container'>
  <h1 className='titt'>User List</h1>
  <div  onClick={openForm}to="/Dashboard/signupForm">
    <button className="user">
      New User
    </button>
   </div>
   
   {model && <SignupForm openForm={openForm} />}

     <>
     <table className="user-table">
    <thead>
      <tr>
        {/* <th>ID</th> */}
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Location</th>
        <th >Actions</th>
      </tr>
    </thead>
  
    <tbody>
      {users?.map((user) => (
        <tr key={user._id}>
          {/* <td>{user.id}</td> */}
          <td>{user.fullNames}</td>
          <td>{user.email}</td>
          <td>{user.phoneNumber}</td>
          <td>{user.location}</td>


          <td className='btm'>
            {/* <div onClick={Editing} className="edit">
            {edit && <EditUser edit={edit} />}
           <BiPencil />
            </div> */}
            <div
              onClick={() => handleConfirmDelete(user)} className="delete" >
              <FaTrash />
              
            </div>
          </td>
        </tr>
      ))}
      
    </tbody>
    
  </table>
     </>
     {showDeleteConfirm && (
        <div className="popup">
          <p>Are you sure you want to delete {userToDelete.email}?</p>
          <button onClick={handleDeleteClick}>Ok</button>
          <button onClick={handleCancelDelete}>Cancel</button>
        </div>
      )}
   

</div>

  )
}

export default DashboardUser