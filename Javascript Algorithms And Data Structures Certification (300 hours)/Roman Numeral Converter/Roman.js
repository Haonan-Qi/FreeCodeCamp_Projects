function convertToRoman(num) {
    let arrayVerNumber = num.toString().split("").reverse();
    let highestLevelOfN = arrayVerNumber.length
    let numToRom = [
        ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["M", "MM", "MMM"]
    ]

    //special case include 4 and 9

    let romanNumber = []
    for (let i in [...Array(highestLevelOfN).keys()]) {
        romanNumber.unshift(numToRom[i][arrayVerNumber[i] - 1])
    }
    console.log(romanNumber.join(""))
    return romanNumber.join("");
}

convertToRoman(36)