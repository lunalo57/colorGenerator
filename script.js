
const getColor = () => {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    
    let color = `rgb(${r},${g},${b})`;
    
    document.body.style.backgroundColor = color;
    document.body.innerHTML = `<h2>${color}</h2>`;
}

setInterval(getColor,3000);