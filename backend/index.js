import express from "express"
import mysql from "mysql2"
import cors from "cors"


const app = express();
const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,  // Ensure this is not hardcoded to 127.0.0.1
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
});


const db = mysql.createConnection({
    host: "db",
    user: "root",
    password: "root",
    database: "finalproject",
    port: 3306
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json("hello this is the backend");
});

connection.connect(err => {
    if (err) {
      console.error('Failed to connect to database:', err);
      return;
    }
    console.log('Successfully connected to the database.');
  });
  
  connection.end();

  app.get("/songs", (req, res) => {
    const q = "SELECT * FROM songs";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post("/songs", (req, res) => {
    const q = "INSERT INTO songs (title, artist) VALUES (?, ?)";
    const values = [
        req.body.title,
        req.body.artist, // Corrected typo: changed "req/body.artist" to "req.body.artist"
    ];

    db.query(q, values, (err, data) => {
        if (err) return res.json(err);
        return res.json("Song has been created successfully!");
    });
});

app.get("/songs", (req, res) => {
    const q = "SELECT * FROM songs WHERE title IS NOT NULL AND artist IS NOT NULL";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.delete("/songs/:id", (req, res)=>{
    const songId = req.params.id;
    const q = "DELETE FROM songs WHERE id = ?"
    
    db.query(q,[songId], (err,data)=>{
        if (err) return res.json(err);
        return res.json("Song has been deleted successfully!");        
    })
})

app.listen(3500, () => {
    console.log("Connected to backend!");
});

function connectWithRetry() {
    connection.connect(err => {
      if (err) {
        console.error('Failed to connect to MySQL - retrying in 5 sec', err);
        setTimeout(connectWithRetry, 5000);
      } else {
        console.log('Successfully connected to MySQL');
      }
    });
  }
  
  connectWithRetry();
  