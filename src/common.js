// Check if String is a number
function isNumeric(str) {
    if (typeof str != "string") return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
}

// W... A... I... T...
async function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

// Randomly capitalize strings
function randomCaps(str) {
    working = '';
    Array.from(str).forEach(element => {
        if (Math.random() < 0.5) {
            working += element.toLowerCase();
            return;
        }
        working += element.toUpperCase();
    });
    return working;
}

// Export Said Functions
module.exports = {
    isNumeric,
    sleep,
    randomCaps
}