import cars from '../models/car'

export default function carControllerFactory() {
    return Object.freeze({
        getAllCars,
    });

    async function getAllCars(httpRequest) {
        return {
            statusCode: 200,
            body: {
                success: true,
                message: "TEST",
                cars: cars,
            }
        }
    } 

};