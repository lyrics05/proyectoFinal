import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import validateForm from "../Helpers/validateForm"
import { updateCar } from "../../Redux/actions";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./CarsEdit.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EditComponent01 } from "./EditComponent01";
import { EditComponent02 } from "./EditComponent02";
import { EditComponent03 } from "./EditComponent03";
import { EditComponent04 } from "./EditComponent04";
import { EditComponent05 } from "./EditComponent05";
import { EditComponent06 } from "./EditComponent06";
import { EditComponent07 } from "./EditComponent07";
import axios from "axios";

export default function CarsEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); //para volver a home
  const [showFirstComponent, setShowFirstComponent] = useState(true);
  const [showSecondComponent, setShowSecondComponent] = useState(false);
  const [showThirdComponent, setShowThirdComponent] = useState(false);
  const [showFourthComponent, setShowFourthComponent] = useState(false);
  const [showFifthComponent, setShowFifthComponent] = useState(false);
  const [showSixComponent, setShowSixComponent] = useState(false);
  const [showSevenComponent, setShowSevenComponent] = useState(false);

  let id = useParams()
  let value = id["id"]; // Sintaxis de corchetes
  const cars= useSelector((state)=>state.cars)
  const usersDetails = useSelector((state)=>state.usersDetails)
  const publications = usersDetails.length > 0 ? usersDetails[0].publications : null
 
const valor =value.toString()

  let bla = cars?.filter(c => {
      if(c?.carId===valor?.toString()){
        return c
      }
  });
 
  
  const userId = usersDetails[0].userId


  function removeDots(string) {
    return string.replace(/\./g, "");
  }

 


