const wrapper = document.querySelectorAll('div.scroll-wrapper');
var card = document.querySelectorAll('div.card')[2];
var prevCard = document.querySelectorAll('div.card')[1];
var left = document.querySelectorAll('div.nav-left');
var right = document.querySelectorAll('div.nav-right');


window.addEventListener('load', function (e) {
    e.preventDefault();
    if (window.location.pathname === '/events') {
        var scrollAmount = card.clientWidth + Number(window.getComputedStyle(card).marginLeft.substring(0, 2));
    } else {
        var scrollAmount = card.clientWidth + Number(window.getComputedStyle(card).marginLeft.substring(0, 1)) + Number(window.getComputedStyle(prevCard).marginRight.substring(0, 2));
    }
    var delay = 5000;
    wrapper.forEach(slider => {
        setInterval(function () {
            slider.scrollLeft = slider.scrollLeft + scrollAmount;
            if (Math.abs(Math.floor(slider.scrollLeft) - Math.floor(slider.scrollWidth - slider.clientWidth)) <= 1) {
                slider.scrollLeft = 0;
            }
        }, delay);

        right.forEach(right => {
            right.addEventListener('click', function (e) {
                slider.scrollLeft = slider.scrollLeft + scrollAmount;
            });
        });

        left.forEach(left => {
            left.addEventListener('click', function (e) {
                slider.scrollLeft = slider.scrollLeft - scrollAmount;
            });
        });
    });
});