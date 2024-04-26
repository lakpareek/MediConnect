import '../../App.css';
import { Arrow, GPSicon, DropDownButton, Microphone, CounselIcon, AptmtIcon, ReminderIcon, ProfileIcon } from '../../utils/Icons'
import axios from 'axios';
import { useEffect } from 'react';


export default function ProfileOptions(props){
    return(
        <div className='h-[2vw] p-[4%]'>
          <div className='flex items-center'>
            <p className='pl-[2%] font-medium'>{props.itemName}</p>
            <div className='pl-[1%]'><Arrow width="12" height="14"/></div>
            
          </div>
        <hr />
        </div>
    )
}