import { createProduct, getProducts } from "../controllers/ProductController"
import { Router } from 'express'

const router = Router()

router.post('/product/create', createProduct)
router.get('/products', getProducts)

export default router