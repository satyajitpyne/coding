
addEventListener("mousemove", (e)=>{
 console.log(e.clientX, e.clientY)

 document.body.style.setProperty("--x", e.clientX + 'px')
 document.body.style.setProperty('--y', e.clientY + 'px')
})
const para = document.querySelector('.box p')
const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const j = para.innerText
para.addEventListener("mouseenter", function(){
     var h = setInterval(function(){ 
    const jk = j.split('').map(function(){
        return character.split('')[ Math.floor(Math.random()*53)]
        
    }).join('')
    para.innerText = jk
    
    },30)
    setTimeout(function(){
        clearInterval(h)
        para.innerHTML = 'Welcome to Satya website'

    },900)
})