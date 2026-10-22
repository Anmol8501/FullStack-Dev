function isArmstrong(number) {
    var temp = number;
    var sum = 0;
    var digits = 0;

    while (temp > 0) {
    digits++;
    temp = Math.floor(temp / 10);
    }

    temp = number;

    while (temp > 0) {
    var rem = temp % 10;
    sum += Math.pow(rem, digits);
    temp = Math.floor(temp / 10);
    }

    return sum === number;
}
function checkArmstrong() {
    const input = document.getElementById("numberInput");
    const result = document.getElementById("result");

        console.log("Armstrong check:", isArmstrong(input));

    var num = parseInt(input.value, 10);
    if (isNaN(num)) {
        result.textContent = "Please enter a valid number.";
        return;
    }
    if (isArmstrong(num)) {
        result.textContent = num + " is an Armstrong number.";
    } else {
        result.textContent = num + " is not an Armstrong number.";
    }
}



