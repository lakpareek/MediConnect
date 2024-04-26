import '../App.css';
import CurrentLoc from '../Components/AddressBar/CurrentLoc'; 
import Searchbox from '../Components/AddressBar/Searchbox'; 
import List from '../Components/List/List.jsx'; 
import Navbar from '../Components/Navbar/Navbar.jsx';
import axios from 'axios';

import { useEffect, useState } from 'react';

export default function BookingPage(){
    return(
        <div>
            <Navbar/>
            <div>
                <div className="grid grid-rows-[1fr,auto] bg-[#D9D9D9] h-[80vw]">
                    <div>{/*img here*/}</div>
                    <div className="self-end pl-[2%] text-3xl">Book an Appointment at [Hospital Name]</div>
                </div>
                <p>Hospitals[0].beds</p>
                <p>Hospitals[0].doctors</p>
            </div>
        </div>

    )
}
