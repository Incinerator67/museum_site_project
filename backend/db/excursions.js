import { db } from './connect_to_db.js';


export const showexcursions = (req, res) => {
    db.query({dateStrings: true, sql: 
        `SELECT * FROM excursions`}, (err, data) => {
        if (err) {console.log(err);} 
        else {res.json(data);};
    });
};
export const searchexcursionsbyID = (req, res) => {
    db.query({dateStrings: true, sql: `SELECT excursions.*,collection.Namee,collection.src FROM excursions,collection WHERE excursions.id_excursion = ? AND excursions.id_excursion = collection.id_excursion`},[req.params.id_excursion], (err, data) => {
        if(err) {console.log(err);} 
        else {res.json(data);};
    });
};
export const searchexcursions = (req, res) => {
    db.query({dateStrings: true, sql: `SELECT * FROM excursions WHERE excursion_name LIKE '%${req.body.excursion_name}%'`}, (err, data) => {
        if(err) {console.log(err);} 
        else {res.json(data);};
    });
};
export const searchexcursions1 = (req, res) => {
    db.query({dateStrings: true, sql: `SELECT excursion_name,avatar,tour_date FROM mydb.excursions WHERE tour_date >= '%${req.dateStrings.tour_date}%' AND tour_date <= '%${req.dateStrings.tour_date2}%'`}, (err, data) => {
        if(err) {console.log(err);} 
        else {res.json(data);};
    });
};

export const updateexcursions = (req, res) => {
    db.query("UPDATE excursions SET excursion_name = ?,avatar = ?,decription = ?,tour_date = ?,start_time = ?,end_time = ? WHERE excursion_name = ?",
    [req.body.excursion_name,  req.body.avatar, req.body.decription, req.body.tour_date,req.body.start_time, req.body.end_time, req.body.excursion_name_key], (err,data) => {
        if (err) {console.log(err);} 
        else {res.send({message: `Данные об экскурсии изменены.`});};
    });
};

export const createexcursions = (req, res) => {
    if (!req.body) return res.send({message: `Нет данных`});
    db.query("INSERT INTO excursions (excursion_name, avatar, decription, tour_date, start_time, end_time) VALUE (?,?,?,?,?,?)",
    [req.body.excursion_name, req.body.avatar, req.body.decription, req.body.tour_date, req.body.start_time, req.body.end_time], (err) => {
        if (err) {console.log(err);} 
        else {
            res.send({message: `экскурсия добавлена.`});
        };
    });
};

export const delexcursions = (req, res) => {
    db.query("DELETE FROM mydb.excursions WHERE id_excursion = ?", [req.body.id_excursion], (err) => {
        if(err) {console.log(err);} 
        else{res.json({ message: "экскурсия удалена." });};
    })
};

