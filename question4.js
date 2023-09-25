//Q4. Develop a program that accepts an object and a property name , and checks if the object has the specified property
  
   
const student={
     name:"Aditya",
     age:20,
     state:"Bihar",
}

function hasProperty(obj, propertyName){
 
     return obj.hasOwnProperty(propertyName);
}

console.log(hasProperty(student,"name"));    //True
console.log(hasProperty(student, "address"));   //False
console.log(hasProperty(student,"email"));    //false
console.log(hasProperty(student,'age'));   //True


