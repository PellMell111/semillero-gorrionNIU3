import Cart from '../models/Cart.js';

export async function getCarts(req, res) {
  try {
    const carts = await Cart.find();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los carritos' });
  }
}

export async function updateProductInCart(req, res) {
  const cartId = req.params.cid;
  const productId = req.params.pid;
  const units = parseInt(req.params.units);

  try {
    const cart = await Cart.findById(cartId);
    if (!cart) {
      return res.status(404).json({ error: 'Carrito no encontrado' });
    }

    const productToUpdate = cart.products.find((product) => product.product.toString() === productId);
    if (!productToUpdate) {
      return res.status(404).json({ error: 'Producto no encontrado en el carrito' });
    }

    productToUpdate.units = units;

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto en el carrito' });
  }
}

export async function deleteProductFromCart(req, res) {
  const cartId = req.params.cid;
  const productId = req.params.pid;
  const units = parseInt(req.params.units);

  try {
    const cart = await Cart.findById(cartId);
    if (!cart) {
      return res.status(404).json({ error: 'Carrito no encontrado' });
    }

    const productToDeleteIndex = cart.products.findIndex((product) => product.product.toString() === productId);
    if (productToDeleteIndex === -1) {
      return res.status(404).json({ error: 'Producto no encontrado en el carrito' });
    }

    cart.products.splice(productToDeleteIndex, 1);

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto del carrito' });
  }
}