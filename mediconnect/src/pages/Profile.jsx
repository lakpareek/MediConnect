import '../App.css';
import CurrentLoc from '../Components/AddressBar/CurrentLoc'; 
import ProfileInfo from '../Components/ProfilePage/ProfileInfo'; 
import ProfileOptions from '../Components/ProfilePage/ProfileOptions';
import List from '../Components/List/List.jsx'; 
import Navbar from '../Components/Navbar/Navbar.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Profile(){
    return(
        <div>
            <ProfileInfo/>
            
            <Link to ='/medicalhistory'>
              <ProfileOptions itemName="Your Medical History"/>
            </Link>
            <ProfileOptions itemName="Insurance"/>
            <ProfileOptions itemName="Appointment History"/>
            <ProfileOptions itemName="Edit Profile"/>
            <ProfileOptions itemName="Your Data"/>
            <Navbar />
        </div>
    )
}