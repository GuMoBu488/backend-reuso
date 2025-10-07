import { Request, Response } from 'express';
import { Product } from '../models/ProductModel';


let products: Product[] = [
  { id: 1, name: 'Produto A', price: 50.0 },
  { id: 2, name: 'Produto B', price: 75.5 },
  { id: 3, name: 'Produto C', price: 120.0 }
];

export class ProductController {
  static getAllProducts(req: Request, res: Response) {
    res.json(products);
  }

  static createProduct(req: Request, res: Response) {
    const { name, price } = req.body;

    if (!name || typeof price !== 'number') {
      return res.status(400).json({ message: 'Nome e preço são obrigatórios' });
    }

    const newProduct: Product = {
      id: products.length + 1,
      name,
      price
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
  }

  static getProductById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.json(product);
  }
}
