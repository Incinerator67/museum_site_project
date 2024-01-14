import { db } from './connect_to_db.js';


export const showsuccessful_purchase = (req, res) => {
    db.query({dateStrings: true, sql: 
        `SELECT customer.full_name,successful_purchase.* FROM customer,successful_purchase WHERE customer.series_number = ? and successful_purchase.series_number = customer.series_number`},[req.params.series_number], (err, data) => { 
        if (err) {console.log(err);} 
        else {res.json(data);};
    });
};

export const createsuccessful_purchase = (req, res) => {
    if (!req.body) return res.send({message: `Нет данных`});
    db.query("INSERT INTO mydb.successful_purchase (series_number, id_exhibition,id_excursion, price) VALUE (?,?,NULL,?)",
    [req.body.series_number, req.body.id_exhibition, req.body.price], (err) => {
        if (err) {console.log(err);} 
        else{res.send({message: `успешная покупка добавлена.`});};
    });
};
export const createsuccessful_purchase2 = (req, res) => {
    if (!req.body) return res.send({message: `Нет данных`});
    db.query("INSERT INTO mydb.successful_purchase (series_number,id_exhibition, id_excursion, price) VALUE (?,NULL,?,?)",
    [req.body.series_number,  req.body.id_excursion, req.body.price], (err) => {
        if (err) {console.log(err);} 
        else{res.send({message: `успешная покупка добавлена.`});};
    });
};
export const createsuccessful_purchase3 = (req, res) => {
    if (!req.body) return res.send({message: `Нет данных`});
    db.query("INSERT INTO mydb.successful_purchase (series_number,id_exhibition, id_excursion, price) VALUE (?,?,?,?)",
    [req.body.series_number,req.body.id_exhibition,  req.body.id_excursion, req.body.price], (err) => {
        if (err) {console.log(err);} 
        else{res.send({message: `успешная покупка добавлена.`});};
    });
};

