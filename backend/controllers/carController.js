import * as carService from '../services/carService'

async function getAllCars(httpRequest,carsMock = null) {
    
    const cars = await carService.getAllCars();
    
    return {
        statusCode: 200,
        body: {
            success: true,
            message: "TEST",
            cars: (carsMock != null)? carsMock : cars,
        }
    }
} 

export {getAllCars}