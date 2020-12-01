import dbConnection from '../../../config/database';
import carsMock from '../models/cars'

const carsTableMock = dbConnection.define('cars');

let carsList = [];

for (let car of carsMock)
{
  carsList.push(
    carsTableMock.build({
      'carId': car.carId,
      'carBrand': car.carBrand,
      'carModel': car.carModel,
      'carColor': car.carColor,
      'carPrice': car.carPrice,
    })
  )
}

carsTableMock.$queueResult(
  carsList
);

export default carsTableMock
