const data = require('./data.json')

module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(data)
    },
    getSingleMovie: (req, res) => {
        const {id} = req.params
        const movie = data.find(el => +id === el.id)
        if (!movie) return res.sendStatus(404)
        res.status(200).send(movie)
    }
}