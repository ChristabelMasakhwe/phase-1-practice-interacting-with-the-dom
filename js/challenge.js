let counter = document.querySelector("#counter")
let count = 0
let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let heart = document.querySelector("#heart");
let pause = document.querySelector("#pause")
let submit = document.querySelector("#submit")
let likes = document.querySelector(".likes")
let myInput = document.querySelector("#comment-input")
let comments = document.querySelector("#list")
let myForm =document.querySelector("form")
let selectedButton = document.querySelectorAll("button")
let intervals = setInterval(runCounter, 1000)

function runCounter() {
counter.innerHTML = count += 1;
}
function changeCounter(button) {
    if(button == plus) {
        count +=1;
        liked +=1
    } else if (button == minus) {
        count -=1
    }
    counter.innerText = count
    if(button == pause) {
        if(pause.innerText === "pause") {
            ResetIntervals()
        plus.setAttribute("disabled","")
        minus.setAttribute("disabled","")
        heart.setAttribute("disabled","")
        pause.innerHTML = "resume"
        }
        else if(pause.innerHTML === "resume") {
            ResetIntervals()
            plus.removeAttribute("disabled","")
        minus.removeAttribute("disabled","")
        heart.removeAttribute("disabled","")
        pause.innerHTML = "pause"
        intervals = setInterval(runCounter, 1000)
        }
    }
    if(button == heart) {
        let numberLikes = [];
        let liked = 0;
        let li = document.createElement("li")
        likes.appendChild(li)
        li.innerText = `${count} has been liked`
    }
    if(button == submit) {
        let p = document.createElement("p")
        p.innerText = `${myInput.value}`
        comments.appendChild(p);
        myInput.value = "";
    }
    }
function ResetIntervals() {
    clearInterval(intervals)
}

    selectedButton.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault(button)
            changeCounter(button)
        })
    })












