import './App.css';
import Homepage from './pages/Homepage'
import Profile from './pages/Profile'
import BookingPage from './pages/BookingPage'
import Records from './pages/Records'
import Navbar from './Components/Navbar/Navbar'
import HospitalSelector from './pages/HospitalSelector'
import MedicalHistory from './pages/MedicalHistory'

import Reminders from './pages/Reminders';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import GetCounselling from './pages/GetCounselling';


async function apiCall(){
  axios.get('http://localhost:8080/api')
    .then((response) => {
      console.log(response.data);
      console.log("suxesful");
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      console.error("fail");
    });
};

export default function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  
  useEffect(() => {
    console.log("useEffect is up");
    apiCall();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/records' element={<Records/>}/>
        <Route path='/bookingpage' element={<BookingPage/>}/>
        <Route path='/getcounselling' element={<HospitalSelector/>}/>
        <Route path='/medicalhistory' element={<MedicalHistory/>}/>
        <Route path='/reminders' element={<Reminders/>}/>
      </Routes>
    </div>
  );
}


