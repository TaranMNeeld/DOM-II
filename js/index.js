//Header
let logoHeading = document.querySelector('.logo-heading');
let navLink = document.querySelectorAll('.nav-link');

//Top content
let intro = document.querySelector('.intro');

//Top middle content
let topMiddleContent = document.querySelectorAll('.text-content');
let middleImages = document.querySelectorAll('.img-content');

//Bottom middle content
let bottomImgSection = document.querySelector('.content-destination');
let bottomImgTitle = document.querySelector('.content-destination h2');
let bottomImg = document.querySelector('.content-destination img');

//Bottom content
let bottomContent = document.querySelectorAll('.destination');
let buttons = document.querySelectorAll('.btn');

//Footer
let copyright = document.querySelector('.footer');



//Event listeners
logoHeading.addEventListener('load', (event) => {
   //Add spin animation on window load

});

navLink.addEventListener('mouseover', (event) => {
    //Enlarge target link
 
 });

 navLink.addEventListener('click', (event) => {
    //Stop nav links from refreshing the page
   
 });

 intro.addEventListener('select', (event) => {
    //Recolor selected intro elements

 });

 topMiddleContent.addEventListener('resize', (event) => {
    //Flip text and image positions on resize

 });

 middleImages.addEventListener('scroll', (event) => {
    //Spin middle images on scroll

 });

 bottomImgTitle.addEventListener('mouseover', (event) => {
    //Slide to right side on hover
 
 });

 bottomImg.addEventListener('click', (event) => {
    //Flip text and image positions on image click

 });

 bottomContent.addEventListener('mouseover', (event) => {
    //recolor target element
 
 });
 
 buttons.addEventListener('dblclick', (event) => {
    //Append new child button under target button on double click
    //Prevent target button from creating a new child button, if one was already created
 
 });

 copyright.addEventListener('dragstart', (event) => {
    //Change text on dragstart
 
 });

 copyright.addEventListener('dragend', (event) => {
    //Reset text and change text color on dragend
 
 });