import express from 'express'
import * as carController from '../controllers/carController'
import makeCallback from '../helpers/express-callback'

const router = express.Router();

router.get('/cars', makeCallback(carController.getAllCars));

export {router as carRoutes}