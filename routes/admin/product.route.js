const express = require('express')

const router = express.Router()
const controller = require('../../controllers/admin/product.controller')
const multer  = require('multer')
const storageMulter = require('../../helpers/storageMulter')
const upload = multer({ storage : storageMulter() })
const validate = require('../../validates/admin/product.validate')

router.get('/', controller.index) 
router.patch('/change-multi',controller.changeMulti)
router.delete('/delete/:id',controller.deleteItem)
router.get('/create',controller.create)
router.post("/create",upload.single('image'),validate.createPost,controller.createPost)
router.get('/edit/:id',controller.edit)
router.patch("/edit/:id",upload.single('image'),validate.createPost,controller.editPatch)

module.exports = router;