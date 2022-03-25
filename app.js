function askName(){
    var n = prompt("What is your name?")
    return n
} // 10

function welcome(a){
    alert(`Welcome back, ${a}, to the newly improved temperature converter with functions!`)
}

welcome(askName())

function choice(){
    var a = prompt("Are you trying to convert Farenheight to Celcius (c) or are you trying to convert Celcius to Farenheight (f)?")

    return a
} // 15

function choiceAns(a){
    if(a == "f"){
        
    } else if (a == "c"){

    }
}

function askTempCel(){
    var c = Number(prompt("What is the temp in Celcius?"))
    return c
} // 20

function ctof(a){
    var b = (((a * 9) / 5) + 32)
    return b
} // 20

ctof(askTempCel())

console.log(ctof())

function farenAns(a, b){
    alert(`Because it is ${a} degrees celcius, then it is ${b} degrees farenheight outside.`)
}

farenAns(askTempCel(), ctof())

console.log(farenAns())

//80