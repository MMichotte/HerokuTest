import Cars from '../database/models/cars'

async function getAllCars(cars = Cars){
    return cars.findAll();
}

export {getAllCars}