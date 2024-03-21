import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import Tour from './components/Tour';
import Layout from './components/Layout'
import Destination from './components/Destination'
import Contact from './components/Contact';
import Error from './components/Error'
import Login from './components/Login'
import Book from './components/Book'
import Signup from './components/Signup'
import Dashboard from './Dashboard/Dashboard'
import DashboardLayout from './Dashboard/DashboardLayout'
// import DashboardPlaces from './Dashboard/DashboardPlaces'
// import DashboardUpcoming from './Dashboard/DashboardUpcoming'
// import DashboardCamps from './Dashboard/DashboardTour'
import DashboardChart from './Dashboard/DashboardChart'
import DashboardTour from './Dashboard/DashboardTour'
import DashboardUser from './Dashboard/DashboardUser'
import SignupForm from './Dashboard/SignupForm'
import DashboardBook from './Dashboard/DashboardBook'
import DashboardContact from './Dashboard/DashboardContact'





function App() {
 return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='About' element={<About />} />
      <Route path='Tour' element={<Tour />} />
      <Route path='Book/:_id' element={<Book />} />
      <Route path='Blog' element={<Blog />} />
      <Route path='Destination' element={<Destination />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='*' element={<Error />} />
    
    </Route>
    <Route path='Login' element={<Login />} />
    <Route path='signup' element={<Signup />} />

    <Route path='/Dashboard' element={<DashboardLayout />} >
    <Route index element={<DashboardChart />} />
    {/* <Route path='Places' element={<DashboardPlaces />} /> */}
    <Route path='Tour' element={<DashboardTour />} />
    {/* <Route path='Upcoming' element={<DashboardUpcoming />} /> */}
    {/* <Route path='Camps' element={<DashboardCamps />} /> */}
    <Route path='User' element={<DashboardUser />} />
    <Route path='Booking' element={<DashboardBook />} />
    <Route path='Contact' element={<DashboardContact />} />
    <Route path='signup' element={<Signup />} />
    <Route path='signupForm' element={<SignupForm />} />
    {/* <Route path='Chart' element={<DashboardChart />} /> */}
    </Route>
    </Routes>
  </BrowserRouter>
 )
}

export default App
