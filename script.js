addEventListener("mousemove", (e)=>{
 console.log(e.clientX, e.clientY)

 document.body.style.setProperty("--x", e.clientX + 'px')
 document.body.style.setProperty('--y', e.clientY + 'px')
})
const para = document.querySelector(".box h2");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let para1 = para.innerText;
let iteration = 0;

function randomText() {
     const jk = para1.split("").map((ch, index) => {
        iteration += 0.05;

        if (index < iteration) {
            return ch; 
        }
        return characters.split("")[Math.floor(Math.random()*52)];

    }).join("");

    para.innerHTML = jk;  
}

setInterval(randomText, 500);
