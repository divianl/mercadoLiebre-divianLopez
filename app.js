const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views/home.html'));
})

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views/login.html'));
})

app.get('/register', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views/register.html'));
})


//Levatar el servidor
const port = process.env.PORT || 3001;
app.listen(port, ()=>console.log('Servidor corriendo en el puerto $(port)'));  

/*
app.listen(3004, ()=>{
    console.log("Servidor corriendo en puerto 3004");
})*/