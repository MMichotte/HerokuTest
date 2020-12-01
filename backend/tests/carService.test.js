import chai from 'chai'
import {expect} from 'chai'
import chaiHttp from 'chai-http'

import * as carService from '../services/carService'
import carsMock from './mocks/models/cars'
import carsTableMock from './mocks/db/carsTable'


describe('getAllCars', () => {
    it('should return all cars', async () => {
        let carsList = await carService.getAllCars(carsTableMock);
        expect(carsList.length).to.be.equal(2);
        for (let i in carsList) {
            expect(carsList[i].carBrand).to.eql(carsMock[i].carBrand);
            expect(carsList[i].carModel).to.eql(carsMock[i].carModel);
            expect(carsList[i].carColor).to.eql(carsMock[i].carColor);
            expect(Number(carsList[i].carPrice)).to.eql(carsMock[i].carPrice);
        }  
    });
});


//chai.use(chaiHttp);
/*
describe('Car API', () => {

    it('GET /api/cars should return status 200', async () => {
        let res = await chai 
            .request(server)
            .get('/api/cars')
            .send()

        expect(res.status).to.equal(200);
    });

});
*/
