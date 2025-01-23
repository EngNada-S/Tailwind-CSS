// menu
const showMenu=document.getElementById("showMenu")
const menu=document.getElementById("menu")
const closeMenu=document.getElementById("closeMenu")
showMenu.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
    document.body.classList.add("before")
})
closeMenu.addEventListener("click",()=>{
    menu.classList.add("hidden")
    document.body.classList.remove("before")
})
window.addEventListener("click",(e)=>{
    if(!menu.contains(e.target) && !showMenu.contains(e.target)){
        menu.classList.add("hidden")
        document.body.classList.remove("before")
    }
})
// enlarge ing when scroll
const images=document.querySelectorAll("img")
window.addEventListener("scroll",()=>{
    images.forEach((img)=>{
        let imagePosition=img.getBoundingClientRect().top
        let windowHeight=window.innerHeight
        if(imagePosition<windowHeight && imagePosition >0){
            img.classList.add("scale-100")
        }
    })
})
// scroll to top
const scrollToTop=document.getElementById("scrollToTop")
window.addEventListener("scroll",()=>{
    if(window.scrollY > 350){
        scrollToTop.classList.remove("hidden")
    }else{
        scrollToTop.classList.add("hidden")
    }
})
scrollToTop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})