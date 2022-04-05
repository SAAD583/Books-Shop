
// Burger Menu

document.querySelector(".burger-menu").addEventListener("click", activeNav)

function activeNav() {
    document.querySelector("nav ul").classList.toggle("active-nav");
    document.querySelector(".l-one").classList.toggle("act-l-one");
    document.querySelector(".l-two").classList.toggle("act-l-two");
    document.querySelector(".home").style.marginTop = "100px"
    document.querySelector(".l-three").classList.toggle("act-l-three");
    let sameLiClass = document.querySelectorAll(".liClass")
    // The Same Class For All LIs except .home  (hover effect)
    for (let sameLiNum = 0; sameLiNum < sameLiClass.length; sameLiNum++) {
        // change the color of the LIs except the .home onclick (hover effect) 
        sameLiClass[sameLiNum].onmouseover = function () {
            this.style.color = "whitesmoke"
        }
        sameLiClass[sameLiNum].onmouseout = function () {
            this.style.color = "#999"
        }
    }
}


// "about" clicking Function

// I Wrote This Function here To make it activated onclick (not on resize) 
// and I changed the "ElementYOffSet" var to bee good in all situations
if (window.innerWidth >= 880) {
    ElementYOffSet = 25;
}
else {
    ElementYOffSet = 35;
}

// we should substract the nav height from the page Y offset 
// becuse it is fixed
let navHeight = 65

function aboutClickFunc() {
    // better than going to acertain element
    // because the certaine element will change when we resize
    if (pageYOffset > 0) {
        window.scrollTo(0, document.querySelector(".about-us").offsetTop - navHeight - ElementYOffSet)
    } else {
        window.scrollTo(0, document.querySelector(".about-us").offsetTop - navHeight - ElementYOffSet * 3)
    }
}

function ourBooksClickFunc() {
    // better than going to acertain element
    // because the certaine element will change when we resize
    window.scrollTo(0, document.querySelector(".our-books-container").offsetTop - navHeight - ElementYOffSet)
}

function contactUsClickFunc() {
    window.scrollTo(0, document.body.clientHeight)
}

// to close the nav ul when we click on the nav ul items
document.querySelector(".burger-menu").onclick = function () {
    let allLis = document.querySelectorAll("nav>ul li");
    for (let i = 0; i < allLis.length; i++) {
        allLis[i].onclick = function () {
            document.querySelector("nav ul").classList.toggle("active-nav");
            document.querySelector(".l-one").classList.toggle("act-l-one");
            document.querySelector(".l-two").classList.toggle("act-l-two");
            document.querySelector(".l-three").classList.toggle("act-l-three");
        }
    }
}

// To Get Rid Of The .home Bug (margin top bug)
window.onresize = function () {
    if (window.outerWidth > 784) {
        document.querySelector(".home").style.marginTop = "0";
        //// Just to return the hover effect to the normal (when we click then resize)
        let sameLiClass = document.querySelectorAll(".liClass")
        // The Same Class For All LIs except .home  (hover effect)
        for (let sameLiNum = 0; sameLiNum < sameLiClass.length; sameLiNum++) {
            /* change the color of the LIs except the .home onclick (hover effect) */
            sameLiClass[sameLiNum].onmouseover = function () {
                this.style.color = "black"
            }
            sameLiClass[sameLiNum].onmouseout = function () {
                this.style.color = "#999"
            }
        }

        ////                            
    } else {
        document.querySelector(".home").style.marginTop = "100px";

    }
}

// Loading Progress

window.onload = function () {
    document.querySelector(".loader-container").style.display = "none";
}

// Nav Scroll Function

window.addEventListener("scroll", scrollFunc)


