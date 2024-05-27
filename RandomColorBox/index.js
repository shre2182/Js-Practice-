let boxes = document.getElementsByClassName("box")
console.log(boxes)


function Randomc() {
    let var1 = 255*Math.random(); 
    let var2 =  255*Math.random();
    let var3 = 255*Math.random();

    return `rgb(${var1},${var2},${var3})`}


document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor=Randomc();
})
