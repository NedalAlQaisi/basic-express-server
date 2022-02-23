`use strict`;

module.exports = (req, res) => {
    res.status(404).json({
        code: 404,
        message: `The page is not found`,
    })
}