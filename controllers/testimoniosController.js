import { Testimonio } from '../models/Testimonios.js';

const guardarTestimonios = async (req, res) => {
  const { nombre, correo, mensaje } = req.body;
  if ([nombre.trim(), correo.trim(), mensaje.trim()].includes('')) {
    try {
      //Consultar testimonios existentes
      const testimonios = await Testimonio.findAll();

      res.render('testimonios', {
        page: 'Testimonios',
        error: 'Todos los campos son obligatorios',
        nombre,
        correo,
        mensaje,
        testimonios,
      });
    } catch (error) {
        console.log(error)
    }
  } else {
    try {
      await Testimonio.create({ nombre, correo, mensaje });
      res.redirect('/testimonios');
    } catch (error) {
        //Consultar testimonios existentes
      const testimonios = await Testimonio.findAll();

      res.render('testimonios', {
        page: 'Testimonios',
        error: 'Mensaje demasiado largo',
        nombre,
        correo,
        mensaje: '',
        testimonios,
      });
    }
  }
};

export { guardarTestimonios };
