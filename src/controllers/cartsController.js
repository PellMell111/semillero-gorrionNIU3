import Cart from '../models/Cart.js';

export const getCarts = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el carrito' });
  }
};

export default getCarts;