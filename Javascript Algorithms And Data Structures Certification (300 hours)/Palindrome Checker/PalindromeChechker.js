function palindrome(str) {

    let front = 0
    let back = str.length - 1

    while (back > front) {
        if (str[front].match(/[\W_]/)) {
            front++
            continue
        }
        if (str[back].match(/[\W_]/)) {
            back--
            continue
        }
        if (str[front].toLowerCase() !== str[back].toLowerCase()) return false
        front++
        back--
    }
    return true

}
/**
 * Note when we use method like`(toLowerCase(), replace(), split(), reverse(), join())`
 * We already go through the whole give strin whether its necessary or not  
 */