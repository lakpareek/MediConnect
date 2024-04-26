import '../../App.css';
import React from 'react';
import { GPSicon, Home, DropDownButton, Microphone, CounselIcon, AptmtIcon, ReminderIcon, ProfileIcon } from '../../utils/Icons'
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Navbar(){

    return(
        <div className='fixed bottom-0 h-[20vw] w-full bg-[#DD2424] flex justify-evenly items-center z-50'>
            <div className='absolute rounded-[20vw] w-[30vw] h-[30vw] bg-[#DD2424] -z-30'></div>
            <div className='flex flex-col justify-center' >
              <Link to ='/getcounselling'>
                <button >
                  <CounselIcon/>
                  <p className='text-[8px] w-[52px] text-center text-white'>Get Counselling</p>
                </button>
                </Link>
            </div>
            <div className='flex flex-col justify-center w-auto'>
              <Link to ='/bookingpage'>
               <button >
                  <AptmtIcon />
                  <p className='text-[8px] w-[52px] text-center text-white'>Book an appointment</p>
                </button>
              </Link>
            </div>

            <div className='flex flex-col justify-center w-auto relative bottom-[1.3vw]'>
              <Link to ='/'>
               <button >
                  <Home />
                  <p className='text-[8px] w-[70px] text-center text-white'>Home</p>
                </button>
              </Link>
            </div>
              
            <div className='flex flex-col justify-center items-center'>
              <Link to ='/reminders'>
                <button >
                  <ReminderIcon/>
                  <p className='text-[8px] w-[52px] text-center text-white'>Reminders</p>
                </button>
              </Link>
            </div>
            <div className='flex flex-col justify-center'>
              <Link to ='/profile'>
                <button>
                  <ProfileIcon/>
                  <p className='text-[8px] w-[52px] text-center text-white'>Profile</p>
                </button> 
              </Link>          
            </div>
        </div>
    );
}