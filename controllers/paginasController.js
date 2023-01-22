import { Testimonio } from '../models/Testimonios.js';
import { Viaje } from '../models/Viaje.js';

const paginaInicio = async (req, res) => {
  // res.json({'ms' : 'Hola'})
  // res.send('Hola');
  try {
    //Consultar BD
    const viajes = await Viaje.findAll({ limit: 3 });

    res.render('inicio', {
      page: 'Inicio',
      viajes,
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaNosotros = (req, res) => {
  const page = 'Nosotros';

  res.render('nosotros', {
    page,
  });
};

const paginaViajes = async (req, res) => {
  try {
    //Consultar BD
    const viajes = await Viaje.findAll();

    res.render('viajes', {
      page: 'Viajes',
      viajes,
    });
  } catch (error) {
    console.log(error);
  }
};

//Muestra Viaje por un Slug
const paginaDetalleViaje = async (req, res) => {
  //Consultar BD
  const { slug } = req.params;

  try {
    const { dataValues } = await Viaje.findOne({ where: { slug: slug } });

    res.render('viaje', {
      page: 'Informacion de Viaje',
      dataValues,
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaTestimonios = async (req, res) => {
  try {
    //Consultar BD
    const testimonios = await Testimonio.findAll();

    res.render('testimonios', {
      page: 'Testimonios',
      testimonios,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimonios,
  paginaDetalleViaje,
};
