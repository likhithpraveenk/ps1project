const addBtn = document.querySelector("#idAddbtn");
const subBtn = document.querySelector("#idSubbtn");
const mulBtn = document.querySelector("#idMulbtn");
const divBtn = document.querySelector("#idDivbtn");
const modBtn = document.querySelector("#idModbtn");
const resultId = document.querySelector("#showresult");
//const armBtn = document.querySelector("#idArm");

compute = function (ope) {

    let nm1 = document.getElementById("nm1").value;
    let nm2 = document.getElementById("nm2").value;
    let str = "";
    let res = 0;
    if (ope === "+") {
        res = parseInt(nm1) + parseInt(nm2);
        str = `<h5 class='text-success mt-1'>Result: ${nm1} + ${nm2} =  ${res}</h5>`;
    } else if (ope === "*") {
        res = Number.parseInt(nm1) * Number.parseInt(nm2);
        str = `<h5 class='text-success mt-1'>Result: ${nm1} * ${nm2} =  ${res}</h5>`;
    } else if (ope === "-") {
        res = Number.parseInt(nm1) - Number.parseInt(nm2);
        str = `<h5 class='text-success mt-1'>Result: ${nm1} - ${nm2} =  ${res}</h5>`;
    } else if (ope === "/") {
        res = Number.parseInt(nm1) / Number.parseInt(nm2);
        str = `<h5 class='text-success mt-1'>Result: ${nm1} / ${nm2} =  ${res}</h5>`;
    } else if (ope === "%") {
        res = Number.parseInt(nm1) % Number.parseInt(nm2);
        str = `<h5 class='text-success mt-1'>Result: ${nm1} % ${nm2} =  ${res}</h5>`;
    }
    /*else if (ope === "Armstrong") {
           var numberOfDigits = nm1.length;
           var sum = 0;

           for (i = 0; i < numberOfDigits; i++) {
               sum += Math.pow(nm1.charAt(i), numberOfDigits);
           }

           if (sum == nm1) {
               str = `<h5 class='text-success mt-1'>The entered number is an Armstrong number.</h5>`;

           } else {
               str = `<h5 class='text-success mt-1'>The entered number is not an Armstrong number.</h5>`;
           }
       }*/

    return str;

}



addBtn.addEventListener('click', (event) => {
    resultId.innerHTML = compute("+");
});
subBtn.addEventListener('click', (event) => {
    resultId.innerHTML = compute("-");
});
mulBtn.addEventListener('click', (event) => {
    resultId.innerHTML = compute("*");
});
divBtn.addEventListener('click', (event) => {
    resultId.innerHTML = compute("/");
});
modBtn.addEventListener('click', (event) => {
    resultId.innerHTML = compute("%");
});
/*armBtn.addEventListener('click', (event) => {
    resultId.innerHTML = compute("Armstrong");
});*/