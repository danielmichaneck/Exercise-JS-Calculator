alert("Welcome to the calculator!");

while(true){

const o = prompt("Please input what operation you would like to perform. add, subtract, multiply, or divide.")

if (o === "add" || o === "subtract" || o === "multiply" || o === "divide"){

    let a = prompt("Please enter the first number.");

    if (parseInt(a)){

        let b = prompt("Please enter the second number.");

        if (parseInt(b)){
            a = parseInt(a);
            b = parseInt(b);
            let answer;
            
            if (o == "add"){
                answer = a + b;
            }
            else if (o == "subtract"){
                answer = a - b;
            }
            else if (o == "multiply"){
                answer = a * b;
            }
            else if (o == "divide"){
                answer = a / b;
            }
            
            alert(`You ${o} numbers ${a} and ${b} and get the result ${answer}!`);
        }
        else alert(`${b} is not a valid number!`);
    }
    else alert(`${a} is not a valid number!`);
}
else alert(`${o} is not a valid operation!`);

}