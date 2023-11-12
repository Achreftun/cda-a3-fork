const bold = document.querySelector('#bold');
const  underline= document.querySelector('#underline');
const italic = document.querySelector('#italic');
const rouge = document.querySelector('#rouge');
const bleu = document.querySelector('#bleu');
const vert = document.querySelector('#vert');
const textarea = document.querySelector('#textarea');
const button = document.querySelector('button');
const result = document.querySelector('#result');



button.addEventListener('click', () => {
    const value = textarea.value
    if (bold.checked) textarea.value.style.fontWeight 
    const p = document.createElement('p');
    p.textContent = value;
    result.append(p);
})