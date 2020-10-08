window.onload = function () {
    var add = document.getElementById('increment');
    var min = document.getElementById('decrement');
    var container = document.getElementById('container');

    var int = document.getElementById('number');
    var integer = 0;

    add.addEventListener('click', function () {
        integer += 1;
        int.innerHTML = integer;

        if (integer == -5) {
            container.classList.remove('con-bg-purple');
            container.classList.add('con-bg-yellow')
        } if (integer == 0) {
            container.classList.remove("con-bg-yellow")
        } if (integer > 5) {
            container.classList.add("con-bg-green")
        }
    })
    min.addEventListener('click', function () {
        integer -= 1;
        int.innerHTML = integer;
        if (integer <= 5) {
            container.classList.remove("con-bg-green")
        } if (integer < 0) {
            container.classList.add("con-bg-yellow")
        } if (integer < -5) {
            container.classList.remove("con-bg-yellow")
            container.classList.add("con-bg-purple")
        } if (integer <= -10) {
            alert('Back to home again');
            window.location.href = "index.html"
        }
    })
}