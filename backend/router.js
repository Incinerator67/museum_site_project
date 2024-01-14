import express from 'express';
import { showcustomer, searchcustomer,searchcustomer1,searchcustomerbyID, createcustomer,updatecustomer,delcustomer } from './db/customer.js';
import { showcollection,searchcollectionbyID, searchcollection,searchcollection1,searchcollection2,searchcollection3, createcollection, updatecollection,delcollection } from './db/collection.js';
import { showexcursions,searchexcursionsbyID,searchexcursions,searchexcursions1,createexcursions, updateexcursions, delexcursions } from './db/excursions.js';
import { showexhibitions,searchexhibitionsbyID,searchexhibitions, searchexhibitions1,createexhibitions,updateexhibitions, delexhibitions } from './db/exhibitions.js';
import { showsuccessful_purchase, createsuccessful_purchase,createsuccessful_purchase2,createsuccessful_purchase3 } from './db/successful_purchase.js';


const router = express.Router();

router.get("/showcustomer", showcustomer); // Показать всех клиентов
router.get("/showcustomer/:series_number", searchcustomerbyID); // Показать клиента по паспорту
router.post("/searchcustomer", searchcustomer); // Найти клиента по паспорту
router.post("/searchcustomer1", searchcustomer1); // Найти клиента по имени
router.post("/createcustomer", createcustomer); // Добавить нового клиента
router.post("/updatecustomer", updatecustomer); // Обновить данные клиента
router.post("/delcustomer", delcustomer); // Удалить данные клиента

router.get("/showcollection", showcollection); // Показать всю коллекцию
router.get("/showcollection/:id_collection", searchcollectionbyID); // Показать экземпляр по ID
router.post("/searchcollection", searchcollection); // Показать экземпляры по имени
router.post("/searchcollection1", searchcollection1); // Показать экземпляры по типу
router.post("/searchcollection2", searchcollection2); // Показать экземпляры по периоду
router.post("/searchcollection3", searchcollection3); // Показать экземпляры по типу и периоду
router.post("/createcollection", createcollection); // Добавить новый экземпляр
router.post("/updatecollection", updatecollection); // Обновить данные экземпляра
router.post("/delcollection", delcollection); // Удалить данные экземпляра

router.get("/showexcursions", showexcursions); // Показать все экскурсии
router.get("/showexcursions/:id_excursion", searchexcursionsbyID); // Показать экскурсию по ID
router.post("/searchexcursions", searchexcursions); // Показать экскурсии по имени
router.post("/searchexcursions1", searchexcursions1); // Показать экскурсии по дате
router.post("/createexcursions", createexcursions); // Добавить новую экскурсию
router.post("/updateexcursions", updateexcursions); // Обновить данные экскурсии
router.post("/delexcursions", delexcursions); // Удалить экскурсию

router.get("/showexhibitions", showexhibitions); // Показать все выставки
router.get("/showexhibitions/:id_exhibition", searchexhibitionsbyID); // Показать выставку по ID
router.post("/searchexhibitions", searchexhibitions); // Показать выставки по имени
router.post("/searchexhibitions1", searchexhibitions1); // Показать выставки по дате
router.post("/createexhibitions", createexhibitions); // Добавить новую выставку
router.post("/updateexhibitions", updateexhibitions); // Обновить данные выставки
router.post("/delexhibitions", delexhibitions); // Удалить выставку

router.get("/showsuccessful_purchase/:series_number", showsuccessful_purchase); // Показать  успешные покупки выставок
router.post("/createsuccessful_purchase", createsuccessful_purchase); // Добавить новую покупку в бд
router.post("/createsuccessful_purchase2", createsuccessful_purchase2); // Добавить новую покупку в бд
router.post("/createsuccessful_purchase3", createsuccessful_purchase3); // Добавить новую покупку в бд

export default router;