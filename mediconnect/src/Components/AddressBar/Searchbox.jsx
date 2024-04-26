import '../../App.css';
import { GPSicon, DropDownButton, Microphone, Magnifyingglass } from '../../utils/Icons'
import axios from 'axios';
import { useEffect, useState } from 'react';

function Searchbox(){
    const [formData, setFormData] = useState('');

    const handleChange = (e) => {
        setFormData(e.target.value);
    };

    const handleSubmit = async (e) => {
        try {
            const response = await axios.post('http://localhost:8080/submit', formData );
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className='p-[1%] w-full'>
            <div className='h-[12vw] border-[#D9D9D9] border-2 rounded-lg p-[2%]'>
                <form action="/Search" method="GET" onSubmit={handleSubmit} className=' flex justify-between items-center'>
                    <input 
                        type="text" 
                        name="searchbox" 
                        placeholder="Search for Hospitals, Doctors..." 
                        value={formData}
                        onChange={handleChange}
                        aria-placeholder="Type anything"
                        className="w-[70vw]"
                    />
                    <Microphone height="19" width="14" />
                    <button type="submit" className="ml-2">
                      <Magnifyingglass/>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Searchbox;
