// header menu
let bars=document.getElementById("bars")
    let menu=document.getElementById("menu")
    let close=document.getElementById("close")
    bars.addEventListener("click",()=>{
        menu.classList.remove("hidden")
        document.body.classList.add("overlay")
    })
    close.addEventListener("click",()=>{
        menu.classList.add("hidden")
        document.body.classList.remove("overlay")
    })
    window.addEventListener("click",(event)=>{
        if(!bars.contains(event.target) && !menu.contains(event.target)){
            menu.classList.add("hidden")
            document.body.classList.remove("overlay")
    }
})

// scroll to top
let scrollToTop = document.getElementById("scrollToTop")
window.onscroll = function () {
    if (window.scrollY > 400) {
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
    }
};
scrollToTop.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})
