import chai from 'chai'
import {expect} from 'chai'
import chaiHttp from 'chai-http'

import server from '../server';
import carController from '../controllers/carController'
import carsMock from './mocks/car'


chai.use(chaiHttp);

describe('Car API', () => {

    it('GET /api/cars should return status 200', async () => {
        let res = await chai 
            .request(server)
            .get('/api/cars')
            .send()

        expect(res.status).to.equal(200);
    });

    it('getAllCars should return a list of cars', () => {
        return carController.getAllCars(carsMock).then(result => {
            expect(result.statusCode).to.equal(200);
            expect(result.body.success).to.be.true;
            expect(result.body.message).to.be.equal('TEST2');
            expect(result.body.cars).to.eql(carsMock);
        })
    });

});

