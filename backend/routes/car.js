import express from 'express'
import {carController} from '../controllers'
import makeCallback from '../helpers/express-callback'

const router = express.Router();

router.get('/cars', makeCallback(carController.getAllCars));

export {router as carRoutes}