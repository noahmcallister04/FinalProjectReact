import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Songs = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchAllSongs = async () => {
            try {
                const res = await axios.get("http://localhost:3500/songs");
                console.log(res.data);
                setSongs(res.data); // Update state with fetched songs
            } catch (err) {
                console.log(err);
            }
        };
        
        fetchAllSongs();
    }, []); // empty dependency array means this effect runs only once, similar to componentDidMount

    return (
        <div>
            <h1>Songs:</h1>
            {songs.map(song => (
                <div className="song" key={song.id}> {/* Adding key prop to each child element */}
                    <h2>{song.title}</h2>
                    <p>{song.artist}</p>
                </div>
            ))}
            <button><Link to ="/add"> Add new Song</Link></button>
        </div>

    );
    <button>Add new Song</button>
};

export default Songs;
