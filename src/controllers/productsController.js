import Product from '../models/Product.js';

export async function getProductsForHome(req, res) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
}

export async function getProductById(req, res) {
  const productId = req.params.pid;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
}

export async function createProduct(req, res) {
  const { name, price, imageLink } = req.body;
  try {
    const newProduct = new Product({ name, price, imageLink });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto' });
  }
}

export async function updateProduct(req, res) {
  const productId = req.params.pid;
  const { name, price, imageLink } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { name, price, imageLink },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
}

export async function deleteProduct(req, res) {
  const productId = req.params.pid;
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
}
