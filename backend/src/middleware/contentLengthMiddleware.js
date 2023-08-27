const middlewareContentLengthAreas = (req, res, next,) => {
    // console.log(req.headers['content-length']);
    req.headers['content-length'] > 65 ?
        res.status(413).send({
            status: 413,
            message: "El tamaño de la informacion enviada es incorrecta"
        }) : next()
};

const middlewareContentLengthCategorias = (req, res, next,) => {
    // console.log(req.headers['content-length']);
    req.headers['content-length'] > 69 ?
        res.status(413).send({
            status: 413,
            message: "El tamaño de la informacion enviada es incorrecta"
        }) : next()
};

const middlewareContentLengthEquipo = (req, res, next,) => {
    // console.log(req.headers['content-length']);
    req.headers['content-length'] > 90 ?
        res.status(413).send({
            status: 413,
            message: "El tamaño de la informacion enviada es incorrecta"
        }) : next()
};

const middlewareContentLengthInsidencias = (req, res, next,) => {
    console.log(req.headers['content-length']);
    req.headers['content-length'] > 450 ?
        res.status(413).send({
            status: 413,
            message: "El tamaño de la informacion enviada es incorrecta"
        }) : next()
};


export {
    middlewareContentLengthAreas,
    middlewareContentLengthCategorias,
    middlewareContentLengthEquipo,
    middlewareContentLengthInsidencias
}