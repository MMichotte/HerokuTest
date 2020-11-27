import cars from '../models/car'

async function getAllCars(httpRequest,carsMock = null) {
    
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