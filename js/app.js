const imageSlide = document.querySelector('.image-slide');
const slideImages = document.querySelectorAll('.image-slide img');


const prevBtn =  document.querySelector('#prevBtn');
const nextBtn =  document.querySelector('#nextBtn');


let counter= 1;
const size = slideImages[0].clientWidth;
imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  


nextBtn.addEventListener('click',()=>{
     if(counter>=slideImages.length - 1) return;
    imageSlide.style.transition = "transform 0.2s ease-in-out"; 

    counter++;  
   imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click',()=>{
    if(counter <=0)return;
    imageSlide.style.transition = "transform 0.4s ease-in-out"; 

    counter--;  
   imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

imageSlide.addEventListener('transitionend',() =>{
   if(slideImages[counter].id==='lastClone'){
   imageSlide.style.transition ="none";
   counter = slideImages.length - 2;
   imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

   }

   if(slideImages[counter].id==='firstClone'){
    imageSlide.style.transition ="none";
    counter = slideImages.length - counter;
    imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
 
    }

});