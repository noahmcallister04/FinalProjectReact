import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Songs = () => {
    useEffect(() => {
        const fetchAllSongs = async () => {
            try {
                const res = await axios.get("http://localhost:3500/songs");
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        };
        
        fetchAllSongs();
    }, []); // empty dependency array means this effect runs only once, similar to componentDidMount
};

export default Songs