const currentDate = new Date();
// console.log(currentDate)
// console.log("Current Date: " + currentDate, '\n')
// /* When you concatenate the Date object with a string
// ("Current Date: "), JavaScript automatically calls the
//  .toString() method on the Date object. */

// console.log("Date: " + currentDate.getDate())
// console.log(currentDate.getMonth() + 1)
// /* Months are zero-indexed, so you need to add 1.
// If you concatenate the Date object with a string,
// the current month will append directly to the string.
// For example, if the current month is 9,
// when concatenated with the string, it becomes '91' */
// console.log("Year: " + currentDate.getFullYear(), '\n')

// console.log("Hours: " + currentDate.getHours())
// console.log("Minutes: " + currentDate.getMinutes())
// console.log("Seconds: " + currentDate.getSeconds(), '\n')

// currentDate.setFullYear(2022)
// console.log("After setFullYear: ", currentDate)

// currentDate.setMonth(7);
// console.log("After setMonth: ", currentDate);

// console.log("Time in milliseconds since 1970: ", currentDate.getTime())

// function calculateSum() {
//     let a = 0;
//     for (let i = 0; i < 100000; i++) {
//         a += i;
//     }
//     return a;
// }

// const beforeDate = new Date();
// const beforeTimeInMs = beforeDate.getTime();

// calculateSum();

// const afterDate = new Date();
// const afterTimeInMs = afterDate.getTime();

// console.log(afterTimeInMs - beforeTimeInMs)

function currentTimePrint() {
    console.log(
        "HH:" + new Date().getHours(),
        "MM:" + new Date().getMinutes(),
        "SS:" + new Date().getSeconds())
}

setInterval(currentTimePrint, 1000)