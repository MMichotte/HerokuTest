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

async function getSearchedCars (httpRequest) {
  
  let brand = httpRequest.query.brand
  console.log(brand)

  return {
    statusCode: 200,
    body: {
      success: true,
      message: 'TEST 2',
    }
  }
}

export { getAllCars, getSearchedCars }
