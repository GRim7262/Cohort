// WAF that finds the sum of two numbers

function sum(a, b, fnToCall) {
    const result = a + b;
    return fnToCall(result)
}

// WAF that displays this result in a pretty format

function prettyFormat(data) {
    console.log("Sum of two numbers is: " + data);
}

// WAF that takes this sum and prints it in passive tense

function passiveTense(data) {
    console.log("The two numbers are summed: " + data);
}

sum(6, 2, prettyFormat);