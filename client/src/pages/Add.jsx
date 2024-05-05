import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Add = () => {
    const [song, setSong] = useState({ title: "", artist: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSong(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3500/songs", song);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='container mt-3'>
            <h2>Add New Song</h2>
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Title" name="title" value={song.title} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Artist" name="artist" value={song.artist} onChange={handleChange} />
                </div>
                <button className="btn btn-primary" onClick={handleClick}>Add</button>
            </form>
        </div>
    );
};

export default Add;
