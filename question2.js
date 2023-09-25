//Define an object to represent a studnet information

const student={

     name:'Aditya',
     age:20,
     grade:'A',
}

function updategrade(newgrade){
      student.grade=newgrade;
}


updategrade('B'); 

console.log(student);




//OUTPUT : {name:'Aditya', age:20, grade:'B}
