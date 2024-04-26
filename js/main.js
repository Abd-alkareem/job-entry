//logic for the minu btn 
document.querySelector("header .minu-btn").addEventListener("click",()=>{
    document.querySelector("header .minu-btn").classList.toggle("active");
    document.querySelector("header .links").classList.toggle("active");
})
document.querySelectorAll("header  .links li").forEach((e)=>{
    e.addEventListener("click",()=>{
    document.querySelectorAll("header .links li").forEach((li)=>{
        li.classList.remove("active");
    })
    e.classList.add("active");
    document.querySelector("header .minu-btn").classList.remove("active");
    document.querySelector("header .links").classList.remove("active");
    })
})


//formath the position for the header
window.addEventListener("scroll",()=>{

    if(window.scrollY < 100){
    document.querySelector("header").style.position = `relative`; 
    document.querySelector("header").style.top = `0px`;
    document.querySelector("header").style.transition = `0.0s`;
    }
    else if(window.scrollY >= 100 && window.scrollY < 360){
        document.querySelector("header").style.top = `-100px`; 
        document.querySelector("header").style.position = `sticky`;
        setTimeout(()=>{
        document.querySelector("header").style.transition = `0.0s`;
        },100)

    }else if(window.scrollY > 360)  {
        document.querySelector("header").style.transition = `0.3s`;
        document.querySelector("header").style.position = `sticky`;
        document.querySelector("header").style.top = `0px`;
    }


})