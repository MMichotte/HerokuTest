import carControllerFactory from './carController';

const carController = carControllerFactory();


const controllers = Object.freeze({
    carController,
});

export default controllers
export {carController}
