const middlewareContentLengthAreas = (req, res, next,) => {
    console.log(req.headers['content-length']);
    req.headers['content-length'] > 65 ?
        res.status(413).send({
            status: 413,
            message: "El tamaño de la informacion enviada es incorrecta"
        }) : next()
}
export{
    middlewareContentLengthAreas
}