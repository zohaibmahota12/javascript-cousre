// conditional statement


let age = 19 ;
let valid ;

//  if statement 
// if (age == 18 ){

//     console.log("Zohaib your valid for vote ");
// }


// for example dark mode

// if else statement 
let mode = "light"
let color;

 if (mode === "dark"){
    color ="black"
 }
 else{
color ="white"

 }

 console.log(color);

// valid for vote 

if (age >= 18){
valid = "your valid for vote"

} else{
    valid =" your not valid for vote "
}
console.log(valid );


// get 33% marks 

let marks = 34;
let passtudent ;

if (marks >= 33){
    passtudent  = "Congratulation Your Passed "

}else {

    passtudent = "Sorry Your Fail Try Next Time"
}
console.log(passtudent );


// check odd number 

let num = 12;

if (num % 2 === 0){
    console.log(num ,"is even ")

}else {

    console.log(num, "is odd")
}


// if esle if  else  statement 

let man =41

if (man === 25){
    console.log(man, "your  young man ");
} else if(man <= 40 ){
    console.log("your are under 25 to 40 ")
}else{
    console.log("your an old man ")
}



// ternary operators
 
// let zohaib =18;
// let result = zohaib >= 24 ? " Adult" : "not adult";

// console.log(result)


// let number = prompt("enter a numnber ");
//  if (number % 5 ===0){
//     console.log("number is multiple of 5 ")
//  }else{
//     console.log("number  is not multiple of 5 ")
//  }


//  student greades 

let score = 90 ;
let grade;
 
if (score>= 90 && score <= 100 ){
      grade= " A ";

}else if (score>=70 && score <=89 ){
    grade="b"
}else if (score >= 60 && score <= 69){
    grade="c"
}else if (score >= 50 && score <= 59){
    grade = " d"
}else if (score >= 40 && score <= 49){
    grade = " f"
}else {
    grade="g"
}


console.log("according to your score , your grade was :" , grade)