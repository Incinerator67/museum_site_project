import mariadb from '../node_modules/mariadb/callback.js';

export const db = mariadb.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jojodeyk078',
    database: 'mydb'
});
/*
db.connect(function(err) {
    if(err) {return console.log(err);} 
    console.log("Подключение прошло успешно!");
    
});*/
