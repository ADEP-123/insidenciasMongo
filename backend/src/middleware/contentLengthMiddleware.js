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
    // console.log(req.headers['content-length']);
    req.headers['content-length'] > 450 ?
        res.status(413).send({
            status: 413,
            message: "El tamaño de la informacion enviada es incorrecta"
        }) : next()
};

const middlewareContentLengthLugares = (req, res, next,) => {
    // console.log(req.headers['content-length']);
    req.headers['content-length'] > 72 ?
        res.status(413).send({
            status: 413,
            message: "El tamaño de la informacion enviada es incorrecta"
        }) : next()
};

const middlewareContentLengthTipoEquipo = (req, res, next,) => {
    console.log(req.headers['content-length']);
    req.headers['content-length'] > 77 ?
        res.status(413).send({
            status: 413,
            message: "El tamaño de la informacion enviada es incorrecta"
        }) : next()
};

const middlewareContentLengthTipos= (req, res, next,) => {
    console.log(req.headers['content-length']);
    req.headers['content-length'] > 70 ?
        res.status(413).send({
            status: 413,
            message: "El tamaño de la informacion enviada es incorrecta"
        }) : next()
};


export {
    middlewareContentLengthAreas,
    middlewareContentLengthCategorias,
    middlewareContentLengthEquipo,
    middlewareContentLengthInsidencias,
    middlewareContentLengthLugares,
    middlewareContentLengthTipoEquipo,
    middlewareContentLengthTipos
}