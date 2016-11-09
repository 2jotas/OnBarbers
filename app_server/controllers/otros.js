/* GET 'acerca de' page */
module.exports.nosotros = function(req, res){
  res.render('generica', { 
    title: 'Nosotros - Acerca de OnBarberos',
      pageHeader: {
        title: 'Nosotros'
      },
      contenido: 'OnBarbers fue creada con dos propósitos: ayudar a la gente, encontrar una barbería cercana, con información sobre sus servicios, horarios, promociones e instalaciones y ayudar a los dueños de las barberías a dar a conocer sus negocios.\n\n'
  });
};
