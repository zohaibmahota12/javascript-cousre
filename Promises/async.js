

// function getData(getDataId,/* NxtDataId */) {
//   return new Promise((resolve)=>{
//     setTimeout(() => {
//         console.log(getDataId);
//       // if (NxtDataId) {
//       //   NxtDataId();
//       // }
//   resolve(getDataId);
//     }, 2000);
//   })
 
// }


// //promise chain
// console.log("fecting data1 ...")
// getData(1).then((res) => {
//   console.log("fecting data2 ...")
//   return getData(2); // This returns a promise that will be awaited in the next then
// }).then((res) => {
//   console.log("fecting data3 ...")
//   return getData(3);
// }).then((res) => {
//   console.log("fecting data4 ...")
//   return getData(4);
// }).then((res) => {
//   console.log("success"); // After all promises have been resolved
// }).catch((err) => {
//   console.error("Error:", err); // If any error occurs in the chain
// });

// function getData(getDataId, NxtDataId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Data =", getDataId); // Optional for debugging
//       if (NxtDataId) {
//         NxtDataId();
//       }
//       resolve(getDataId); // Resolve the promise when done
//     }, 2000);
//   });
// }





// callback hell , nexted callbacks , ( pyramid of doom ) 

// getData(1, () => {
//     // console.log("getting data2 ...");
//     getData(2, () => {
//         // console.log("getting data3 ...");
//       getData(3, () => {
//         getData(4, () => {});
//         // console.log("getting data4 ...");
//     });
//   });
// });


// solve the callbacks with the help of promise 

// let promise = new Promise ((resolve, reject  ) =>{
// console.log("i am a promise")
// resolve(123);
// // reject("some error")
// });


// const getPromise = () =>{
//     return new Promise ((resolve ,reject)=>{
//         // console.log("i am a promise ")
//         resolve("success");
//         // reject("network error")
//     });
// };

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fullfilled",res)

// });
// promise.catch((err)=>{
//     console.log("Promise Cannot be a fullfilled",err)
// });

// function asyncfunc(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Data1")
//             resolve("Success");

//         },3000);
//     });
// }
// function asyncfunc2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data2")
//             resolve("Success");

//         },3000);
//     });
// }

// console.log("fecting data1 ...")
// let p1 =asyncfunc();
// p1.then((res)=>{
//     console.log(res)
// })

// console.log("fecting data2 ...") //both is show at a time but i dont want
// let p2 =asyncfunc2();
// p1.then((res)=>{
//     console.log(res)
    
// })

// i want 4 secound take a time for fecting data 2 



// console.log("fecting data1 ...")
// let z1 =asyncfunc();
// z1.then((res)=>{
//     console.log("fecthing data2 ...")
//     let z2=asyncfunc2();
//   z2.then((res)=>{
//   });

// });

// let modifay the code 

// console.log("fecting Zdata1 ...")
// let s1 =asyncfunc().then((res)=>{
//     // console.log("fecthing Zdata2 ...")
//     let s2=asyncfunc2().then((res)=>{
//   });

// });


// async await function 


function api(){
  return new Promise((resolve, reject)=>{

    setTimeout((res)=>{
      console.log("weather Data")
resolve(200)
    },2000)
  });
}

async function getWeatherData() {
  await api();
  await api();
}

function getData(getDataId) {
  return new Promise((resolve)=>{
    setTimeout(() => {
        console.log(getDataId);
      resolve(getDataId);
    }, 2000);
  })
 
}
async function newgetData() {
  await getData(1);
  await getData(2);
  await getData(3)
}