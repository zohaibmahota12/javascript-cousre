const student ={
    fullName : "Zohaib Hassam",
    marks : 92.2,
    printMarks: function () {
        console.log("marks = ", this.printMarks)
    }
}

const employee = {
    calcuTex (){
        console.log("tex rate is 10%")
    }
}

const zohaibhassan ={
    slaery : 50000,
    calcuTex (){
        console.log("tex rate is 20%")
    }
};

const zohaibhassan2 ={
    slaery : 50000,
    calcuTex (){
        console.log("tex rate is 40%")
    }
};

const zohaibhassan3 ={
    slaery : 50000,
    calcuTex (){
        console.log("tex rate is 50%")
    }
};
const zohaibhassan4 ={
    slaery : 50000,
    calcuTex (){
        console.log("tex rate is 60%")
    }
};
// we used to calcuTex in zohaibhassan function so how 
//  we used prototyp 

zohaibhassan.__proto__ = employee
zohaibhassan2.__proto__ = employee
zohaibhassan3.__proto__ = employee
zohaibhassan4.__proto__ = employee

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   Person.prototype.greet = function() {
//     console.log(`Hello, I'm ${this.name}`);
//   };
  
//   const person = new Person('John', 30);
//   person.greet(); // Output: Hello, I'm John



// in Es6 

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     greet() {
//       console.log(`Hello, I'm ${this.name}`);
//     }
//   }
  
//   const person = new Person('John', 30);
//   person.greet(); // Output: Hello, I'm John
  


// if we have 3 to 4 employee and thay are paying a diff tex rate 


class ToyotaCar{
    constructor(brand){
        // console.log("Create a new Object")
        this.brand =brand;
    }
start(){
    // console.log("Car Start")
}
stop(){
    // console.log("Car Stop")
}
// setBrand (brand){
//     this.brandname =brand;
// }
}

// add new object in tayotacar 

let Fortuner = new ToyotaCar("fortuner");
let mahran = new ToyotaCar("mahran");



  
const uniqueValue = new Set([1, 2, 2, 3]);
// console.log(uniqueValue);     // Output: Set {1, 2, 3}

const map = new Map();
map.set('name', 'John');
map.set('age', 30);
// console.log(map); // Output: Map { 'name' => 'John', 'age' => 30 }


class people {

constructor(name){
    this.species= "Home Sapines"
    this.name=name;
}
    eat(){
        // console.log("eat")

    }

sleep (){
    // console.log("sleep")
}
work (){
    // console.log("do nothing ")
}
}


class engineer extends people {
constructor(name){
    super(name);
// this.branch=branch;

}
work(){
    super.eat();
    console.log("Solving a problem ")
}
}

let newobject = new engineer ("zohaib mahota");
// console.log(engineer)

class doctor extends people {

    work(){

        console.log("treat patients")
    }
    }


let object = new doctor ();
// console.log(doctor)




// ========================= question ========================== 

let DATA ="Secret Information";

class User {
    constructor(name, email){
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log("Data =",DATA);
    }
}
 class Admin extends User {
    constructor(name,email){
super(name,email)
    }
        editData () {
            DATA="Some New Value"
        }
 }



const student1 =new User("zohaibmahota","abc@gmail.com")
const student2 =new User("shoaibmahita","shaoib@gmail.com")

const teacher = new User("dean","dean@gmail.com")

const admin = new Admin ("admin","admin@gmail.com")