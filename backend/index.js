import express from "express"
import mysql from "mysql2"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"finalproject"
})

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

app.listen(3500, ()=>{
    console.log("Connected to backend!")
})