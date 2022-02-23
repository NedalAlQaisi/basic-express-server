'use strict';

module.exports = (req, res, next) => {
    const query = req.query;
    const name = query.name;
    req.reqName = name;

    if (name) {
        next();
    }
    else {
        next('The name is not available');
    }
}