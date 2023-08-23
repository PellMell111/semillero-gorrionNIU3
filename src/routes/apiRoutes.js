import express from 'express';
import * as productsController from '../controllers/productsController.js';
import * as cartsController from '../controllers/cartsController.js';

const router = express.Router();

router.get('/api/products', productsController.getProductsForHome);
router.get('/api/products/:pid', productsController.getProductById);
router.post('/api/products', productsController.createProduct);
router.put('/api/products/:pid', productsController.updateProduct);
router.delete('/api/products/:pid', productsController.deleteProduct);
router.get('/api/carts', cartsController.getCarts);
router.put('/api/carts/:cid/products/:pid/units/:units', cartsController.updateProductInCart);
router.delete('/api/carts/:cid/products/:pid/units/:units', cartsController.deleteProductFromCart);

export default router;