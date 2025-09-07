const calc1=document.createElement("div")
calc1.innerHTML=`

<div class="container">
    <div class="calc" onclick="calculatorpage()">
        <img src="./images/calculator.webp" alt="" class="calcimage">
        <h1>Calculator</h1>
    </div>
    <div class="Stopwatch" onclick="stopwatchpage()">
        <img src="./images/stopwatch.jpeg" alt="" class="calcimage">
        <h1>Stopwatch</h1>
    </div>
    </div>
`
const style=document.createElement("style")
style.textContent=`
body{
    height: 100vh;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.container{
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 100px;
    width: 70%;
    cursor: pointer;
}

.cal{
    font-size: 1rem;
    font-weight: 900;
    cursor: pointer;
    border: solid red;
    width: 300px;
    border-radius: 30px;
    text-align: center;
    }

.calcimage{
    height: 400px;
    width: 300px;
    border-radius: 60px;
}
    

@media (max-width: 768px){
body{
    overflow: scroll;
}
    .container{
        display: grid;
        grid-template-columns: repeat(1,1fr);
        
    }

    
}
`
function calculatorpage(){
    calc1.remove();
    const gif1=showgif()

    setTimeout(() => {
        gif1.remove();
        calculator();
}, 6000);
}

function stopwatchpage(){
    calc1.remove();
    const gif2=showgif1()

    setTimeout(() => {
        gif2.remove();
        stopwatch();
}, 3800);

}

document.head.appendChild(style)
document.body.appendChild(calc1)

function showgif(){
    const gifcon=document.createElement("div")
    gifcon.className="gifcon"
    const image1=document.createElement("img")
    image1.className="calcimage"
    image1.src="./images/calc11.gif"
    gifcon.appendChild(image1);
    document.body.appendChild(gifcon);
    const style=document.createElement("style")
    document.head.appendChild(style)
    style.textContent=`
    body{
    
    height: 100vh;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .calcimage{
    height: 600px;
    width: 400px;
    border-radius: 60px;
    }
    .gifcon{
    display: flex;
    justify-content: center;
    border-radius: 60px;
    }
    
    
`
    return image1;
    

}


function showgif1(){
    const gifcon1=document.createElement("div")
    gifcon1.className="gifcon"
    const image2=document.createElement("img")
    image2.className="calcimage"
    image2.src="./images/stopwatchgif.gif"
    gifcon1.appendChild(image2);
    document.body.appendChild(gifcon1);
    const style=document.createElement("style")
    document.head.appendChild(style)
    style.textContent=`
    body{
    
    height: 100vh;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .calcimage{
    height: 600px;
    width: 400px;
    border-radius: 60px;
    }
    .gifcon{
    display: flex;
    justify-content: center;
    border-radius: 60px;
    }
    
    
`
    return image2;
    

}







