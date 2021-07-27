exports.createMovie = (req, res) => {
    try {
        const movie = {
            title: req.body.title,
            watched: true,
            user: req.body.user,
            token: req.headers.autorization
        };
        res.status(200).send({ movie:movie, message: "Movie succesfully created" })
    } catch (error) {
        res.status(500).send({ message: "No movie created" })
    }
};
