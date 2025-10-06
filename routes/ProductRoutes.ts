import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';

const router = Router();

router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
router.get('/products/:id', ProductController.getProductById);

export default router;