import productServices from "../services/productServices.js";

export async function createProduct(req, res) {
  try {
    const { description } = req.body;

    const existingProduct = await productServices.getByDescription(description);
    if (existingProduct) {
      return res.status(400).json({ error: "El producto ya existe" });
    }

    const product = await productServices.createProduct(req.body);

    res.redirect("/products");

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export async function getProducts(req, res) {
  try {
    const products = await productServices.getProducts();
    res.redirect("/products");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export async function getProductsById(req, res) {
  try {
    const id = req.params.id;
    const product = await productServices.getById(id);
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.status(200).json({ product });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export async function updateProduct(req, res) {
  try {
    const id = req.params.id;
    const updateData = req.body;

    const updatedProduct = await productServices.updateById(id, updateData);
    res.status(200).json({
      message: "Producto actualizado",
      updatedProduct,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export async function deleteProduct(req, res) {
  try {
    const id = req.params.id;

    const deletedProduct = await productServices.deleteById(id);
    res.status(200).json({
      message: "Producto eliminado correctamente",
      deletedProduct,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