function scrollFunc() {
    let navBar = document.querySelector("nav");
    let logo = document.querySelector("#logo");
    let socialMedia = document.querySelectorAll(".social-media i")
    // when we scroll down
    if (window.pageYOffset > 0) {
        // I made the sticky position in JS to avoid problems when reaching the next section
        navBar.style.position = "fixed";
        navBar.classList.add("stickyNavStyle");
        logo.classList.add("logoStickyStyle");
        logo.classList.remove("logo")
        let sameLiClass = document.querySelectorAll(".liClass")
        // The Same Class For All LIs except .home  (main hover effect)
        for (let sameLiNum = 0; sameLiNum < sameLiClass.length; sameLiNum++) {
            sameLiClass[sameLiNum].classList.add("hoveredLiClass");
        }
        // every "i" element inside the "social-media" classes
        for (let i = 0; i < socialMedia.length; i++) {
            socialMedia[i].classList.add("hoveredLiClass");
            socialMedia[i].classList.remove("liClass");
        }


        // when we are in the "home" section
        // I Multiply the "ElementYOffSet" var 5 times to 
        // increase the offset when the ".about" change
        if (window.pageYOffset < document.querySelector(".about-us").offsetTop - navHeight - ElementYOffSet * 5) {
            document.querySelector(".home").classList.add("active");
            document.querySelector(".about").classList.remove("active");
            document.querySelector(".about").classList.add("liClass");
            document.querySelector(".about").classList.add("hoveredLiClass");
            document.querySelector(".home").classList.remove("liClass");
            // to delete the main hover class (for .home)
            document.querySelector(".home").classList.remove("hoveredLiClass");


        }


        // when we reach the "about" section
        // I Multiply the "ElementYOffSet" var 3 times to 
        // increase the offset when the ".about" change
        if (window.pageYOffset >= document.querySelector(".about-us").offsetTop - navHeight - ElementYOffSet * 3) {
            document.querySelector(".home").classList.remove("active");
            document.querySelector(".about").classList.add("active");
            document.querySelector(".about").classList.remove("liClass");
            document.querySelector(".about").classList.remove("hoveredLiClass");
            document.querySelector(".home").classList.add("liClass");
            // Our Books Actions
            document.querySelector(".Our-Books").classList.remove("active");
            document.querySelector(".Our-Books").classList.add("hoveredLiClass");
            document.querySelector(".Our-Books").classList.add("liClass");

        }


        // when we are in the "Our-Books" section
        // I Multiply the "ElementYOffSet" var 3 times to 
        // increase the offset when the ".our-books" change
        if (window.pageYOffset >= document.querySelector(".our-books-container").offsetTop - navHeight - ElementYOffSet * 6) {
            document.querySelector(".about").classList.remove("active");
            document.querySelector(".Our-Books").classList.add("active");
            document.querySelector(".about").classList.add("liClass");
            document.querySelector(".about").classList.add("hoveredLiClass");
            document.querySelector(".Our-Books").classList.remove("liClass");
            // to delete the main hover class (for .Our-Books)
            document.querySelector(".Our-Books").classList.remove("hoveredLiClass");
            // Contact us Actions
            document.querySelector(".Contact-us").classList.remove("active");
            document.querySelector(".Contact-us").classList.add("hoveredLiClass");
            document.querySelector(".Contact-us").classList.add("liClass");
           
        }

        // when we are in the "Contact us" section
        // when the window height + pageYOffset >= body height
        // I substracted some space to make it active before we reach tje bottom of the page
        if ((window.innerHeight + window.pageYOffset) >= document.body.clientHeight - ElementYOffSet * 3) {
            document.querySelector(".Our-Books").classList.remove("active");
            document.querySelector(".Contact-us").classList.add("active");
            document.querySelector(".Our-Books").classList.add("liClass");
            document.querySelector(".Our-Books").classList.add("hoveredLiClass");
            document.querySelector(".Contact-us").classList.remove("liClass");
            // to delete the main hover class (for .Contact-us)
            document.querySelector(".Contact-us").classList.remove("hoveredLiClass");
        }


    }


    // when we dont scroll (pageYOffSet === 0)
    else {
        navBar.classList.remove("stickyNavStyle");
        // sticky position using JS
        navBar.style.position = "static";
        logo.classList.remove("logoStickyStyle");
        logo.classList.add("logo");

        // The Same Class For All LIs except .home  
        let sameLiClass = document.querySelectorAll(".liClass")
        for (let sameLiNum = 0; sameLiNum < sameLiClass.length; sameLiNum++) {
            // to delete the main hover class (for all Lis)
            sameLiClass[sameLiNum].classList.remove("hoveredLiClass");
        }
        // remove main hover class and add the normal class for every "i" element inside the "social-media" classes         
        for (let i = 0; i < socialMedia.length; i++) {
            socialMedia[i].classList.remove("hoveredLiClass");
            socialMedia[i].classList.add("liClass");
        }

    }
}

