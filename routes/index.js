var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest: '.tmp'});
var ctrl = require('../controllers/site.controller');

/* GET home page. */
router.get('/', ctrl.list);

router.get('/addwork', ctrl.addWork);
router.post('/addwork', ctrl.addWork);

router.get('/add', ctrl.add);
router.post('/add', upload.single('image'), ctrl.add);

router.get('/edit/:id', ctrl.edit);
router.post('/edit/:id', upload.single('image'), ctrl.edit);

router.get('/delete/:id', ctrl.delete);
router.post('/delete/:id', ctrl.delete);

module.exports = router;
