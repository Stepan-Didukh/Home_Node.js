const dataBase  =  require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const { house_id } = req.body;
        const dataUpdate = req.body;
        const houseModel = dataBase.getModels('House');

        await houseModel.update(dataUpdate, {
            where: {
                id: house_id
            }
        });

        res.redirect(`/houses/${house_id}`);
    } catch (e) {
        res.status(400).json(e.message);
    }
};