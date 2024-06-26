import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



const Songs = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchAllSongs = async () => {
            try {
                const res = await axios.get("http://localhost:3500/songs");
                setSongs(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllSongs();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3500/songs/${id}`);
            setSongs(songs.filter(song => song.id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container mt-3">
            <h2>Songs List</h2>
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map(song => (
                        <tr key={song.id}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(song.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/add" className="btn btn-success">Add New Song</Link>
        </div>
    );
};

export default Songs;
