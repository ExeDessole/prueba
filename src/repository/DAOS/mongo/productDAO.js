import productModel from "./models/productModel.js";

const productDAO = {
  // Crea un producto nuevo
  createProduct(data) {
    const product = new productModel(data);
    return product.save(); // retorna una promesa
  },
  // Devuelve todos los productos
  getProducts() {
    return productModel.find().lean(); // retorna una promesa
  },
  // Busca por descripción
  getByDescription(description) {
    return productModel.findOne({ description });
  },
  // Devuelve producto por ID
  getById(id) {
    return productModel.findById(id).lean();
  },
  // Actualiza producto por ID
  updateById(id, data) {
    return productModel.findByIdAndUpdate(id, data, { new: true });
  },
  // Elimina producto por ID
  deleteById(id) {
    return productModel.findByIdAndDelete(id);
  }
};

export default productDAO;