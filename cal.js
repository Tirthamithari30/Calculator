function add()
{
    let firstN = Number(document.getElementById("firstNumber").value)
    let secondN = Number(document.getElementById("secondNumber").value)

    alert("Addition of " +firstN+ " and " +secondN+ " is : " +(firstN  + secondN))
}

function sub()
{
    let firstN = Number(document.getElementById("firstNumber").value)
    let secondN = Number(document.getElementById("secondNumber").value)

    alert("Subtraction of " +firstN+ " and " +secondN+ " is : " +(firstN - secondN))
}

function mult()
{
    let firstN = Number(document.getElementById("firstNumber").value)
    let secondN = Number(document.getElementById("secondNumber").value)

    alert("Multiplication of " +firstN+ " and " +secondN+ " is : " +(firstN * secondN))
}

function div()
{
    let firstN = Number(document.getElementById("firstNumber").value)
    let secondN = Number(document.getElementById("secondNumber").value)

    alert("Division of " +firstN+ " and "  +secondN+ " is : " +(firstN / secondN))
}


function fact()
{
    let firstN =  Number(document.getElementById("firstNumber").value)
    let fact = 1;

    for(let i = 1; i<=firstN; i++)
    {
        fact*=i;
    }
 
    alert("Foctorial of " +firstN+ " is : "+fact);
}

function mod() {
    let firstN = Number(document.getElementById("firstNumber").value)
    let secondN = Number(document.getElementById("secondNumber").value)
    alert("Modulus of " +firstN+ " and "  +secondN+ " is : " +(firstN % secondN))
}

function sin() {
    let firstN = Number(document.getElementById("firstNumber").value)
    let result = Math.sin(firstN * Math.PI / 180);

    alert("Sin of " + firstN + " degrees is : " + result)
}

function log() {
    let firstN = Number(document.getElementById("firstNumber").value)
    if (firstN <= 0) {
        alert("Error: Logarithm is only defined for positive numbers.")
        return;
    }
        let result = Math.log(firstN)
    alert("Log of " + firstN + " is : " + result)
}

function AC() {
    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
}

function expo() {
    let firstN = Number(document.getElementById("firstNumber").value);
    let result = Math.exp(firstN);

    alert("Exponential of " + firstN + " is : " + result);
}