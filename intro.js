
//function changeBackground() {
//    document.getElementById("changeBtn").innerHTML = $(showGreen(),showYellow(),showOrange());
//}

function SetRandNum() {
    let randomNum = Math.floor(Math.random()*3);
    console.log(randomNum)

    if(randomNum == 1) {
        document.body.style.backgroundColor = 'black'; 
    }

    else if(randomNum == 2) {
        document.body.style.backgroundColor = 'yellow';
     }

     else if(randomNum == 3) {
        document.body.style.backgroundColor = 'brown';
     }

    else {
        document.body.style.backgroundColor = 'green';
     }
}

