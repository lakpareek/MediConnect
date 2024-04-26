import '../App.css';
import CurrentLoc from '../Components/AddressBar/CurrentLoc'; 
import Searchbox from '../Components/AddressBar/Searchbox'; 
import List from '../Components/List/List.jsx'; 
import Navbar from '../Components/Navbar/Navbar.jsx';
import ShowMap from '../Components/Map/ShowMap'
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function HospitalSelector(){
    return(
        <div>
            <Navbar />
            <ShowMap/>
        </div>
    )
}