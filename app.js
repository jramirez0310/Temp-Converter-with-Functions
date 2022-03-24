function askName(){
    var n = prompt("What is your name?")

    return n
}

function welcome(a){
    alert(`Welcome back, ${a}, to the newly improved temperature converter with functions!`)
}

welcome(askName())

function choice(){
    var a = prompt("Are you trying to convert Farenheight to Celcius (c) or are you trying to convert Celcius to Farenheight (f)?")

    return a
}

function askTempCel(){
    var c = prompt("What is the temp in Celcius?")
    return c
}

function choiceAns(b){
    if (b == "f"){

    } else if (b == "c"){
        
    }
}