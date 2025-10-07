import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';

const router = Router();

router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
router.get('/products/:id', ProductController.getProductById);
router.get('/', (req, res) => {
  res.send('API de Produtos está funcionando. Use /api/products para ver os produtos.');
});

export default router;
