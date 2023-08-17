import express from 'express';
import getProductsForHome from '../controllers/productsController.js';
import getCarts from '../controllers/cartsController.js';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const products = await getProductsForHome();
        const carts = await getCarts();

        res.render('home', { products, carts });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los datos para la página de inicio' });
    }
});

export default router;