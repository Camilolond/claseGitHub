const comicsController = {}

comicsController.getComics = (req, res) => {
    req.json({message: "Hola"})
}

module.exports = comicsController