import { db } from './connect_to_db.js';


export const showexhibitions = (req, res) => {
    db.query({dateStrings: true, sql: 
        `SELECT * FROM exhibitions`}, (err, data) => {
        if (err) {console.log(err);} 
        else {res.json(data);};
    });
};
export const searchexhibitionsbyID = (req, res) => {
    db.query({dateStrings: true, sql: `SELECT exhibitions.*,collection.Namee,collection.src FROM mydb.exhibitions,mydb.collection WHERE exhibitions.id_exhibition = ? AND exhibitions.id_exhibition = collection.id_exhibition`},[req.params.id_exhibition], (err, data) => {
        if(err) {console.log(err);} 
        else {res.json(data);};
    });
};
export const searchexhibitions = (req, res) => {
    db.query({dateStrings: true, sql: `SELECT * FROM exhibitions WHERE exhibition_name LIKE '%${req.body.exhibition_name}%'`}, (err, data) => {
        if(err) {console.log(err);} 
        else {res.json(data);};
    });
};
export const searchexhibitions1 = (req, res) => {
    db.query({dateStrings: true, sql: `SELECT * FROM exhibitions WHERE start_date >= ? AND expiration_date <= ?`},[req.body.start_date, req.body.expiration_date], (err, data) => {
        if(err) {console.log(err);} 
        else {res.json(data);};
    });
};
export const updateexhibitions = (req, res) => {
    db.query("UPDATE exhibitions SET exhibition_name = ?,avatar = ?,decription = ?,start_date = ?,expiration_date= ? WHERE exhibition_name = ?",
    [req.body.exhibition_name,  req.body.avatar, req.body.decription, req.body.start_date, req.body.expiration_date, req.body.exhibition_name_key], (err,data) => {
        if (err) {console.log(err);} 
        else {res.send({message: `Данные о выставке изменены.`});};
    });
};

export const createexhibitions = (req, res) => {
    if (!req.body) return res.send({message: `Нет данных`});
    db.query("INSERT INTO exhibitions (exhibition_name, avatar, decription, start_date, expiration_date) VALUE (?,?,?,?,?)",
    [req.body.exhibition_name, req.body.avatar, req.body.decription, req.body.start_date, req.body.expiration_date], (err) => {
        if (err) {console.log(err);} 
        else {res.send({message: `выставка добавлена.`});};
    });
};

export const delexhibitions = (req, res) => {
    db.query("DELETE FROM mydb.exhibitions WHERE id_exhibition = ?", [req.body.id_exhibition], (err) => {
        if(err) {console.log(err);} 
        else{res.json({ message: "выставка удалена." });};
    })
};

