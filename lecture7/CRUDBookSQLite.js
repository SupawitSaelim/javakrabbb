const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();

const db = new sqlite3.Database('./lecture7/Database/Boook.sqlite');

app.use(express.json());

db.run('CREATE TABLE IF NOT EXISTS Book (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, author TEXT)');

app.get('/books', (req, res) => {
    db.all('SELECT * FROM Book', (err, rows) => {
        if (err) {
            res.status(500).send(err, rows);
        }
        res.json(rows);
    });
});

app.get('/books/:id', (req, res) => {
    db.get('SELECT * FROM Book WHERE id = ?', req.params.id, (err, row) => {
        if (err) {
            res.status(500).send(err, row);
        } else {
            if (!row) {
                res.status(404).send('Book Not Found');
            }else {
                res.json(row);
            }
        }
        
    });
});

app.post('/books', (req, res) => {
    const book = req.body;
    db.run('INSERT INTO Book (title, author) VALUES (?, ?)', book.title, book.author, function(err) {
        if (err) {
            res.status(500).send(err);
        }else {
            book.id = this.lastID;
            res.send(book);
        }
    });
});

app.put('/books/:id', (req, res) => {
    const book = req.body;
    db.run('UPDATE Book SET title = ?, author = ? WHERE id = ?', book.title, book.author, req.params.id, function(err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(book);
        }
    });
});

app.delete('/books/:id', (req, res) => {
    db.run('DELETE FROM Book WHERE id = ?', req.params.id, function(err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send({});
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));