function addDots(number) {
  
    let numStr = String(number);
    let numLen = numStr.length;
  
   if (numLen < 4) {
      return numStr;
    }
  
    let firstDotPos = numLen % 3 || 3;
  
    let result = numStr.slice(0, firstDotPos);
  
   for (let i = firstDotPos; i < numLen; i += 3) {
      result += "." + numStr.slice(i, i + 3);
    }
  
    return result;
  }


  const handleBackComponent02 = () => {
    setShowSecondComponent(false);
    setShowFirstComponent(true);    
   }

  const handleBackComponent03 = () => {
    setShowThirdComponent(false);
    setShowSecondComponent(true);    
   }

  const handleBackComponent04 = () => {
    setShowFourthComponent(false);
    setShowThirdComponent(true);    
   }

  const handleBackComponent05 = () => {
    setShowFifthComponent(false);
    setShowFourthComponent(true);    
   }

  const handleBackComponent06 = () => {
    setShowSixComponent(false);
    setShowFifthComponent(true);    
   }

  const handleBackComponent07 = () => {
    setShowSevenComponent(false);    
    setShowSixComponent(true);    
   }
  
  const handleConfirmFirstClick = () => {
    if (errors.brand || errors.model || errors.year || errors.color || errors.kilometers ) { //chequeo si hay errores
      toast.error('Please correct errors 🚦', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;
      return;
    }
    setShowFirstComponent(false);
    setShowSecondComponent(true);
  };

  const handleConfirmSecondClick = () => {
    if (errors.fuel || errors.engine || errors.power || errors.transmission || errors.drive || errors.capacity) { //chequeo si hay errores
      toast.error('Please correct errors 🚦', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;
      return;
    }
    setShowSecondComponent(false);
    setShowThirdComponent(true);
  };
 
  const handleConfirmThirdClick = () => {
    if (errors.price || errors.place) { //chequeo si hay errores
      toast.error('Please correct errors 🚦', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;
      return;
    }
    setShowThirdComponent(false);
    setShowFourthComponent(true);
  };

  const handleConfirmFourthClick = () => {
    if (errors.img) { //chequeo si hay errores
      toast.error('Please correct errors 🚦', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;
      return;
    }
    setShowFourthComponent(false);
    setShowFifthComponent(true);
  };

  const handleConfirmFifthClick = () => {
    if (errors.email || errors.phone) { //chequeo si hay errores
      toast.error('Please correct errors 🚦', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;
      return;
    }
    setShowFifthComponent(false);
    setShowSixComponent(true);
  };


  const handleConfirmSixClick = () => {
    if (errors.description) { //chequeo si hay errores
      toast.error('Please correct errors 🚦', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;
      return;
    }
    setCarDos({
      brand: car.brand,
      model: car.model,
      year: car.year,
      color: car.color,
      price: addDots(car.price),
      place: car.place,
      phone: car.phone,
      email: car.email,
      kilometers: addDots(car.kilometers),    
      fuel: car.fuel,
      img: car.img,
      engine: car.engine,
      power: car.power,
      transmission: car.transmission,
      drive: car.drive,
      capacity: car.capacity,
      description: car.description,
      
    })
    
    setShowSixComponent(false);    
    setShowSevenComponent(true);
  };



  const [errors,setErrors] = useState({}); //estado local para errores

  const [car, setCar] = useState({ //estado local para crear el car
    id:bla[0].carId,
    brand: bla[0].brand,
    model:bla[0].model,
    year:  bla[0].year,
    color:  bla[0].color,
    price:  removeDots(bla[0].price),
    place:  bla[0].place,
    phone:  bla[0].phone,
    email:  bla[0].email,
    kilometers: removeDots(bla[0].kilometers),    
    fuel:  bla[0].fuel,
    img: bla[0].img,
    engine:  bla[0].engine,
    power:  bla[0].power,
    transmission: bla[0].transmission,
    drive:  bla[0].drive,
    capacity: bla[0].capacity,
    description:  bla[0].description,
  })


  const [carDos, setCarDos] = useState({ //estado local para crear el car
    brand: "",
    model: "",
    year: "",
    color: "",
    price: "",
    place: "",
    phone: "",
    email: "",
    kilometers: "",    
    fuel: "",
    img: "",
    engine: "",
    power: "",
    transmission: "",
    drive: "",
    capacity: "",
    description: "",
  });


  useEffect(() => { //valido el form
    setErrors(validateForm(car));
  }, [car]);




function onInputChange(e) { //cambio el estado segun el input
  e.preventDefault();
  setCar({
    ...car,
    [e.target.name]: e.target.value,
  });

};

const carId = car.id !== undefined ? car.id : null





function onSubmit(e) {
  e.preventDefault();  
  if (Object.keys(errors).length > 0) { //chequeo si hay errores
    toast.error('Please correct errors 🚦', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });;
    return;
  }

  dispatch(updateCar(carId, carDos,userId)) //hago el post, despacho la action

  setCar({ 
    brand: "",
    model: "",
    year: "",
    color: "",
    price: "",
    place: "",
    phone: "",
    email: "",
    kilometers: "",    
    fuel: "",
    img: "",
    engine: "",
    power: "",
    transmission: "",
    drive: "",
    capacity: "",
    description: "",
  });

  setCarDos({ 
    brand: "",
    model: "",
    year: "",
    color: "",
    price: "",
    place: "",
    phone: "",
    email: "",
    kilometers: "",    
    fuel: "",
    img: "",
    engine: "",
    power: "",
    transmission: "",
    drive: "",
    capacity: "",
    description: "",
  });
  
  toast.success('Post edited! 🚗', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",   
    // onClose: () => {
    //   navigate("/mypublications");
    // }
    });

    setTimeout(function() {
      navigate("/mypublications");      
    }, 3000);
}


const handleUpload = (e) => {
  e.preventDefault();
  uploadImage() 
}


const [imageSelected, setImageSelected] = useState("")

  const uploadImage = async () => {
    toast('Uploading Image', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "preset_prueba")
    try {
    await axios.post("https://api.cloudinary.com/v1_1/dffjcfxvk/image/upload", formData
    ).then((response) => {
      const imageUrl = response.data.url;
      setCar({
        ...car,
        img: imageUrl,
      });
    });
  } catch (error) {
    console.log(error.response); // handle error here
  }
}



  return (
    
    <>
    <Navbar/>
    
<div className="w-full">
    <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
    <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
          
            <form  onSubmit={onSubmit}> 

          {showFirstComponent && (  
            <EditComponent01
              car={car}
              setCar={setCar}
              errors={errors}
              setErrors={setErrors}
              onInputChange={onInputChange}
              handleConfirmFirstClick={handleConfirmFirstClick}
              bla={bla}
            />
          )}
            
          {showSecondComponent && (
            <EditComponent02
              car={car}
              setCar={setCar}
              errors={errors}
              setErrors={setErrors}
              onInputChange={onInputChange}
              handleConfirmSecondClick={handleConfirmSecondClick}
              handleBackComponent02 = {handleBackComponent02} 
              bla={bla}            
            />
            )}

          {showThirdComponent && (
            <EditComponent03
              car={car}
              setCar={setCar}
              errors={errors}
              setErrors={setErrors}
              onInputChange={onInputChange}
              handleConfirmThirdClick={handleConfirmThirdClick}
              handleBackComponent03 = {handleBackComponent03} 
              bla={bla}   
            />
            )}

          {showFourthComponent && (
            <EditComponent04
              car={car}
              setCar={setCar}
              errors={errors}
              setErrors={setErrors}
              onInputChange={onInputChange}
              handleConfirmFourthClick={handleConfirmFourthClick}
              handleBackComponent04 ={handleBackComponent04}
              imageSelected={imageSelected}
              setImageSelected={setImageSelected}
              handleUpload={handleUpload}
              bla={bla}
            />
            )}
          
          {showFifthComponent && (
            <EditComponent05
              car={car}
              setCar={setCar}
              errors={errors}
              setErrors={setErrors}
              onInputChange={onInputChange}       
              handleConfirmFifthClick={handleConfirmFifthClick}
              handleBackComponent05 = {handleBackComponent05}     
              bla={bla}   
            />
            )}

          {showSixComponent && (
            <EditComponent06
              car={car}
              setCar={setCar}
              errors={errors}
              setErrors={setErrors}
              onInputChange={onInputChange}   
              handleBackComponent06 = {handleBackComponent06}
              handleConfirmSixClick= {handleConfirmSixClick} 
              bla={bla}        
            />
            )}

          {showSevenComponent && (
            <EditComponent07
              car={car}
              setCar={setCar}
              errors={errors}
              setErrors={setErrors}
              onInputChange={onInputChange}   
              handleBackComponent07 = {handleBackComponent07}
              bla={bla}        
            />
            )}
                
            </form>
            
        </div>
    </div>
</div>
    <ToastContainer />
    <Footer/>
    </>    
  );
   }
