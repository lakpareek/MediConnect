import '../App.css';
import CurrentLoc from '../Components/AddressBar/CurrentLoc'; 
import ProfileInfo from '../Components/ProfilePage/ProfileInfo'; 
import ProfileOptions from '../Components/ProfilePage/ProfileOptions';
import List from '../Components/List/List.jsx'; 
import Navbar from '../Components/Navbar/Navbar.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function Reminders(){
    return(
        <div className='pl-[4%]'>
          <h2 className='font-bold text-xl'>Your Reminders</h2>
          <hr />
          <h2 className='font-bold text-lg'>Morning</h2>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Paracetamol" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Multivitamin Tabs" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          </FormGroup>
          <hr />
          <h2 className='font-bold text-lg'>Evening</h2>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Levoceterezine" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Omiprazole" />
          </FormGroup>
          <hr />
          <label for="cars">Add more:</label>
          <select name="cars" id="cars">
          <option value="Morning">Morning</option>
          <option value="Noon">Noon</option>
          <option value="Evening">Evening</option>
          <option value="Night">Night</option>
</select>
        </div>
    );
}