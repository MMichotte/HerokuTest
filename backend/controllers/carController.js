import cars from '../models/car'

function carControllerFactory() {
    return Object.freeze({
        getAllCars,
    });

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

};

const carController = carControllerFactory();
export default carController