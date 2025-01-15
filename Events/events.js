let btn1 = document.querySelector("#btn1");

btn1.onclick =() =>{
console.log("btn1 is Click with javascript internal file")
let a= 25;
a++;
console.log(a)
}



let btn2 = document.querySelector("#btn2");

// btn2.addEventListener("click" ,(evt) =>{
// console.log("button was click -handler1")
// console.log(evt)
// });


btn2.addEventListener("click" ,() =>{
console.log("button was click -handler1")
console.log()
});


btn2.addEventListener("click" ,() =>{
console.log("button was click -handler2")
});


const handler3 =  () =>{
console.log("button was click -handler3")
}

btn2.addEventListener("click" ,handler3 )

btn2.addEventListener("click" ,() =>{
console.log("button was click -handler4")
});

// we remove the handler 3 

btn2.removeEventListener("click",handler3);


// we change the mood into dark mood and light mood 


let moodchange = document.querySelector("#moodchange")

let currmood ="light";

let body = document.querySelector("body")
moodchange.addEventListener("click", () =>{

    // if(currmood === "light"){
    //     currmood ="dark";
    //     body.classList.add("dark")
        
    // }else{
    //     currmood ="light"
    //     body.classList.add("light")
    // }
    if (currmood === "light") {
        currmood = "dark";
        body.classList.add("dark");      // Add the 'dark' class
        body.classList.remove("light");  // Remove the 'light' class
    } else {
        currmood = "light";
        body.classList.add("light");    // Add the 'light' class
        body.classList.remove("dark");  // Remove the 'dark' class
    }

    console.log(currmood)
});

