/* creating random colors, but only shades of reds */
function getRandomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    /* note the paranths(top left corner of keyboard) to create temperant literal string*/
    return `rgb(${r},${g},${b})`;
}

 const h1 = document.querySelector('h1');

/*h1.style.color = getRandomColor();

setInterval(function(){
    h1.style.color = getRandomColor();
},500); */


const letters = document.querySelectorAll('.letter');

/* changing each letter repeatedly */
setInterval(function(){
    for(let letter of letters){
        letter.style.color = getRandomColor();
    }
},500);

