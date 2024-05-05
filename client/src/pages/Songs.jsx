import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="songs">
        {songs.map((song) => (
          <div key={song.id} className="song">
            <h2>{song.title}</h2>
            <p>{song.artist}</p>
            <button className="delete" onClick={() => handleDelete(song.id)}>
              Delete
            </button>
            <button className="update">
              <Link
                to={`/update/${song.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link
          to="/add"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Add new Song
        </Link>
      </button>
    </div>
  );
};

export default Songs;
