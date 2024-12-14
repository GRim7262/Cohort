// Create a counter in JS (counts down from 30 to 0)

let count = 30;

function counter() {
    console.log(count);
    count--;

    if (count < 0) {
        clearInterval(timer);
    }
}

const timer = setInterval(counter, 1000);