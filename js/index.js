//Header
const logoHeading = document.querySelector('.logo-heading');
const links = document.querySelectorAll('a');

//Top content
const intro = document.querySelector('.intro');

//Top middle content
const topMiddleContent = document.querySelectorAll('.text-content');
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
    //TweenMax.to(logoHeading, 2, {rotationY:360});
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

//  intro.addEventListener('select', (event) => {
//     //Recolor selected intro elements

//  });

//  topMiddleContent.addEventListener('resize', (event) => {
//     //Flip text and image positions on resize

//  });

//  middleImages.addEventListener('scroll', (event) => {
//     //Spin middle images on scroll

//  });

//  bottomImgTitle.addEventListener('mouseover', (event) => {
//     //Slide to right side on hover
 
//  });

//  bottomImg.addEventListener('click', (event) => {
//     //Flip text and image positions on image click

//  });

//  bottomContent.addEventListener('mouseover', (event) => {
//     //recolor target element
 
//  });
 
//  buttons.addEventListener('dblclick', (event) => {
//     //Append new child button under target button on double click
//     //Prevent target button from creating a new child button, if one was already created
 
//  });

//  copyright.addEventListener('dragstart', (event) => {
//     //Change text on dragstart
 
//  });

//  copyright.addEventListener('dragend', (event) => {
//     //Reset text and change text color on dragend
 
//  });