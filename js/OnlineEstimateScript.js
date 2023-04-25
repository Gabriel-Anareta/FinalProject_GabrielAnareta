let inputCollection = document.getElementsByTagName("input");
let selectCollection = document.getElementsByTagName("select");
let outputCollection = document.getElementsByClassName("calculatorOutput");

let inputCollectionVar = [];
let selectCollectionVar = [];
let outputCollectionVar = [];

let btn = document.getElementById("calculateBtn");
btn.addEventListener('click', calculateTotals);

let i;

function calculateTotals() {
    for (i = 0; i < outputCollection.length; i++) {
        outputCollectionVar[i] = 0;
        parseFloat(outputCollectionVar);
    }
    
    collectValues();
    calculateValues();
    displayValues();
}

function collectValues() {
    for (i = 0; i < inputCollection.length; i++) {
        inputCollectionVar[i] = parseFloat(checkValue(inputCollection[i].value));
        selectCollectionVar[i] = selectCollection[i].value;
    }
}

function checkValue(value) {
    if (!value)
        return 0;
    else
        return value;
}

function calculateValues() {
    for (i = 0; i < inputCollection.length; i++) {
        switch (i) {
            case 0: inputCollectionVar[i] *= 10; break;
            case 1: inputCollectionVar[i] *= 0.003; break;
            case 2: inputCollectionVar[i] *= 0.004; break;
            case 3: inputCollectionVar[i] *= 0.004; break;
            case 4: inputCollectionVar[i] *= 0.001; break;
            case 5: inputCollectionVar[i] *= 0.007; break;
            case 6: inputCollectionVar[i] *= 0.003; break;
            case 7: inputCollectionVar[i] *= 5; break;
            case 8: inputCollectionVar[i] *= 40; break;
            case 9: inputCollectionVar[i] *= 10; break;
            case 10: inputCollectionVar[i] *= 10; break;
            case 11: inputCollectionVar[i] *= 80; break;
        }
        
        addbyType(inputCollectionVar[i], selectCollectionVar[i]);
    }

    outputCollectionVar[2] += outputCollectionVar[1] * 12 + outputCollectionVar[0] * 48;
    outputCollectionVar[4] += outputCollectionVar[2] + outputCollectionVar[3];

    for (i = 0; i < outputCollection.length; i++) {
        outputCollectionVar[i] = Math.round(outputCollectionVar[i] * 100) / 100;
    }
}

function addbyType(value, type) {
    if (type == 'weekly')
        outputCollectionVar[0] += value;
    if (type == 'monthly')
        outputCollectionVar[1] += value;
    if (type == 'one-time')
        outputCollectionVar[3] += value;
}

function displayValues() {
    for (i = 0; i < outputCollection.length; i++) {
        outputCollection[i].innerHTML = `${outputCollectionVar[i]}$`;
    }
}