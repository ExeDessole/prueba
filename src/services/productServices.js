import productDAO from "../repository/DAOS/mongo/productDAO.js";

const productServices = {
  // Crea un producto
  async createProduct(data) {
    try {
      const existing = await productDAO.getByDescription(data.description);
      if (existing) throw new Error("El producto ya existe");

      const product = await productDAO.createProduct(data);
      return product;
    } catch (error) {
      if (error.code === 11000) {
        throw new Error("El producto ya está registrado (duplicado)");
      }
      throw error;
    }
  },
  // Devuelve todos los productos
  async getProducts() {
    const products = await productDAO.getProducts();
    if (!products || products.length === 0) {
      throw new Error("No se encontraron productos");
    }
    return products;
  },
  async getByDescription(description) {
    const product = await productDAO.getByDescription(description);
    return product;
  },
  // Devuelve producto por ID
  async getById(id) {
    const product = await productDAO.getById(id);
    if (!product) throw new Error("Producto no encontrado");
    return product;
  },
  // Actualiza producto por ID
  async updateById(id, data) {
    const productUpdated = await productDAO.updateById(id, data);
    if (!productUpdated) throw new Error("No se pudo actualizar el producto");
    return productUpdated;
  },
  // Elimina producto por ID
  async deleteById(id) {
    const productDeleted = await productDAO.deleteById(id);
    if (!productDeleted) throw new Error("No se pudo eliminar el producto");
    return productDeleted;
  }
};

export default productServices;