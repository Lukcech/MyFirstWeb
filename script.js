let prevScrollpos = window.pageYOffset;
let hovering = false;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    
    // Zobrazuj header, pokud je myš nad ním, scroll nahoru nebo stránka vyscrollovaná nahoře
    if (hovering || prevScrollpos > currentScrollPos || currentScrollPos === 0) {
        document.getElementById("main-header").style.top = "0";
    } else {
        // Skryj header, pokud scroll dolů
        document.getElementById("main-header").style.top = "-80px";
    }

    prevScrollpos = currentScrollPos;
};

// Zjištění, jestli je myš nad headerem
document.getElementById("main-header").addEventListener("mouseover", function() {
    hovering = true;
});

document.getElementById("main-header").addEventListener("mouseout", function() {
    hovering = false;
});

// Při kliknutí myší nastaví hodnotu scrollingu, aby se předešlo problémům s obnovou
document.getElementById("main-header").addEventListener("click", function() {
    prevScrollpos = window.pageYOffset;
});

