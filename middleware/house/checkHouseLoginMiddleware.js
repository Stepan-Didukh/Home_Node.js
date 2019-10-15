const dataBase = require('../../dataBase').getInstance();

module.exports = async ( req, res, next) => {
    try {
        const { city, password } = req.body;
        const HouseModel = dataBase.getModels('House');
        let checkLoginHouse = await HouseModel.findOne({
            where: {
                city,
                password
            }
        });
        if (!checkLoginHouse){
            throw new Error(`Incorrect values`);
        }

        req.user = checkLoginHouse;
        next();

    } catch (e) {
        res.status(400).json(e.message);
    }
};