function calculator(){

const container1=document.createElement("div");
container1.id="container"
const input1=document.createElement("input")
input1.id="calcinput"
input1.setAttribute("readonly",true);
container1.appendChild(input1);

const calcbutton=document.createElement("div")
calcbutton.id="keyarrange"

const btn1=document.createElement("button")
btn1.id="clear"
btn1.innerText="AC";
btn1.className="actionbutton"
btn1.addEventListener("click",()=>clearall());

const btn2=document.createElement("button")
btn2.innerText="+/-";
btn2.className="actionbutton"
btn2.addEventListener("click",()=>toggleSign());

const btn3=document.createElement("button")
btn3.innerText="%";
btn3.className="actionbutton"
btn3.addEventListener("click",()=>percent());

const btn4=document.createElement("button")
btn4.innerText="/";
btn4.className="actionbutton"
btn4.addEventListener("click",()=>display("/"));

const btn5=document.createElement("button")
btn5.innerText="7";
btn5.addEventListener("click",()=>display("7"));

const btn6=document.createElement("button")
btn6.innerText="8";
btn6.addEventListener("click",()=>display("8"));

const btn7=document.createElement("button")
btn7.innerText="9";
btn7.addEventListener("click",()=>display("9"));

const btn8=document.createElement("button")
btn8.innerText="*";
btn8.className="actionbutton"
btn8.addEventListener("click",()=>display("*"));

const btn9=document.createElement("button")
btn9.innerText="4";
btn9.addEventListener("click",()=>display("4"));

const btn10=document.createElement("button")
btn10.innerText="5";
btn10.addEventListener("click",()=>display("5"));

const btn11=document.createElement("button")
btn11.innerText="6";
btn11.addEventListener("click",()=>display("6"));

const btn12=document.createElement("button")
btn12.innerText="-";
btn12.className="actionbutton"
btn12.addEventListener("click",()=>display("-"));

const btn13=document.createElement("button")
btn13.innerText="1";
btn13.addEventListener("click",()=>display("1"));

const btn14=document.createElement("button")
btn14.innerText="2";
btn14.addEventListener("click",()=>display("2"));

const btn15=document.createElement("button")
btn15.innerText="3";
btn15.addEventListener("click",()=>display("3"));

const btn16=document.createElement("button")
btn16.innerText="+";
btn16.className="actionbutton"
btn16.addEventListener("click",()=>display("+"));

const btn17=document.createElement("button")
btn17.innerText="0";
btn17.addEventListener("click",()=>display("0"));

const btn18=document.createElement("button")
btn18.innerText=".";
btn18.addEventListener("click",()=>display("."));

const btn19=document.createElement("button")
btn19.innerText="=";
btn19.className="actionbutton"
btn19.addEventListener("click",()=>finalanswer());


calcbutton.appendChild(btn1)
calcbutton.appendChild(btn2)
calcbutton.appendChild(btn3)
calcbutton.appendChild(btn4)
calcbutton.appendChild(btn5)
calcbutton.appendChild(btn6)
calcbutton.appendChild(btn7)
calcbutton.appendChild(btn8)
calcbutton.appendChild(btn9)
calcbutton.appendChild(btn10)
calcbutton.appendChild(btn11)
calcbutton.appendChild(btn12)
calcbutton.appendChild(btn13)
calcbutton.appendChild(btn14)
calcbutton.appendChild(btn15)
calcbutton.appendChild(btn16)
calcbutton.appendChild(btn17)
calcbutton.appendChild(btn18)
calcbutton.appendChild(btn19)


container1.appendChild(calcbutton);
document.body.appendChild(container1);

const style=document.createElement("style")
style.textContent=`
body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#container{
    background-color: black;
    width: 500px;
    border-radius: 30px;
    overflow:hidden;
}

button{
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: grey;
    color: white;
    font-size: 4rem;
    font-weight: 900;
    cursor: pointer;
}

#calcinput{
    width: 95%;
    padding: 20px;
    font-size: 6rem;
    border: none;
    background-color: black;
    color: white;
    font-size: 4rem;
    font-weight: 900;
    cursor: pointer;
}
#calcinput:focus{
    outline: none;
    border: none;
    cursor: pointer;
}

#keyarrange{
    display: grid;
    grid-template-columns: repeat(4,1fr);   
    gap: 10px;
    padding: 20px;
}

#clear{
    grid-column: span 2;
    width: 200px;
    border-radius: 30px;
}

.actionbutton{
    background-color: red;
}
    @media (max-width: 768px){
body{
    overflow: scroll;
}
    
}
`
document.head.appendChild(style);



function display(input){
    input1.value+=input;
}

function toggleSign() {
  if (input1.value) {
    if (input1.value.startsWith("-")) {
      input1.value = input1.value.slice(1);
    } else {
      input1.value = "-"+input1.value;
    }
  }
}

function percent() {
    input1.value = String(parseFloat(input1.value)/100);
}


function clearall(){
    input1.value="";
}

function finalanswer(){
    input1.value=eval(input1.value);

}

}


function stopwatch(){
    let stopwatch=document.createElement("div")
    stopwatch.innerHTML=`
    <h1>Stopwatch</h1>
    <div class="container">
        <div id="display">00:00:00:00</div>
    
        <div class="control">
            <button id="start">Start</button>
            <button id="stop">Stop</button>
            <button id="reset">Reset</button>
        </div>
    </div>
    `
    let style=document.createElement("style")
    style.textContent=`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: system-ui, sans-serif;
}

h1{
    text-align: center;
    margin-bottom: 60px;
    font-size: 5rem;
}

.container{
    text-align: center;
    height: 300px;
    width: 500px;
    border: solid black;
    border-radius: 60px;
    margin: auto;
    padding-top: 60px;
    padding-left: 60px;
    font-size: 5rem;
    box-shadow: rgba(0,0,0,0.25) 0px 54px 55px, rgba(0,0,0,0.12) 0px -12px 30px;
}

button{
    height: 100px;
    width: 190px;
    font-size: 3rem;
    font-weight: 900;
    border: none;
    border-radius: 50%;
    margin: 10px;
    margin-left: 100px;
}

button:hover{
    cursor: pointer;
    box-shadow: rgba(0,0,0,0.25) 0px 10px 20px;
}

#start{ background-color: red; }
#stop{ background-color: blue; }
#reset{ background-color: green; }

@media (max-width: 768px){
body{
    overflow: scroll;
}

    
}
    `
    document.head.appendChild(style)
    document.body.appendChild(stopwatch)

    // Variables
    let display = document.getElementById("display");
    let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
    let timer=null;

    // Functions
    function start() {
        if (timer !== null) return; 
        timer=setInterval(() => {
            milliseconds += 10;

            if (milliseconds >= 1000) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }

            display.textContent =
              String(hours).padStart(2, "0") + ":" +
              String(minutes).padStart(2, "0") + ":" +
              String(seconds).padStart(2, "0") + ":" +
              String(milliseconds/10).padStart(2, "0");
        }, 10);
    }

    function stop(){
        clearInterval(timer);
        timer = null;
    }

    function reset(){
        stop();
        hours = minutes = seconds = milliseconds = 0;
        display.textContent ="00:00:00:00";
    }

    // Attach events to buttons (instead of inline onclick)
    document.getElementById("start").addEventListener("click", start);
    document.getElementById("stop").addEventListener("click", stop);
    document.getElementById("reset").addEventListener("click", reset);
}