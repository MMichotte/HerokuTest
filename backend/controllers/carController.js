import * as carService from '../services/carService'

async function getAllCars (httpRequest) {
  const cars = await carService.getAllCars()

  return {
    statusCode: 200,
    body: {
      success: true,
      message: 'TEST',
      cars: cars
    }
  }
}

export { getAllCars }
