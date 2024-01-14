import { db } from './connect_to_db.js';

export const showcustomer = (req, res) => {
    db.query({dateStrings: true, sql: 
        `SELECT * FROM customer`}, (err, data) => { 
        if (err) {console.log(err);} 
        else {res.json(data);};
    });
};

export const searchcustomer = (req, res) => {
    db.query({dateStrings: true, sql: `SELECT * FROM customer WHERE series_number LIKE '%${req.body.series_number}%'`}, (err, data) => {
        if(err) {console.log(err);} 
        else {res.json(data);};
    });
};
export const searchcustomer1 = (req, res) => {
    db.query({dateStrings: true, sql: `SELECT * FROM customer WHERE full_name LIKE '%${req.body.full_name}%'`}, (err, data) => {
        if(err) {console.log(err);} 
        else {res.json(data);};
    });
};
export const searchcustomerbyID = (req, res) => {
    db.query({dateStrings: true, sql: `SELECT * FROM customer WHERE series_number = ?`},[req.params.series_number], (err, data) => {
        if(err) {console.log(err);} 
        else {res.json(data);};
    });
};
export const createcustomer = (req, res) => {
    if (!req.body) return res.send({message: `Нет данных`});
    db.query("INSERT INTO customer (series_number, full_name, card_number, cvv, expiry_date) VALUE (?,?,?,?,?)",
    [req.body.series_number, req.body.full_name, req.body.card_number, req.body.cvv, req.body.expiry_date], (err) => {
        if (err) {console.log(err);} 
        else {res.send({message: `клиент добавлен.`});};
    });
};
export const updatecustomer = (req, res) => {
    db.query("UPDATE mydb.customer SET full_name = ?,card_number = ?,cvv = ?,expiry_date = ?,series_number = ? WHERE series_number = ?",
    [req.body.full_name, req.body.card_number, req.body.cvv, req.body.expiry_date, req.body.series_number, req.body.series_numberKey], (err,data) => {
        if (err) {console.log(err);} 
        else {res.send({message: `Данные об этом экземпляре изменены.`});};
    });
};
export const delcustomer = (req, res) => {
    db.query("DELETE FROM mydb.customer WHERE series_number = ?", [req.body.series_number], (err) => {
        if(err) {console.log(err);}
        else{res.json({ message: "клиент удален." });};
    })
};

