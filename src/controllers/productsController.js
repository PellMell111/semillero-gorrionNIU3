import Product from '../models/Product.js';

const getProductsForHome = async () => {
  try {
    const products = await Product.find();
    return products || [];
  } catch (error) {
    throw new Error('Error al obtener los productos');
  }
};

export default getProductsForHome;