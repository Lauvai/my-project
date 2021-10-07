const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log("Sever is now listening at port 3000");
})

client.connect();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/BookApp', (req, res)=>{
    client.query(`Select * from books`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
client.connect();

app.get('/BookApp/:id', (req, res)=>{
    client.query(`Select * from books where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.post('/BookApp', (req, res)=> {
    const books = req.body;
    let insertQuery = `insert into books(id, BookName, BookPage, BookGenre, BookAuthor) 
                       values(${books.id}, '${books.BookName}', '${books.BookPage}', '${books.BookGenre}', '${books.BookAuthor}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.put('/BookApp/:id', (req, res)=> {
    let books = req.body;
    let updateQuery = `update books
                       set BookName = '${books.BookName}',
                       BookPage = '${books.BookPage}',
                       BookGenre = '${books.BookGenre}'
                       BookAuthor = '${books.BookAuthor}'
                       where id = ${books.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.delete('/BookApp/:id', (req, res)=> {
    let insertQuery = `delete from books where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

client.connect();