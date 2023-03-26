const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors({
    origin: '*'
}))

// create MYSQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'finances'
})

// connect to MySQL server
connection.connect(err => {
    if(err){
        console.log('Error connecting to MySQL server: ' + err.stack)
    }
    else{
        console.log('Connected to MySQL server as id ' + connection.threadId)
    }
})

app.get('/transactions', (req,res) => {
    const startingDate = req.query.startingDate
    const endingDate = req.query.endingDate
    const sql = "select * from transactions where date between ? and ?"
    const values = [startingDate, endingDate]
    connection.query(sql, values, (err, results) => {
        if(err){
            throw err
        }
        res.send(results)
    })
})

app.listen(8080)