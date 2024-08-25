$(document).ready(function(){

    $(rotateTerm);

    // auto hiding navbar/////////////////////////////////////////////
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    //////////////////////////////////////////////////////////////////

    // Add smooth scrolling to all links //////////////////////////////
    $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "" && this.hash !== "#training_carousel") {

            // For Offset
            var off;
            if (this.hash != "#home"){off = 20;}
            else{off = 0;}

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (1000) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top + off
            }, 1000, function(){
                scrollBy(0, off);
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            });
        }
    });
    ///////////////////////////////////////////////////////////////////

    // For filter buttons of photo gallery /////////////////////////////
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
        }
        if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");
    });
    /////////////////////////////////////////////////////////////////////

    // for keyboard navigation of modal /////////////////////////////////
    $(document).keydown(function(event) {
        if (event.keyCode == 27) {
            document.getElementById("portfolio-modal").style.display = "none";
            $('body').css('overflow', 'visible');
            var nav = document.getElementById("navbar");                               // navigation bar
            nav.style.zIndex = 4;
            var crwlr = document.getElementById("pg_crwlr");                       // page crawler
            crwlr.style.zIndex = 4;
        }
        if (event.keyCode == 37) {
            showSlides(slideIndex += -1);
        }
        if (event.keyCode == 39) {
            showSlides(slideIndex += 1);
        }
    });
    ///////////////////////////////////////////////////////////////////
});

// For change with scrolling ///////////////////////////////////////////

if (document.documentElement.scrollTop > 30){
    document.getElementById("navbar").classList.add("navbar_color");}
if (document.documentElement.scrollTop > 100){
    document.getElementById("pg_crwlr").style.position = "fixed";}

window.onscroll = function() {changeNavbar()};
function changeNavbar(){

    var pos = document.documentElement.scrollTop;
    var navbar = document.getElementById("navbar");
    var crwlr = document.getElementById("pg_crwlr");

    if(pos < 30){
        navbar.classList.remove("navbar_color");
        crwlr.style.position = "relative";
    }
    else if(pos < 100){
        navbar.classList.add("navbar_color");
        crwlr.style.position = "relative";
    }
    else{
        navbar.classList.add("navbar_color");
        crwlr.style.position = "fixed";
    }
}
///////////////////////////////////////////////////////////////////////////


// Flashing - text ////////////////////////////////////////////////////////
var terms = ["Sarthak Singh.", "A Solution Integrator.", "A Software Developer.", "A Web Developer.", "An Artist."];
function rotateTerm() {
    var ct = $("#flash-text").data("term") || 0;
    $("#flash-text").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct]).fadeIn(3000)
  						.delay(2000).fadeOut(3000, rotateTerm);
}
///////////////////////////////////////////////////////////////////////////

// For Gallery Modal///////////////////////////////////////////////////////
function openModal() {
    document.getElementById("portfolio-modal").style.display = "block";
    $('body').css('overflow', 'hidden');                               // scroll bar
    var nav = document.getElementById("navbar");                           // navigation bar
    nav.style.zIndex = 0;
    var crwlr = document.getElementById("pg_crwlr");                       // page crawler
    crwlr.style.zIndex = 0;
}
function closeModal() {
    document.getElementById("portfolio-modal").style.display = "none";
    $('body').css('overflow', 'visible');                              // scroll bar
    var nav = document.getElementById("navbar");                           // navigation bar
    nav.style.zIndex = 4;
    var crwlr = document.getElementById("pg_crwlr");                       // page crawler
    crwlr.style.zIndex = 4;
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("port-slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
///////////////////////////////////////////////////////////////////////////////
