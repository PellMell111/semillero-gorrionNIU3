import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        units: Number,
      },
    ],
    totalAmount: Number,
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;