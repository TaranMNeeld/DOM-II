const body = document.querySelector('body');
const logoHeading = document.querySelector('.logo-heading');
const links = document.querySelectorAll('a');
const introParagraph = document.querySelector('.intro p');
const topMiddleContent = document.querySelector('.content-section');
const bottomImgContent = document.querySelector('.content-destination');
const bottomImg = document.querySelector('.content-destination img');
const buttons = document.querySelectorAll('.btn');
const copyright = document.querySelector('.footer');



//Event listeners
window.addEventListener('load', (event) => {
   //Add spin animation on window load
    TweenMax.to(logoHeading, 2, {rotationY:360});
});

links.forEach(link => {
    link.addEventListener('mouseover', (event) => {
        //Enlarge target link size
        TweenMax.to(event.target, 0.5, {scale:1.2});
    });
    link.addEventListener('mouseleave', (event) => {
        //Reset target link size
        TweenMax.to(event.target, 0.5, {scale:1});
    });
});

links.forEach(link => {
    link.addEventListener('click', (event) => {
        //Stop links from refreshing the page
        event.preventDefault();
    });
});

//Change intro title when hovering over intro paragraph
introParagraph.addEventListener('mouseover', (event) => {
    const introTitle = document.querySelector('.intro h2');
    introTitle.textContent = "This Is The Intro!";
});

//Reset intro title when not hovering over intro paragraph
introParagraph.addEventListener('mouseleave', (event) => {
    const introTitle = document.querySelector('.intro h2');
    introTitle.textContent = "Welcome To Fun Bus!";
})

window.addEventListener('resize', (event) => {
    //Flip text and image positions on resize
    topMiddleContent.style.flexDirection = 'row-reverse';
});

//Enlarge bottom image content on click,
//but stop from enlarging if clicking on the image
bottomImgContent.addEventListener('click', (event) => {
    bottomImg.addEventListener('click', (event) => {
        event.stopPropagation();
    });
    TweenMax.to(bottomImgContent, 0.5, {scale:1.3});
});
bottomImgContent.addEventListener('mouseleave', (event) => {
    TweenMax.to(bottomImgContent, 0.5, {scale:1});
});

//Change body text color on scroll
window.addEventListener('scroll', (event) => {
    body.style.color = 'blue';
});

//Change button color on double click
buttons.forEach(button => {
    button.addEventListener('dblclick', (event) => {
        event.target.style.backgroundColor = 'purple';
    });
});

 copyright.addEventListener('dragstart', (event) => {
    //Change color on dragstart
    const footer = document.querySelector('footer');
    footer.style.backgroundColor = "red";
});

copyright.addEventListener('dragend', (event) => {
    //Reset color on dragend
    const footer = document.querySelector('footer');
    footer.style.backgroundColor = " #FFEBCD";
});