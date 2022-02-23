`use strict`;

const logger = require('../src/middleware/logger.js')

describe('Test logger', () => {

    let consoleSpy;
    let req = { method: 'GET', path: '/person' };
    let res = {};
    let next = jest.fn();

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation()
        console.log(consoleSpy);
    })

    afterAll(() => {
        consoleSpy.mockRestore()
    })

    it('Test log', () => {
        logger(req, res, next)
        expect(consoleSpy).toHaveBeenCalledWith(`request method: ${req.method}`)
        expect(consoleSpy).toHaveBeenCalledWith(`path: ${req.path}`)

    })

    it('Test next', () => {
        logger(req, res, next);
        expect(next).toHaveBeenCalled()
    })

})