//Q3. Write a program that takes an object as input and returns the number of properties it has.


function countproperties(obj)

{
     return Object.keys(obj).length;

}

const exampleObject={

       a:1,
       b:2,
       c:3,
       d:4,
       
};

console.log(countproperties(exampleObject));




