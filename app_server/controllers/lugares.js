/* GET 'inicio' page */
/*module.exports.inicioLista es el nombre de la ruta en app_server/routes/index.js */
/*lista-lugares: es la view app_server/views/lista-lugares.jade */
module.exports.inicioLista = function(req, res){
  res.render('lista-lugares', { title: 'Inicio' });
};

/* GET 'info del lugar' page */
module.exports.infoLugar = function(req, res){
  res.render('info-lugar', { title: 'Notas del sitio' });
};

/* GET 'agregar una nota del sitio' page */
module.exports.addNota = function(req, res){
  res.render('form-info-lugar', { title: 'Agregar una nota' });
};
