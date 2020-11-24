import express from 'express'
import {carController} from '../controllers'
import makeCallback from '../helpers/express-callback'

const router = express.Router();
//const Thing = require('../models/thing');
//const stuffController = require('../controllers/stuff')

router.get('/cars', makeCallback(carController.getAllCars));

export {router as carRoutes}