    function sum(a, b) {
    console.log(a + b);
    }

    // function with return

    function sum2(a, z) {
    ad = a + z;
    return ad;
    }

    let newVal = sum2(2, 4);

    // console.log(newVal);

    // sum function
    function sum(a, b) {
    return a + b;
    }

    // Multiplaction function

    function mul(a, b) {
    return a * b;
    }

    // Arrow Fuction

    const arrowfun = (a, b) => {
    return a + b;
    };

    // multiplatication arrowfunction

    // const mult = (a, b) => {
    //   return a * b;
    // };

    // create a function to count the vowels

    function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u" ||
        char === "A" ||
        char === "E" ||
        char === "I" ||
        char === "O" ||
        char === "U"
        ) {
        count++;
        }
    }
    return count;
    }
    countVowels("Mahota"); // Example usage

    // create a function to count the vowels with arrow function

    const countVowl = (str) => {
    let count = 0;
    for (const char of str) {
        if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u" ||
        char === "A" ||
        char === "E" ||
        char === "I" ||
        char === "O" ||
        char === "U"
        ) {
        count++;
        }
    }
    return count;
    };

    // console.log(countVowl("Mahota"));

    //   for each loop in array

    // let array = [1,2,3,4,5,6,7,8,9,]

    // array.forEach((val)=>{
    //     console.log(val)
    // })

    // get the squer of the number

    let numbs = [33, 23, 56, 2, 4, 6, 76, 43, 21];

    let number = (numb) => {
    console.log(numb * numb);
    };

    // numbs.forEach(number)

    // map method  vey importent in javascript

    let values = [5, 12, 14, 72, 14];

    let newarray = values.map((val) => {
    return val * 3;
    });

    // console.log(newarray)

    // create an array to store data into new array and filterout even number

    let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let newarray1 = array1.filter((val) => {
    return val % 2 === 0;
    });
    // console.log(newarray1)

    let array2 = [1, 2, 3, 4, 5, 6, 7];

    let newarray2 = array2.reduce((res, curr) => {
    return res + curr;
    });
    // console.log(newarray2);

    // filter out the student marks he got the 90+ marks

    let studentmarks = [89, 91, 93, 87, 32, 56, 77];

    let filtermarks = studentmarks.filter((val) => {
    return val > 90;
    });
    // console.log(filtermarks)


    // using the promt user tell the number and i store in array 
     let n = prompt("Enter the number ")

     let arr =[];
     for(let i=1; i<=n; i++ ){
        arr[i - 1 ] = i;
    }
    let summ = arr.reduce((res, curr)=>{

        return res + curr ;
    })

    // console.log("sum =",summ)

    let multy = arr.reduce((res, curr)=>{

        return res * curr ;
    })

    console.log("Multiplaction =",multy)

