function isNumeric(str) {
    if (typeof str != "string") return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
}

  async function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}

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

module.exports = {
    isNumeric,
    sleep,
    randomCaps
}