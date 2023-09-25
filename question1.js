//Create an object representinng  a car with properties like "make," "model," and "year7" Write a function to
//display all the properties of the car.

const car={
     make:"Swift",
     model:"Camry",
     year:2020,
}

function displaypropertiesofcar(){
     for(const key in car){
          console.log(`${key} : ${car[key]}`);
     }
}

displaypropertiesofcar(car);

//OUTPUT: make:Swift, model:Camery, year:2020


