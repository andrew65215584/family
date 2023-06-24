let text = ["Not"," just"," photos"
];

let i = 0;
let speed = 300;

function type() {
    if (i < text.length) {
        const span = document.createElement('span');
        span.innerText = text[i]
        document.querySelector("h1").appendChild(span);
        i++;
        setTimeout(type, speed)
    }
}

type();