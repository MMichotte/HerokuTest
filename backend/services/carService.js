import Cars from '../database/models/cars'

async function getAllCars () {
  return Cars.findAll()
}

export { getAllCars }
