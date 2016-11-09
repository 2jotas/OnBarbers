/* GET 'inicio' page */
/*module.exports.inicioLista es el nombre de la ruta en app_server/routes/index.js */
/*lista-lugares: es la view app_server/views/lista-lugares.jade */
module.exports.inicioLista = function(req, res){
  res.render('lista-sitios', { 
    title: 'OnBarbers - Encuentra tu barbería más cercana',
      pageHeader: {
        title: 'OnBarbers',
        strapline: 'Encuentra barberías cercanas a ti',
      },
      sidebar: 'Buscando una barbería cerca de tu zona? BarbersOn te ayudará a encontrar barberías a tu alrededor desde cualquier sitio en Cali. La quieres con WiFi, aire acondicionado, café o cerveza? Con BarbersOn podrás saber qué servicios ofrecen, precios, horarios, y escojer exactamente la que estás buscando.',
      negocios:[{
        name: 'Schorem Barber Shop',
        direccion: 'Cra 44 # 10 - 100, Sur',
        rating: 4,
        vagregados: ['Aire', 'Café', 'WiFi', 'Juegos'],
        distancia: '100m'
      },{
        name: 'Desvanecidos 316',
        direccion: 'Calle 16 # 42 - 07, Colón',
        rating: 5,
        vagregados: ['WiFi', 'Café', 'Juegos', 'Cerveza'],
        distancia: '87m'
      },{
        name: 'Ebanos',
        direccion: 'Calle 14 # 37A - 05, Colón',
        rating: 3,
        vagregados: ['Aire'],
        distancia: '25m'
      }]
    });
};

/* GET 'info del lugar' page */
module.exports.infoSitio = function(req, res){
  res.render('info-sitio', { 
    title: 'Dato de la Schorem Barber Shop',
    pageHeader: {title: 'Schorem Barber Shop'},
    sidebar: {
      context: 'Es parte de nuestra base de datos, porque cumple con los estándares de bioseguridad.',
      callToAction: 'Si te ha gustado esta barbería o no, deja un comentario y una calificación para compartir y ayudar a otros clientes cn tu experiencia.'
    },
    negocios: {
      name: 'Schorem Barber Shop',
      direccion: 'Cra 44 # 10 - 100, Sur',
      telefono: '310 0000000',
      rating: 4,
      vagregados: ['Aire', 'Café', 'WiFi', 'Juegos'],
      coords: {lat: 3.413009, lng: -76.527867},
      horarios: [{
        dias: 'Lunes - Jueves',
        abre: '10:00am',
        cierra: '8:00pm',
        cerrado: false
      },{
        dias: 'Viernes - Sábados',
        abre: '9:00am',
        cierra: '10:00pm',
        cerrado: false
      }],
      comentarios: [{
        autor: 'dJoin',
        rating: 5,
        timestamp: '8 Noviembre 2016',
        nota: 'Excelente servicio y muy profesionales'
      }]
    }
  });
};

/* GET 'agregar una nota del sitio' page */
module.exports.addCalificacion = function(req, res){
  res.render('form-calificar-sitio', { 
    title: 'Califícame - Deja un comentario',
      pageHeader: {
        title: 'Califica Shorem Barber Shop'
      },
      aboutus: 'OnBarbers fue creada con dos propósitos: ayudar a la gente a encontrar una barbería cercana, con información sobre sus servicios, horarios, promociones e instalaciones y ayudar a los dueños de las barberías a dar a conocer sus negocios.'
  });
};