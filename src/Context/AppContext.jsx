import React, { useContext, useEffect } from 'react'
import { createContext, useState } from 'react'
import axios from 'axios'
import { useMutation, useQuery } from 'react-query';


 const MyContext = createContext();

export const AppContext = ({ children }) => {

    const [users, setUsers] = useState([])
    const [Contacts, setContacts] = useState([])
    const [Books, setBooks] = useState([])


    useEffect(() => {
        const fetchuser = async () => {
            const response = await axios.get("https://holiday-api-zj3a.onrender.com/api/v1/auth/users")
            setUsers(response.data)
            // console.log(response.data);
        }
        fetchuser()
    },
        []);


    const{data:tours} = useQuery({
        queryKey:["tours"],
        queryFn:async()=>{
            const res= await axios.get('https://holiday-api-zj3a.onrender.com/api/v1/tour/all')
            console.log(res.data);
            return res.data
        }
    })  


        const loginMutation =useMutation({
            mutationFn: async (formData) => {
                const response = await axios.post(
                    "https://holiday-api-zj3a.onrender.com/api/v1/auth/login", 
                    formData
                );
                return response.formData;
            },
            onSuccess: (formData)=>{
            alert("Login Successfull")
            window.location.href= "/dashboard"
            },
        })

        const SignupMutation = useMutation({
            mutationFn: async(data) =>{
                const newuser = await axios.post("https://holiday-api-zj3a.onrender.com/api/v1/auth/signup", 
                data);
            return newuser.data;
            },
            onSuccess: (data) =>{
                console.log(data)
                alert ("registered Successfully");
                localStorage.setItem("isRegister", JSON.stringify(data))
                window.location.href = "/login"
              
            },
        })
            
        const Contact = useMutation({
            mutationFn: async(data) =>{
                const res = await axios.post("https://holiday-api-zj3a.onrender.com/api/v1/cont/contact", 
                data);
            return res.data;
            },
            // catching error
            onError:(error)=>{
                console.log(error.response.data.message)
                alert(error)
            },
            onSuccess: (data) =>{
                console.log(data)
                alert ("send successfully");
                localStorage.setItem("isRegister", JSON.stringify(data))
                 window.location.reload()
              
            }, 
        });
        
        useEffect(() => {
            const fetchContact = async () => {
                const response = await axios.get("https://holiday-api-zj3a.onrender.com/api/v1/cont/contact/all")
                setContacts(response.data)
                console.log(response.data);
            } 
            fetchContact()
        },
            []);

            useEffect(() => {
                const fetchBooks = async () => {
                    const response = await axios.get("https://holiday-api-zj3a.onrender.com/api/v1/booking/all")
                    setBooks(response.data)
                    console.log(response.data);
                } 
                fetchBooks()
            },
                []);


    return (
        <MyContext.Provider value={{ users,Contact, loginMutation, SignupMutation,tours,Contacts,setContacts,Books,setBooks}}>
            {children}
        </MyContext.Provider>

    )
}

export const useStateContext = () => useContext(MyContext)