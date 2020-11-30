document.addEventListener("DOMContentLoaded",function(){
 const count = document.getElementById('counter')   
 let counter = document.getElementById("counter");
 const minus = document.getElementById("minus");
 const plus = document.getElementById("plus");
 const heart = document.getElementById("heart");
 const submit = document.getElementById("submit");
 const pause = document.getElementById("pause");
 const buttons = [minus, plus, heart, submit]
 let timePaused = false;
 
 let timeRunning = setInterval(increment, 1000)
 
 function increment() {
     if (timePaused == false) {
     counter.innerText++;
     }
 }

})

    minus.addEventListener('click', function(){
    counter.innerText--;
    })

    plus.addEventListener('click', function(){
    counter.innerText++;
    })

    pause.addEventListener('click', function(){
        if (pause.innerText === 'pause' ){
        pause.innerText = 'resume'
        buttons.forEach(function(button) {
            button.disabled = true
        })
        timePaused = true ;}
    })





