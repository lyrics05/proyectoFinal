const validateForm = ({
  brand, 
  model, 
  year, 
  price, 
  place, 
  phone, 
  email, 
  kilometers, 
  color, 
  fuel, 
  img, 
  engine, 
  power, 
  transmission, 
  drive, 
  capacity, 
  description }) => {
    const errors = {};  
    const urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    const onlyLetters = /[\^$.¡*+?=¿%&!:|\\/()[\]{}1234567890¬"'#;-@¨]/;  
    const onlyNumbers = /^[0-9]+$/;
    const onlyLettersNumbers = /[^a-zA-Z0-9]/
    const onlyphone = /^[+]?[0-9]+$/
    const onlyEmail = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
    
   
    if (
      typeof brand !== "string" || brand.length < 2 || brand.length > 15 || onlyLetters.test(brand) 
    ){
      errors.brand = "Please write between 2-15 letters";    
    }
  
    else if (
      typeof model !== "string" || model.length < 2 || model.length > 15 || onlyLettersNumbers.test(model) 
    ){
      errors.model = "No more than 2-15 letters/numbers";    
    }
      
  
    else if (isNaN(year) || !onlyNumbers.test(year) || year < 1886 || year > 2023)
      errors.year = "Must be between 1886-2023";

    else if (
      typeof color !== "string" || color.length < 2 || color.length > 25 || onlyLetters.test(color) 
    ){
      errors.color = "Up to 2-25 letters";    
    }

    else if (!onlyNumbers.test(kilometers) || kilometers < 0 || kilometers.length > 7)
      errors.kilometers = "Can't be less than 0/ Up to 7 char.";

    else if (
      typeof power !== "string" || power.length < 2 || power.length > 25 
    ){
      errors.power = "Please write 2-25 letters/numbers";    
    }     

    else if (
      typeof engine !== "string" ||  engine.length < 2 || engine.length > 25
    ){
      errors.engine = "Please write 2-25 characters";    
    }

    else if (
      fuel === "--select--" || !fuel
    ){
      errors.fuel = "Please choose an option";    
    }

    else if (
      transmission === "--select--" || !transmission
    ){
      errors.transmission = "Please choose an option";    
    }

    else if (
      drive === "--select--" || !drive
    ){
      errors.drive = "Please choose an option";    
    }

    else if (
      capacity === "--select--" || !capacity
    ){
      errors.capacity = "Please choose an option";    
    }
  
    else if (isNaN(price) || !onlyNumbers.test(price) || price < 1 || price.length > 9 )
      errors.price = "Must be more than 0; and less than 9 characters";
  
    else if (
      typeof place !== "string" || place.length < 2 || place.length > 25 || onlyLetters.test(place) 
    ){
      errors.place = "Please write between 2-25 letters";    
    }


    else if (!img)
      errors.img = "Please select an image and Upload";

    else if (!onlyEmail.test(email) || email.length > 40)
      errors.email = "Provide a valid email address, with less than 40 characters";       

    else if (!onlyphone.test(phone) || phone.length < 7 || phone.length > 16)
      errors.phone = "Only + and numbers, 7-16 characters";


    
    else if (
      typeof description !== "string" || description.length < 90 || description.length > 500
    ){
      errors.description = "Must have between 90-500 characters";    
    }

    else {
  const words = description.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 25) {
      errors.description = "Each word cannot have more than 25 characters";
      break;
    }
  }
  }
    
    

    
    return errors;
  };

  export default validateForm;

