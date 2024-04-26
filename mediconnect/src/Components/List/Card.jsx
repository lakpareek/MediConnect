import '../../App.css';
import { GPSicon, DropDownButton, Microphone, Arrow } from '../../utils/Icons'
import axios from 'axios';
import { useEffect } from 'react';

function Card(props){
    return(
        <div>
            <div className='bg-[#D9D9D9] h-[32vw] w-[60vw] rounded-lg'>
            </div>
            <h2 className='text-[20px] font-semibold'>{props.heading}</h2>
            <div className=''>
              <p className='text-[20px] font-medium' >{props.text} <Arrow width="18" height="15"/> </p>
            </div>
            
        </div>
    );
}

export default Card;