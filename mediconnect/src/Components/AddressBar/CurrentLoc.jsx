import '../../App.css';
import { GPSicon, DropDownButton } from '../../utils/Icons'
import axios from 'axios';
import { useEffect } from 'react';


function CurrentLoc(){
    return(
        <div>
            <div className='ps-[1%] pt-[1%] flex'>
            <GPSicon width="42" height="42"/>
            <button className='flex flex-col'>
            <div className='flex space-x-1'>
              <h2 className='float-start font-bold text-[20px]'>Shiva Enclave</h2>
              <DropDownButton height="25" width="25"/>
            </div>
              <p className=' text-[12px]'>Shiva Enclave, Pashchim Vihar, Delhi</p>
            </button>
            </div>
        </div>
    )
}

export default CurrentLoc;