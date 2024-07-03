/* ##### Welcome message #####*/
alert("Welcome to the calculator!");

/* ##### Loop  #####*/
while(true){

    /* ##### Get operation #####*/
    let o = prompt("Please input what operation you would like to perform. add, subtract, multiply, or divide.")

    if (o == "add" || o == "subtract" || o == "multiply" || o == "divide" || o == "+" || o == "-" || o == "*" || o == "/"){

        /* ##### Switch signs to words #####*/
        switch(o){
            case "+": o = "add"; break;
            case "-": o = "subtract"; break;
            case "*": o = "multiply"; break;
            case "/": o = "divide"; break;
        }

        /* ##### Get first and second number and check that they are integers #####*/
        let a = prompt("Please enter the first number.");

        if (parseInt(a)){

            let b = prompt("Please enter the second number.");

            if (parseInt(b)){

                /* ##### Calculate result #####*/
                a = parseInt(a);
                b = parseInt(b);
                let result;
                
                switch(o){
                    case "add":
                        result = a + b;
                    break;
                    case "subtract":
                        result = a - b;
                    break;
                    case "multiply":
                        result = a * b;
                    break;
                    case "divide":
                        result = a / b;
                    break;
                }
                
                console.log(`You ${o} numbers ${a} and ${b} and get the result ${result}!`);
                alert(`You ${o} numbers ${a} and ${b} and get the result ${result}!`);
            }
            else alert(`${b} is not a valid number!`);
        }
        else alert(`${a} is not a valid number!`);
    }
    else alert(`${o} is not a valid operation!`);

}