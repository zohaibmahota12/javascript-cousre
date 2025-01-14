/*  ========================================
               for loop 
    ======================================== */

// for ( let count= 1 ; count <= 5 ; count++ ){
//     console.log("zohaib Mahota")
// }

// for ( let i= 1 ; i <= 5 ; i++ ){
//     console.log(" i =" , i);
// }

// calculate sum of 1 to 5
// let sum = 0;
// for (let i = 1 ; i <= 5 ; i++){
//  sum = sum + i;

// }
// console.log("sum =",sum);
/*  ========================================
           best summary of for loop 
        ======================================== */
// let sum = 0;
//let n = 5 ;
// for (let i = 1; i <= n; i++) {
//     sum = sum + i;
// }
// console.log("sum =", sum);

// for (let i = 1; //this is initialized the statement

//     i <= 5 ; // this is stoping statement

//     i++ ; // this is updated statement

//     )

/*========================================
               while loop 
     ======================================== */

// let i = 1;

// while (i <= 5){
//     console.log("zohaib mahota" , i);
//     i++;
// }

/*========================================
           do while loop
     ======================================== */

// let i = 1;
// do {
//     console.log("i =" , i);
//     i++;
// }while(i <= 5);

/*========================================
             for in loop 
     ======================================== */
// getting to the key value for the object
// let student = {

//     name : "zohaib",
//     age :21,
//     cgpa : 7.5 ,

// }
// for ( let key in student){
//     console.log( "key =", key , "value = " ,student[key])
// }

/*======================================================
           Question No #1 I want to print 1 to 100 number 
    ========================================================*/

// for (let num = 1 ; num <= 100 ; num++ ){
//     console.log("number =" ,num)
// }

// i want to print even number 1 to 100
// for (let num = 0 ; num <= 100 ; num++ ){
//       if (num%2 ===0){
//         console.log("my even number is =", num)
//       }
//      }

/*==============================================================
           Question No #2 Create a promt and guess the number 
    ================================================================*/

//     let gameNumber = 12;
//     let userNum = prompt("Guess the number :")
//     console.log(userNum)
//     while (userNum != gameNumber){
//     userNum= prompt("Wrong Number! Try again.")
//     console.log(userNum);
//    }
//    console.log("Your Genius ")

/*=============================================================
                           Strings 
    ============================================================= */

// let str = "Zohaib Mahota"
// console.log(str)

// console.log(str.length) // i check the lenght of my string

// console.log(str[8])

// Tamplate Litrals in string  `  `

// let obj = {
//     name : "zohaib Hassan",
//     age  :  23,
//     city : "Lahore"
// }
// let output =`My Name Is ${obj.name} My Age Is ${obj.age} i live In ${obj.city}.`
// console.log(output)

// //  In tamplate literals we used expression like this

// let specialstr = `This is zohaib hassan my age is ${20 + 3}`
// console.log(specialstr);

//     // we used escape chracter  \n is not show on the code
// let specialstrs = `This is zohaib \n hassan my age is ${20 + 3}`
// console.log(specialstrs);

// // string used a some method

// console.log(specialstr.toUpperCase())
// console.log(specialstr.trim())
// console.log(specialstr.slice(1))

// // concatinate
//  let str1 = "zohaib";
//  let str2 = "Mahota";

// // let result = str1.concat  (str2);
// let result = str1 + str2;
// console.log(result  )

// exercise question

// let fullName = prompt("Enter Your Full Name without spaces ")
// let userName = "@" + fullName + fullName.length;

// console.log(userName)

// ===================================================
//                 arrays
// ===================================================

// let marks = [91, 87, 67, 81, 55, 61];

// marks[0] = 10; //we change the value of array like this

// console.log(marks);

// let names = [
//   "zohaib",
//   "shoaib",
//   "shahzad",
//   "measum",
//   "Imran Jaffar",
//   "sulman",
//   "yasir ",
//   "yousif ",
//   "jarar Haider",
//   "ali ashtar",
//   "Shahroz",
//   "zeeshan",
// ];
// for (let i = 0; i<names.length;idx++) {
//   console.log(names[i]);
// };
// let names = [
//     "zohaib",
//     "shoaib",
//     "shahzad",
//     "measum",
//     "Imran Jaffar",
//     "sulman",
//     "yasir ",
//     "yousif ",
//     "jarar Haider",
//     "ali ashtar",
//     "Shahroz",
//     "zeeshan",
//   ];
  
//   for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
//   }
  

//   get avg of student number 

// let marks=[
//     91,
//     81,
//     83,
//     74,
//     33,
// ]

// let sum = 0;

//  for(let val of marks)
//     {
//         sum += val;
//     }

//     let avg = sum / marks.length
//     console.log(` avg marks of the student =`,`${avg}`);



    // get 10 off all item 

    // with for of loop 
    let price =[
        800,
        900,
        222,
        740,
        312,
        250,
        512,
    ]

    // let i=0;
    // for (let val of price){
    //     // console.log(`Original Value of The index ${i} = ${val}`);
    //     let offer = val / 10;
    //       price[i]= val - offer
    //     console.log(`Off Price is index of ${i} = ${price[i]}`)
    //     i++;

    // }
    // console.log()


    // with for loop 

    for (let i = 0; i < price.length; i++){
        let offer = price[i] / 10
        price[i] -= offer
    
    }
    console.log(`After applying 10% off, the prices are:`, price)