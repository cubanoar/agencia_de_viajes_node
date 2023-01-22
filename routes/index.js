import { Router } from 'express';
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimonios,
  paginaDetalleViaje,
} from '../controllers/paginasController.js';

import { guardarTestimonios } from '../controllers/testimoniosController.js';





const router = Router();

router
  .get('/', paginaInicio)

  .get('/nosotros', paginaNosotros)

  .get('/viajes', paginaViajes)

  .get('/viajes/:slug', paginaDetalleViaje)

  .get('/testimonios', paginaTestimonios)

  .post('/testimonios', guardarTestimonios)

export default router;
