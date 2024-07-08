var x = y = z = 0
// x - milliseconds, y - seconds, z - minutes
var state = false
var myInterval
var start
function start_timer(){
    x = y = z = 0
    state=false
    myInterval = setInterval(myTimer, 10)
    start = document.getElementById('btn1')
    start.diabled = true
}

function myTimer(){
    x=x+1
    if(x===100){
        x=0
        y = y+1
        if(y===60){
            z=z+1
            y=0
            if(z===60){
                x=y=z=0
            }
        }
    }
    document.getElementById('result').innerHTML = 
    `<h1>`+String(z).padStart(2,'0')+':'+String(y).padStart(2,'0')+':'+String(x).padStart(2,'0')+`</h1>`
}

function pr_timer(){
    state=!state
    if(state===true){
        //stop timer
        clearInterval(myInterval)
    }
    else{
        //resume timer
        myInterval=setInterval(myTimer,10)
    }
}

function clear_timer(){
    clearInterval(myInterval)
    x=y=z=0
    state=false
    document.getElementById('result').innerHTML = 
    `<h1>`+String(z).padStart(2,'0')+':'+String(y).padStart(2,'0')+':'+String(x).padStart(2,'0')+`</h1>`
    start = document.getElementById('btn1')
    start.diabled = true
}