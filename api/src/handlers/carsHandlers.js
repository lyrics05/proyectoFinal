const { getCarByBrand, getCarByModel, getCarDetail, deleteCarById, createCar, editCar, getAllCars, getCarByEmail } = require("../controllers/carsControllers.js");
const { uploadImage } = require("../utils/cloudinary.js");
const fs = require('fs-extra')

const getCars = async (req, res) => {
    const { brand, model, email } = req.query;

    try {
        if(brand){
            const response = await getCarByBrand(brand);
            res.status(200).send(response);
        }
        else if(model){
            const response = await getCarByModel(model);
            res.status(200).send(response);
        } 
        else if(email){
            const response = await getCarByEmail(email);
            res.status(200).send(response);
        }
        else {
            const response = await getAllCars();
            res.status(200).send(response);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getCarById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getCarDetail(id);
        res.status(200).send(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const postCar = async (req, res) => {
    const { userId } = req.params
    const { body: car } = req;
    try {
        if(req.files?.img){
            const result = await uploadImage(req.files.img.tempFilePath)
            car.img = {
                public_id: result.public_id,
                secure_url: result.secure_url
            }
            await fs.unlink(req.files.img.tempFilePath)
        }
        const create = await createCar(car, userId);
        res.status(200).json(create);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const putCar = async (req, res) => {
    const { userId, id } = req.params;
	try {
        if(id){
		    const response = await editCar(userId, id, req.body);
            res.status(200).send(response);
        }
	} catch (error) {
		res.status(500).json({ error: error.message });
	}

}

const deleteCar = async (req, res) => {
    const { userId, id } = req.params;
    try {
        const response = await deleteCarById(userId, id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getCars,
    getCarById,
    postCar,
    putCar,
    deleteCar
}




// const createCard = (req, res) => {
//     const {
//       brand,
//       model,
//       year,
//       price,
//       img,
//     } = req.body;

//     try {
//       if (!brand) return res.status(400).json({ msg: "Brand not found" });
//       if (!model) return res.status(400).json({ msg: "model not found" });
//       if (!year) return res.status(400).json({ msg: "year not found" });
//       if (!price) return res.status(400).json({ msg: "price not found" });
//       if (!img) return res.status(400).json({ msg: "img not found" });

//        let existsCar = Car.findOne({
//           where: { brand: brand }
//       })

//       if (existsCar) return res.status(404).send(" Existing car")

//       let carCreate =  Car.create({
//           brand,
//           model,
//           year,
//           price,
//           img,

//       });

//       let brandDB =  Brand.findAll({
//           where: { name: brand }
//       });

//       carCreate.addBrand(brandDB);
//       res.status(201);


//     } catch (error){
//           throw new Error(error.message);
//     }
//   };


//   const putCar = (req, res,next) => {

//       const { id } = req.params;
//       const {  brand, price, model, img, year } = req.body;

//       try {
//           if (!id) return res.status(400).json({ msg: 'Id no provisto' });
//           const car =  Car.findByPk(id);
//           if (!car)
//               return res.status(404).json({ msg: 'Car not found' });

//           const updateCar =  car.update({

//               brand: brand || car.brand,
//               price: price || car.price,
//               model: model || car.model,
//               year:year || car.year,
//               img: img || car.img,

//           });

//           if (!updateCar)
//               return res.status(200).json({ msg: "car not updated" });

//           res.status(201).json({ msg: "the car was updated" });
//       } catch (error) {
//           next(error);
//       }




//   }

//   const deleteCar = (req, res) => {
//       try {
//           const { id } = req.params;
//           const result = deleteCarById(id);
//           res.status(200).json(result);
//       } catch (error) {
//           res.status(500).json({ error: error.message });
//       }
//   }