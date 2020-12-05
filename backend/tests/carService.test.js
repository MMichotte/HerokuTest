import chai, { expect, it } from 'chai'

import chaiHttp from 'chai-http'

import * as carService from '../services/carService'
import dummyCars from './mocks/dummyCars'

describe('getAllCars', () => {
  it('should return all cars', async () => {
    const carsList = await carService.getAllCars()
    expect(carsList.length).to.be.equal(dummyCars.length)
    for (const i in carsList) {
      expect(carsList[i].carBrand).to.eql(dummyCars[i].carBrand)
      expect(carsList[i].carModel).to.eql(dummyCars[i].carModel)
      expect(carsList[i].carColor).to.eql(dummyCars[i].carColor)
      expect(Number(carsList[i].carPrice)).to.eql(dummyCars[i].carPrice)
    }
  })
})

// chai.use(chaiHttp);
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
