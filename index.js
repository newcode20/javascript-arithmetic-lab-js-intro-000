add(1+80)
subtract(60-40)
multiply(2*3.4)
divide(5.0/2.5)

var number = 10

function add5() {
  number += 5
}

function divideBy3(){
  number /=3
}

divideBy3()
console.log(number)

add5()

console.log(number)

//reset number
number =10

add5()
console.log(number)

divideBy3()

console.log(number)

function increment(number){
  number ++
}
function decrement(number){
  number--
}

function makeInt(string){
  parseInt(string, 10)
}
function perserveDecimal(string){
    parseFloat(string, 10)
}
function makeInt(string){
    parseInt(string, 10)
}