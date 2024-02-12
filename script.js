let prevScrollpos = window.pageYOffset;
let hovering = false;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    
    
    if (hovering || prevScrollpos > currentScrollPos || currentScrollPos === 0) {
        document.getElementById("main-header").style.top = "0";
    } else {
        
        document.getElementById("main-header").style.top = "-80px";
    }

    prevScrollpos = currentScrollPos;
};


document.getElementById("main-header").addEventListener("mouseover", function() {
    hovering = true;
});

document.getElementById("main-header").addEventListener("mouseout", function() {
    hovering = false;
});


document.getElementById("main-header").addEventListener("click", function() {
    prevScrollpos = window.pageYOffset;
});

