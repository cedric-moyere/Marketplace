const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const productCtrl = require('../controllers/product');
const multer = require('../middleware/multer-config');

router.get('/', productCtrl.getAllProduct);
router.post('/', auth, multer, productCtrl.createProduct);
router.get('/:id', productCtrl.getOneProduct);
router.put('/:id', auth, multer, productCtrl.modifyProduct);
router.delete('/:id', auth, productCtrl.deleteProduct);

module.exports = router;