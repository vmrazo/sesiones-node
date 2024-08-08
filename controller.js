
export const getUser = (req, res) =>{
    req.session.usuario = req.params.nombre;
    req.session.email = req.params.email;
    req.session.visitas = req.session.visitas ? ++req.session.visitas : 1;
    res.send(`El usuario ${req.session.usuario} con email ${req.session.email} ha visitado ${req.session.visitas} veces`);
    console.log(req.session);
}


export const logout = (req,res) =>{
    req.session.destroy();
    console.log('sesion terminada');
    return res.status(200).json({
        message: 'Session finished'
    })

}
