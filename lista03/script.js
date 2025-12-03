function conversao(){

    var C = document.getElementById("m1").value
    var temp = parseFloat(document.getElementById("resp").value)


    temp.textContent = 9 * C / 5 + 32
    temp.style.color = "red"
}