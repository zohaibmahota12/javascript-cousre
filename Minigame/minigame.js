    let boxes = document.querySelectorAll(".box");
    let msg = document.querySelector("#msg");
    let msgContainer = document.querySelector(".msg-container");
    let resetbutton = document.querySelector("#resetgame");
    let newbtn = document.querySelector("#new-btn");
    let turnO = true;


    const resetgame = ()=>{
        turnO=true;
        EnabledBoxes();
        msgContainer.classList.add("hide")
    }
    const winPartterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    ];

    boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was click ");
        if (turnO) {
        box.innerText = "O";
        box.innerText;
        turnO = false;
        } else {
        box.innerText = "X";
        turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
    });

    const disabledBoxse = () => {
        for (let box of boxes) {
            box.disabled = true;
        }
    }
    // const EnabledBoxes = () =>{
    //     for (let box of boxes){
    //         box.disabled = false;
    //         box.innerText="";
    //     }
    // }
    const EnabledBoxes = () => {
        for (let box of boxes) {
            box.disabled = false;
            box.innerText = "";
        }
    }
    const showWinner = (winner)=>{
        msg.innerText =`Conguratulation  ${winner} You are Winner 🎉 `;
        msgContainer.classList.remove("hide");
        disabledBoxse();
        
    }

    const checkWinner = () => {
    for (let pattern of winPartterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
            // console.log("winner", pos1Val);
            showWinner (pos1Val );
        }
        }
    }
    };

    newbtn.addEventListener("click", resetgame);
    resetbutton.addEventListener("click", resetgame);