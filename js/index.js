//Header
const logoHeading = document.querySelector('.logo-heading');
const links = document.querySelectorAll('a');

//Top content
const introParagraph = document.querySelector('.intro p');

//Top middle content
const topMiddleContent = document.querySelector('.content-section');
const middleImages = document.querySelectorAll('.img-content');

//Bottom middle content
const bottomImgSection = document.querySelector('.content-destination');
const bottomImgTitle = document.querySelector('.content-destination h2');
const bottomImg = document.querySelector('.content-destination img');

//Bottom content
const bottomContent = document.querySelectorAll('.destination');
const buttons = document.querySelectorAll('.btn');

//Footer
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

window.addEventListener('scroll', (event) => {
    
});

 
buttons.forEach(button => {
    button.addEventListener('dblclick', (event) => {

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