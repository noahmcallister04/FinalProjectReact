import express from "express"
import mysql from "mysql2"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"finalproject"
})

app.use(express.json())

app.get("/", (req, res)=>{
    res.json("hello this is the backend")
})

app.get("/songs", (req, res)=>{
    const q = "SELECT * FROM songs"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/songs", (req,res)=>{
    const q = "INSERT INTO books ('title','artist') VALUES (?)"
    const values = [
        req.body.title,
        req/body.artist,
    ];

    db.query(q, [values], (err,data)=>{
        if(err) return res.json(err)
        return res.json("Song has been created successfully!")   
    })
})

app.listen(3500, ()=>{
    console.log("Connected to backend!")
})