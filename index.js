output = document.getElementById("output");

nuz = true

dotstopper = false

signstopper = false

function b7() {
    
    if (nuz === true) {
        output.textContent = "";
        document.getElementById("output").value = output.textContent;
        nuz = false
    } 

    output.textContent += "7";
    document.getElementById("output").value = output.textContent;
    signstopper = false
}

function b8() {
    
    if (nuz === true) {
        output.textContent = "";
        document.getElementById("output").value = output.textContent;
        nuz = false
    } 

    output.textContent += "8";
    document.getElementById("output").value = output.textContent;
    signstopper = false
}

function b9() {
    
    if (nuz === true) {
        output.textContent = "";
        document.getElementById("output").value = output.textContent;
        nuz = false
    } 

    output.textContent += "9";
    document.getElementById("output").value = output.textContent;
    signstopper = false
}

function b4() {
    
    if (nuz === true) {
        output.textContent = "";
        document.getElementById("output").value = output.textContent;
        nuz = false
    } 

    output.textContent += "4";
    document.getElementById("output").value = output.textContent;
    signstopper = false
}

function b5() {
    
    if (nuz === true) {
        output.textContent = "";
        document.getElementById("output").value = output.textContent;
        nuz = false
    } 

    output.textContent += "5";
    document.getElementById("output").value = output.textContent;
    signstopper = false
}

function b6() {
    
    if (nuz === true) {
        output.textContent = "";
        document.getElementById("output").value = output.textContent;
        nuz = false
    } 

    output.textContent += "6";
    document.getElementById("output").value = output.textContent;
    signstopper = false
}

function b1() {
    
    if (nuz === true) {
        output.textContent = "";
        document.getElementById("output").value = output.textContent;
        nuz = false
    } 

    output.textContent += "1";
    document.getElementById("output").value = output.textContent;
    signstopper = false
}

function b2() {
    
    if (nuz === true) {
        output.textContent = "";
        document.getElementById("output").value = output.textContent;
        nuz = false
    } 

    output.textContent += "2";
    document.getElementById("output").value = output.textContent;
    signstopper = false
}

function b3() {
    
    if (nuz === true) {
        output.textContent = "";
        document.getElementById("output").value = output.textContent;
        nuz = false
    } 

    output.textContent += "3";
    document.getElementById("output").value = output.textContent;
    signstopper = false
}

function b0() {
    
    if (nuz === true) {
        output.textContent = "";
        document.getElementById("output").value = output.textContent;
        nuz = false
    } 

    output.textContent += "0";
    document.getElementById("output").value = output.textContent;
    signstopper = false
}

function bdot() {
    
    if (nuz === true) {
        output.textContent = "";
        document.getElementById("output").value = output.textContent;
        nuz = false
    }

    if (dotstopper === true) {
        a = 1;
    } else {
        output.textContent += ".";
        document.getElementById("output").value = output.textContent;
        dotstopper = true;
    }
}

function bcl() {
    
    if (nuz === true) {
        output.textContent = "";
        document.getElementById("output").value = output.textContent;
        nuz = false
    }

    output.textContent = "0";
    document.getElementById("output").value = output.textContent;
    nuz = true;
}

function bdiv() {
    
    if (nuz === true) {
        output.textContent = "";
        document.getElementById("output").value = output.textContent;
        nuz = false
    }

    if (signstopper === true) {
        a = 1;
    } else {
        output.textContent += "/";
        document.getElementById("output").value = output.textContent;
        signstopper = true;
    }
}

function bmul() {
    
    if (nuz === true) {
        output.textContent = "";
        document.getElementById("output").value = output.textContent;
        nuz = false
    }

    if (signstopper === true) {
        a = 1;
    } else {
        output.textContent += "*";
        document.getElementById("output").value = output.textContent;
        signstopper = true;
    }
}

function bplu() {
    
    if (nuz === true) {
        output.textContent = "";
        document.getElementById("output").value = output.textContent;
        nuz = false
    }

    if (signstopper === true) {
        a = 1;
    } else {
        output.textContent += "+";
        document.getElementById("output").value = output.textContent;
        signstopper = true;
    }
}

function bmin() {
    
    if (nuz === true) {
        output.textContent = "";
        document.getElementById("output").value = output.textContent;
        nuz = false
    }

    if (signstopper === true) {
        a = 1;
    } else {
        output.textContent += "-";
        document.getElementById("output").value = output.textContent;
        signstopper = true;
    }
}

function evaluation() {
    let expression = output.textContent;
    let result;
    try {
        result = eval(expression);
        output.textContent = result;
        document.getElementById("output").value = output.textContent;
        nuz = true;
    } catch (error) {
        output.textContent = "Error";
        document.getElementById("output").value = output.textContent;
    }
}