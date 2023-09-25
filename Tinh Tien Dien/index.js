function billCal() {
    let cons = +document.getElementById("cons-input").value;
    if (cons <= 50) {
        let bill = cons * 50;
        document.getElementById('result').innerText ="Tiền điện bạn là: " + Math.floor(bill) + " VND"
    } else if (cons <= 100) {
        let bill = 50 * 1678 + cons * 1734;
        document.getElementById('result').innerText ="Tiền điện của bạn là: " + Math.floor(bill) + " VND"
    } else if (cons <= 200) {
        let bill = 50 * 1678 + 50 * 1734 + cons * 2014;
        document.getElementById('result').innerText ="Tiền điện của bạn là: " + Math.floor(bill) + " VND"
    } else if (cons <= 300) {
        let bill = 50 * 1678 + 50 * 1734 + 100 * 2014 + cons * 2536;
        document.getElementById('result').innerText ="Tiền điện của bạn là: " + Math.floor(bill) + " VND"
    } else if (cons <=400) {
        let bill = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + cons * 2834;
        document.getElementById('result').innerText ="Tiền điện của bạn là: " + Math.floor(bill) + " VND"
    } else {
        let bill = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + cons * 2927;
        document.getElementById('result').innerText ="Tiền điện của bạn là: " + Math.floor(bill) + " VND"
    }

}