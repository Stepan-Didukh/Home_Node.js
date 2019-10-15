const router = require('express').Router();

const {house: houseController} = require('../../constrollers');
const {houseMiddleware} = require('../../middleware');

router.get('/createHouses',(req,res)=>{ res.render('createHouse') });
router.get('/edit_houses', (req,res)=>{ res.render('editHouse') });

router.post('/createHouses',houseMiddleware.CheckHouseValidityMiddleware, houseController.createHouse);
router.post('/edit_houses',houseMiddleware.checkEditHouseMiddleware,houseController.editHouse );
router.get('/:house_id',houseMiddleware.checkHouseIdMiddleware, houseController.getByIdHouses);

module.exports = router;