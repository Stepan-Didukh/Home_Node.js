const router = require('express').Router();

const {user, house: houseController} = require('../../constrollers');
const { user: UserMiddleware, houseMiddleware} = require('../../middleware');

router.get('/login', (req,res) => { res.render('login') });
router.get('/loginHouses', (req,res)=>{ res.render('loginHouse') });

router.post('/login',UserMiddleware.checkUserMiddleware, user.login);
router.post('/loginHouses',houseMiddleware.checkHouseLoginMiddleware,houseController.loginHouse);

module.exports = router;