// GALLERY ON CLICK FUNCTION

function galleryFunc(book) {
    document.querySelector(".gallery-cont").style.display = "block";
    // I added the next 5 lines to make fade in-out effect
    document.querySelector(".gallery-cont").style.opacity = 0;
    document.querySelector(".gallery-cont").style.transition = "opacity ease .5s";
    setTimeout(function () {
        document.querySelector(".gallery-cont").style.opacity = 1
    }, 5)
    document.querySelector(".gal-content-cont img").src = book.src;
    document.querySelector(".gal-content-cont img").style.border = "3px inset #267a22"
}

function closeGalFunc() {
    // I added some more lines to make fade in-out effect
    document.querySelector(".gallery-cont").style.opacity = 0;
    document.querySelector(".gallery-cont").style.transition = "opacity ease .5s";
    setTimeout(function () {
        document.querySelector(".gallery-cont").style.display = "none";
    }, 400)
}



// OUR BOOKS FUNCTIONS

let relBooks = document.querySelectorAll(".rel-book"),
    sieBooks = document.querySelectorAll(".sie-book"),
    hisBooks = document.querySelectorAll(".his-book");

let allButton = document.querySelector(".allButton"),
    sieButton = document.querySelector(".sieButton"),
    relButton = document.querySelector(".relButton"),
    hisButton = document.querySelector(".hisButton");

let activeButton = false

// allBooks button onclick function
function allBooksFunc() {
    // I added the next 3 lines to make a nice fade in-out effect 
   
    relBooks.forEach(moveBooks)
    sieBooks.forEach(moveBooks)
    hisBooks.forEach(moveBooks)
    relBooks.forEach(addBooks)
    sieBooks.forEach(addBooks)
    hisBooks.forEach(addBooks)
    allButton.classList.add("active-books-button")
    sieButton.classList.remove("active-books-button")
    relButton.classList.remove("active-books-button")
    hisButton.classList.remove("active-books-button") 

}

///// the first line of the the next 3 functions is to
///// add nice fade in-out effect
// relegious books onclick function
function relBooksFunc() {
   
    relBooks.forEach(moveBooks)
    sieBooks.forEach(moveBooks)
    hisBooks.forEach(moveBooks)
    relBooks.forEach(addBooks)
    allButton.classList.remove("active-books-button")
    sieButton.classList.remove("active-books-button")
    relButton.classList.add("active-books-button")
    hisButton.classList.remove("active-books-button")
     

}

// sience books onclick function
function sieBooksFunc() {
    
    sieBooks.forEach(moveBooks)
    hisBooks.forEach(moveBooks)
    relBooks.forEach(moveBooks)
    sieBooks.forEach(addBooks)
    allButton.classList.remove("active-books-button")
    sieButton.classList.add("active-books-button")
    relButton.classList.remove("active-books-button")
    hisButton.classList.remove("active-books-button")
    
    
}

// history books onclick function
function hisBooksFunc() {
    
    hisBooks.forEach(moveBooks)
    relBooks.forEach(moveBooks)
    sieBooks.forEach(moveBooks)
    hisBooks.forEach(addBooks)
    allButton.classList.remove("active-books-button")
    sieButton.classList.remove("active-books-button")
    relButton.classList.remove("active-books-button")
    hisButton.classList.add("active-books-button")
     

}

// remove books Function
function moveBooks(value) {
    value.classList.add("remove-books-class")
    value.classList.remove("add-books-class")
    setTimeout(function () {
        value.style.display = "none"
    }, 500)
}

// add books Function
function addBooks(value) {
    setTimeout(function () {
        value.style.display = "block";
    }, 500)

    setTimeout(function () {
        value.classList.add("add-books-class")
        value.classList.remove("remove-books-class")
// I added more time here to make fade in-out effect
    }, 550)
}
