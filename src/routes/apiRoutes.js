import express from 'express';
import { getProductsForHome } from '../controllers/productsController.js';
import { getCarts } from '../controllers/cartsController.js';

const router = express.Router();

router.get('/', getProductsForHome);
router.get('/api/carts', getCarts);

export default router;