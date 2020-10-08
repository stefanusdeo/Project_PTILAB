var btn = document.getElementById('change')
var text = document.getElementById('color')
var change = document.getElementById('btnhref')

change.addEventListener('click', function () {
    window.location.href = "index.html"
})

var generator = function () {
    newColor = '#' +
        (Math.random() * 0xFFFFFF << 0).toString(16);
    console.log(newColor.length);
    if (newColor.length < 7) {
        generator();
    }
}

btn.addEventListener('click', function () {
    generator()

    document.body.style.background = newColor;
    btn.style.color = newColor;
    text.innerHTML = newColor;
})