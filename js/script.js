new fullpage('#fullPage', {
    autoScrolling: true,
    navigation: true,
    anchors: ['home','work', 'about', 'contact'], //use this to navigate to the sections with an anchor tag in the html
    menu: '#nav-bar',
    showActiveTooltip: true,
    navigation: false,
    scrollingSpeed: 700,
    scrollBar: true,
    loopBottom: false,
})

ScrollReveal({ distance: '60px' });

ScrollReveal().reveal('.head-title', {
    reset: true,
    delay: 300,
    origin: 'top',
   
});

ScrollReveal().reveal('.sub-title', {
    reset: true,
    delay: 500,
    origin: 'bottom',
   
});

ScrollReveal().reveal('.arrowBounce', {
    reset: true,
    delay: 700,
    origin: 'bottom',
   
});

ScrollReveal().reveal('.button', {
    reset: true,
    delay: 700,
    origin: 'left',
   
});