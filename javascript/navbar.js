window.addEventListener("scroll",function(){
    if (window.scrollY>20) {
        document.querySelector(".navbar").classList.add("scroll");
    }
    else{
        document.querySelector(".navbar").classList.remove("scroll");
    }
})