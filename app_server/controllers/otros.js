/* GET 'acerca de' page */
module.exports.acercade = function(req, res){
  res.render('index', { title: 'Acerca de' });
};
