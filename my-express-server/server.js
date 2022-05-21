const express = require ('express');

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/about", (req, res) => {
    res.send("My name is Achmad Solehuddin");
});

app.get("/contact", (req, res) => {
    res.send("Contact me at: achmads@upnvj.ac.id");
});
app.listen(port, ()=> {
    console.log(`App has started listening at http://localhost:${port}`);
});