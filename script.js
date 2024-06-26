let screenItem = document.getElementById("screenDisplay");

//evalutaion
function evaluateExpression(expression) {
    try {
        // Create a new function to evaluate the expression
        const func = new Function('return ' + expression);
        const result = func();
        return result.toString();
    } catch (error) {
        return "Invalid expression";
    }
}

document.getElementById("equals").addEventListener("click", function () {
    let exp = screenItem.innerHTML;
    let val = evaluateExpression(exp);
    screenItem.innerHTML = val;
    if (val != "Invalid expression") {
        const node = document.createElement("p");
        node.innerHTML = exp + " = " + val;
        let history = document.getElementById("history");
        history.insertBefore(node, history.firstChild);
    }
})


//clear all
document.getElementById("clearAll").addEventListener("click", function () {
    screenItem.innerHTML = '';
})

//back space
document.getElementById("backspace").addEventListener("click", function () {
    let text = screenItem.innerHTML;
    if (text != "Invalid expression") {
        let lt = text.length;
        screenItem.innerHTML = text.substring(0, lt - 1);
    }
})

//items
document.getElementById("leftPth").addEventListener("click", function () {
    if (screenItem.innerHTML == "Invalid expression") {
        screenItem.innerHTML = `(`;
    } else {
        screenItem.innerHTML += `(`;
    }
});
document.getElementById("rightPth").addEventListener("click", function () {
    if (screenItem.innerHTML == "Invalid expression") {
        screenItem.innerHTML = `)`;
    } else {
        screenItem.innerHTML += `)`;
    }
});

document.getElementById("*").addEventListener("click", function () {
    if (screenItem.innerHTML == "Invalid expression") {
        screenItem.innerHTML = "*";
    } else {
        screenItem.innerHTML += "*";
    }
});

document.getElementById("1").addEventListener("click", function () {
    if (screenItem.innerHTML == "Invalid expression") {
        screenItem.innerHTML = "1";
    } else {
        screenItem.innerHTML += "1";
    }
});

document.getElementById("2").addEventListener("click", function () {
    if (screenItem.innerHTML == "Invalid expression") {
        screenItem.innerHTML = "2";
    } else {
        screenItem.innerHTML += "2";
    }
});

document.getElementById("3").addEventListener("click", function () {
    if (screenItem.innerHTML == "Invalid expression") {
        screenItem.innerHTML = "3";
    } else {
        screenItem.innerHTML += "3";
    }
});

document.getElementById("4").addEventListener("click", function () {
    if (screenItem.innerHTML == "Invalid expression") {
        screenItem.innerHTML = "4";
    } else {
        screenItem.innerHTML += "4";
    }
});

document.getElementById("5").addEventListener("click", function () {
    if (screenItem.innerHTML == "Invalid expression") {
        screenItem.innerHTML = "5";
    } else {
        screenItem.innerHTML += "5";
    }
});

document.getElementById("6").addEventListener("click", function () {
    if (screenItem.innerHTML == "Invalid expression") {
        screenItem.innerHTML = "6";
    } else {
        screenItem.innerHTML += "6";
    }
});

document.getElementById("7").addEventListener("click", function () {
    if (screenItem.innerHTML == "Invalid expression") {
        screenItem.innerHTML = "7";
    } else {
        screenItem.innerHTML += "7";
    }
});

document.getElementById("8").addEventListener("click", function () {
    if (screenItem.innerHTML == "Invalid expression") {
        screenItem.innerHTML = "8";
    } else {
        screenItem.innerHTML += "8";
    }
});

document.getElementById("9").addEventListener("click", function () {
    if (screenItem.innerHTML == "Invalid expression") {
        screenItem.innerHTML = "9";
    } else {
        screenItem.innerHTML += "9";
    }
});

document.getElementById(".").addEventListener("click", function () {
    if (screenItem.innerHTML == "Invalid expression") {
        screenItem.innerHTML = ".";
    } else {
        screenItem.innerHTML += ".";
    }
});

document.getElementById("+").addEventListener("click", function () {
    if (screenItem.innerHTML == "Invalid expression") {
        screenItem.innerHTML = "+";
    } else {
        screenItem.innerHTML += "+";
    }
});

document.getElementById("-").addEventListener("click", function () {
    if (screenItem.innerHTML == "Invalid expression") {
        screenItem.innerHTML = "-";
    } else {
        screenItem.innerHTML += "-";
    }
});

document.getElementById("/").addEventListener("click", function () {
    if (screenItem.innerHTML == "Invalid expression") {
        screenItem.innerHTML = "/";
    } else {
        screenItem.innerHTML += "/";
    }
});

document.getElementById("0").addEventListener("click", function () {
    if (screenItem.innerHTML == "Invalid expression") {
        screenItem.innerHTML = "0";
    } else {
        screenItem.innerHTML += "0";
    }
});
