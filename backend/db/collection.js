import { db } from './connect_to_db.js';


export const showcollection = (req, res) => {
    db.query({dateStrings: true, sql: `SELECT * FROM collection`}, (err, data) => {
        if (err) {console.log(err);} 
        else {res.json(data);};
    });
};
export const searchcollectionbyID = (req, res) => {
    db.query({dateStrings: true, sql: "SELECT * FROM mydb.collection WHERE id_collection = ?"},[req.params.id_collection], (err, data) => {
        if(err) {console.log(err);} 
        else {res.json(data);};
    });
};
export const updatecollection = (req, res) => {
    db.query("UPDATE mydb.collection SET Namee = ?,src = ?,collection_type = ?,period = ?,author = ?,decription = ?,id_exhibition = ?,id_excursion = ? WHERE id_collection = ?",
    [req.body.Namee, req.body.src, req.body.collection_type, req.body.period, req.body.author, req.body.decription,  req.body.id_exhibition, req.body.id_excursion, req.body.id_collection], (err,data) => {
        if (err) {console.log(err);} 
        else {res.send({message: `Данные об этом экземпляре изменены.`});};
    });
};

export const createcollection = (req, res) => {
    if (!req.body) return res.send({message: `Нет данных`});
    db.query("INSERT INTO mydb.collection (Namee, src, collection_type, period, author, decription,id_exhibition,id_excursion) VALUE (?,?,?,?,?,?,?,?)",
    [req.body.Namee, req.body.src, req.body.collection_type, req.body.period, req.body.author, req.body.decription,req.body.id_exhibition,req.body.id_excursion], (err) => {
        if (err) {console.log(err);} 
        else {res.send({message: `экземпляр добавлен в коллецию.`});};
    });
};

export const searchcollection = (req, res) => {
    db.query({dateStrings: true, sql: `SELECT * FROM mydb.collection WHERE Namee LIKE '%${req.body.str}%'`}, (err, data) => {
        if(err) {console.log(err);} 
        else {res.json(data);};
    });
};
export const searchcollection1 = (req, res) => {
    db.query({dateStrings: true, sql: `SELECT * FROM collection WHERE collection_type = ?`},[req.body.collection_type], (err, data) => {
        if(err) {console.log(err);} 
        else {res.json(data);};
    });
};
export const searchcollection2 = (req, res) => {
    db.query({dateStrings: true, sql: `SELECT * FROM collection WHERE period = ?`},[req.body.period],(err, data) => {
        if(err) {console.log(err);} 
        else {res.json(data);};
    });
};
export const searchcollection3 = (req, res) => {
    db.query({dateStrings: true, sql: `SELECT * FROM collection WHERE period = ? AND collection_type = ?`},[req.body.period, req.body.collection_type], (err, data) => {
        if(err) {console.log(err);} 
        else {res.json(data);};
    });
};
export const searchcollection4 = (req, res) => {
    db.query({dateStrings: true, sql: `SELECT * FROM collection WHERE id_exhibition = ?`},[req.body.id_exhibition], (err, data) => {
        if(err) {console.log(err);} 
        else {res.json(data);};
    });
};
export const searchcollection5 = (req, res) => {
    db.query({dateStrings: true, sql: `SELECT * FROM collection WHERE id_excursion = ?`},[req.body.id_excursion], (err, data) => {
        if(err) {console.log(err);} 
        else {res.json(data);};
    });
};
export const delcollection = (req, res) => {
    db.query("DELETE FROM mydb.collection WHERE id_collection = ?", [req.body.id_collection], (err) => {
        if(err) {console.log(err);} 
        else{res.json({ message: "Экспонат удален." });};
    })
};