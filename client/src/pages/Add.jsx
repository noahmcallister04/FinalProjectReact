import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router

const Add = () => {
    const [song, setSong] = useState({
        title: "",
        artist: ""
    });

    const navigate = useNavigate(); // Fixed typo in variable name

    const handleChange = (e) => {
        setSong(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3500/songs", song);
            navigate("/"); // Corrected variable name and added forward slash
        } catch (err) {
            console.log(err);
        }
    };

    console.log(song);

    return (
        <div className='form'>
            <h2>Add New Song</h2>
            <input type="text" placeholder="title" onChange={handleChange} name="title" />
            <input type="text" placeholder="artist" onChange={handleChange} name="artist" />
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default Add;
