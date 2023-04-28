let display = document.querySelector('#display');
// let button = Array.from(document.querySelectorAll('.button'));
let button = Array.from(document.getElementsByClassName('button'));
button.map(button => {
    button.addEventListener('click', function(e) {
        // console.log(e.target.innerText);
        // display.value += value;
        // console.log('clicked');
        // console.log(e);
        // console.log(e.target);
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case 'backspace':
                if (display.innerText.length > 0) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText).toFixed(5);
                } catch {
                    display.innerText='Invalid Expression';
                }
                break;
            default:
                display.innerText+=e.target.innerText;
                break;
        }})
})
