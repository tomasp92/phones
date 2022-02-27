var express = require('express');
var router = express.Router();
var path = require('path');
const homeController = require('../controllers/homeController')
// const multer = require('multer')
const Phone = require(path.join(__dirname, '..', 'models/phones'))

// let storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.resolve(__dirname,'../../public/uploads'))
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
//   })
   
//   let upload = multer({ storage: storage })



/* index: para todos los phones */
router.get('/', homeController.index);


/* 
// buscar un solo phone
router.get('/:id', homeController.phone);


//  guardar un nuevo phone
router.post('/', homeController.nuevo_audio);

router.put('/:id', homeController.editar_audio );

// eliminar un phone
router.delete('/:id', homeController.eliminar);

/* buscar phones con filtros */
// router.get('/:bsuqueda', homeController.filtro);

module.exports = router;
