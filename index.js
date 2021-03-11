var img=document.querySelector(".small-img-row")
var mainimg=document.querySelector(".main-img")
var col=document.querySelector(".col-2")
img.addEventListener("click",(event)=>{
    mainimg.src=event.target.src;
});

// mainimg.addEventListener("mousemove", (e) => {
//     console.log(e.pageY)
//   let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
//   let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
//   mainimg.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// });


