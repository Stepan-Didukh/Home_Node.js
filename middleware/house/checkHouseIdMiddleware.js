const dataBase =require('../../dataBase').getInstance();

module.exports  = async (req, res, next) => {
    try{
        const { house_id }  = req.params;
        const HouseModel = dataBase.getModels('House');
        let isHousePresent = await  HouseModel.findByPk(house_id);

        if(!isHousePresent){
            throw new Error(`user with ${house_id} is not present`);
        }

        req.house= isHousePresent;
        next();
    }catch (e) {
        res.json('Not found this house')
    }

};
