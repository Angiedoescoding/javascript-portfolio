let text = "Hi there!";
let i = 0;
let speed = 70;

function hi() {
    if (i < text.length) {
        document.querySelector("#hello").textContent += text.charAt(i);
        i++;
        setTimeout(hi, speed);
    }
}

hi()

