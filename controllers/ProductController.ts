import { Request, Response } from 'express';
import { Product } from '../models/ProductModel';

let products: Product[] = [
  { id: 1, name: 'Product 1', price: 10.0 },
  { id: 2, name: 'Product 2', price: 15.5 }
];

export class ProductController {
  static getAllProducts(req: Request, res: Response) {
    return res.status(200).json(products);
  }

  static createProduct(req: Request, res: Response) {
    const { name, price } = req.body;

    if (!name || !price) {
      return res.status(400).json({ message: 'Name and price are required' });
    }

    const newProduct: Product = {
      id: products.length + 1,  // Simples incremento do ID
      name,
      price
    };

    products.push(newProduct);
    return res.status(201).json(newProduct);
  }

  static getProductById(req: Request, res: Response) {
    const { id } = req.params;
    const product = products.find(p => p.id === parseInt(id));

    if (product) {
      return res.status(200).json(product);
    }
    return res.status(404).json({ message: 'Product not found' });
  }
}