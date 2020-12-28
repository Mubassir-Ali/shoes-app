const img =document.querySelector('img');
img.addEventListener('mouseover',()=>{
    img.style.transform= 'translateZ(200px) rotate(-45deg)'
})

img.addEventListener('mouseleave',()=>{
    img.style.transform='rotate(0deg)'
})
