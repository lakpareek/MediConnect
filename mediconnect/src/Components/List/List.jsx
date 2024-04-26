import '../../App.css';
import Card from './Card';
import { GPSicon, DropDownButton, Microphone } from '../../utils/Icons'
import axios from 'axios';
import { useEffect } from 'react';

function List(props){
    return(
        <div className='pl-[1%]'>
            <h2 className='text-[32px] font-semibold'>{props.listtitle}</h2>
            <div className='flex space-x-[3%] overflow-scroll no-scrollbar'>
              <Card heading="Regular Medical checkup plans best suited for you" text="Get Monthly, Quarterly or Yearly plans" />
              <Card heading="Card 2" text="This is the text for Card 2" />
              <Card heading="Card 3" text="This is the text for Card 3" />
              <Card heading="Card 4" text="This is the text for Card 4" />
            </div>
        </div>
    )
}
export default List;