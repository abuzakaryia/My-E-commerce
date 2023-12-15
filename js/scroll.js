// ---------------------------- scroll to top  ---------------------------

var scrollTop = document.getElementById("scroll_top");

window.onscroll = function(){
    if(window.scrollY > 200){
        scrollTop.classList.add("scroll_top_view");
    }else{
        scrollTop.classList.remove("scroll_top_view");
    }
}

scrollTop.onclick = function(){
    window.scrollTo({
        top: 0 
    })
}