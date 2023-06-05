var img = document.querySelector('#img')

var deg = 0
var imgx = 0
var imgy = 0
var imgl = 0
var imgt = 0
var y = 0 
var index = 0

window.addEventListener('mousemove',function(xyz){
    imgx = xyz.x - img.offsetLeft - img.clientWidth /2
    imgy = xyz.y - img.offsetTop - img.clientHeight /2
    deg = 360*Math.atan(imgy/imgx)/(2*Math.PI)
    index= 0
    var x = event.clientX
    if(img.offsetLeft<x){
        y=-180
    }else{
        y=0
    }
})
setInterval(()=>{
    img.style.transform = "rotateZ("+deg+"deg) rotateY("+y+"deg)"
    index++
    if(index<50){
        imgl+=imgx/50
        imgt+=imgy/50
    }
    img.style.left = imgl+"px"
    img.style.top = imgt+"px"
},10)