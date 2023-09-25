//Program using map to store user  information 
const userMap=new Map()


function addUser(name,age,email){        //add User
     const userInfo={name,age,email};

     userMap.set(name,userInfo);
}


function udpdateUser(name,age,email){
     if(userMap.has(name)){
        const  userInfo=userMap.get(name);
          userInfo.age=age;
          userInfo.email=email;
     }

}

function deleteUser(name){
     
     userMap.delete(name);
}

addUser("Divyanshu", 20, "divyanshu@gmail.com");
addUser("Netram", 25, 'netram@eegmail.com');
addUser("Nirupam", 12, 'nirupam@gmail.com');

console.log('Add User of object');
console.log(userMap);
//OUTPUT:  {name:'Divyanshu', 20, email: 'divyanshu@gmail.com'},
//         {name:'Netram', age:25, email: 'netram@gmail.com'},
//         {name:'Nirupam', age:12, email: 'nirupam@gmail.com'}

udpdateUser("Divyanshu", 40, "example@gmail.com");
udpdateUser("Netram", 50, "websiteexample@gmial.com");

console.log('Updates user of object');
console.log(userMap);

//OUTPUT:  {name:'Divyanshu', ahe:40, emai:'example@gmail.com'},
//         {name:'Netram', age:50, emial:'websiteexample@gmail.com'},
//         {name: 'Nirupam', age:12, email:'nirpam@gmail.com'}



deleteUser("Nirupam" );

console.log('Delete user for object');
console.log(userMap);


//OUTPUT:  {name:'Divyanshu', age:40, email:'example@gmail.com'},
//         {name:'Netram}, age:50, email:'websiteexample@gmail.com'}

