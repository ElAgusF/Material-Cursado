const datos = {
    info: 'super secret'
}

export const datosController = (req, res) => {
    res.json({datos, user: req.user})
}