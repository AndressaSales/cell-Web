function ligar(){
    let b = window.document.getElementById('border');
    let f = document.querySelector('.figura');
    b.style.background = 'pink'
    b.style.boxShadow = '0 0 20px pink'
    f.style.color = 'purple'
}
function desligar(){
    let d = window.document.getElementById('border');
    let f = document.querySelector('.figura');
    d.style.background = 'black'
    d.style.boxShadow = 'none'
    f.style.color = 'black'
}