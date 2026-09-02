// Question 01:
function describeValue(value) {
    let result;
    if (value) {
        result = "truthy";
    } else {
        result = "falsy";
    }
    return (typeof (value) + " | " + result);
}
// console.log(describeValue(null));

// Question 02:
function getDayType(day) {
    switch (true) {
        case day === "Friday" || day === "Saturday":
            return "Weekend";
        case day === "Sunday" || day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday":
            return "Working Day";
        default:
            return "Invalid Day";
    }
}
// console.log(getDayType("Friday"));

// Question 03:
function validateUsername(Username) {
    if (Username.length < 4) {
        return "Too Short";
    } else if (Username.includes(" ")) {
        return "No Space Allowed";
    } else if (Username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    } else {
        return "Available";
    }
}
// console.log(validateUsername("Admineral"));

// Question 04:
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let result = 50;
    if (distance > 2) result += (distance - 2) * 15;
    result += waitingMinutes * 2;
    if (isNight) result += .2 * result;
    return result;
}
// console.log(getCngFare(10, true, 10));

// Question 05:
const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;
    if (runsNeeded <= 0) {
        return "Won";
    } else if (ballsLeft <= 0) {
        return "Lost";
    } else {
        let requiredRate = (runsNeeded / ballsLeft) * 6;
        let verdict;
        if (requiredRate <= 6) {
            verdict = "Comfortable";
        } else if (requiredRate <= 12) {
            verdict = "Tough";
        } else {
            verdict = "Almost Impossible";
        }
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
    }
};
// console.log(getChaseVerdict(100, 90, 12));