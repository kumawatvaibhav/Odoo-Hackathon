import Furniture from "../models/furniture.model.js"

//method to get furniture details : 
const getFurniture = async (req,res) => {
    const filter = req.params.userId ? {
        _id : req.params.userId
    } : {};
    const furniture = await Furniture.find(filter, {"id"  : 1,"name" : 1,
    "price_per_day" : 1, "image":1,"location":1 ,"description" : 1,"furnitureRentedIds" : 1});
    res.send(furniture);
} 

//method to update furniture info : 

const updateFurniture = async (req, res) => {
    const newPayload = req.body;
    const newDbResp = await Furniture.updateOne({
        _id : req.params.furnitureId
    }, newPayload);
    res.send(newDbResp);
}

export{
    getFurniture,
    updateFurniture
}