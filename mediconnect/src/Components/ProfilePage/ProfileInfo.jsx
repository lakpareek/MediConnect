import '../../App.css';
import { GPSicon, DropDownButton, Microphone, CounselIcon, AptmtIcon, ReminderIcon, ProfileIcon } from '../../utils/Icons'
import axios from 'axios';
import { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { DD2424 } from '@mui/material/colors'; 


export default function ProfileInfo(){
    return(
        <div>
        <div className='p-[4%] flex justify-between items-center'>
          <div>
            <h2><strong>John doe</strong></h2>
            <p><strong>Gender:</strong> Male</p>
            <p><strong>Age:</strong> 20</p>
            <p><strong>Blood Group:</strong> B+</p>
            
          </div>
          <div>
            <Avatar sx={{ bgcolor: '#DD2424', width: 90, height: 90 }}>JD</Avatar>
          </div>
        </div>
        <hr />
        </div>
        
    )
}