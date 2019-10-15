const dataBase  =  require('../../dataBase').getInstance();

module.exports = async (req,res)=>{
    try{
        const CreateHouse = req.body;
        const UserModel = dataBase.getModels('House');

        await UserModel.create(CreateHouse);
        res.render('loginHouse')
    }  catch (e) {
        res.json(e.message)
    }

};