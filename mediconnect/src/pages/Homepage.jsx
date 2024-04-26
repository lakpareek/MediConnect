import '../App.css';
import CurrentLoc from '../Components/AddressBar/CurrentLoc'; 
import Searchbox from '../Components/AddressBar/Searchbox'; 
import List from '../Components/List/List.jsx'; 
import Navbar from '../Components/Navbar/Navbar.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Homepage() {
    return (
      <div className="">
        <CurrentLoc />
        <Searchbox/>
        <List listtitle="Explore" />
        <List listtitle="Offers"/>
        <Navbar />
      </div>
    );
  }