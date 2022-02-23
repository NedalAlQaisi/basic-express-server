`use strict`;

const validator = require('../src/middleware/validator.js');

describe('Test validator', () => {
    req = { query: { name: undefined } };
    res = {};
    next = jest.fn();

    it('Test name validation', () => {
        validator(req, res, next);
        expect(next).toHaveBeenCalledWith('The name is not available')
    })

})