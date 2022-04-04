var s = 0;  

function nextSlide(n) {  
    displaySlides(s =s + n);  
}  

function displaySlides(n) {  
    var i;  
    const im= document.getElementById('img1');
    const im1= document.getElementById('img2');
    const im2= document.getElementById('img3');
    fetch("./gallery.json")
.then(response => {
   return response.json();
})
.then(data => {
    
    im.src = data.employees[0].image
    im1.src = data.employees[1].image
    im2.src = data.employees[2].image
} );
    var slides = document.getElementsByClassName("showSlide");  
    if (n > slides.length)
     { 
         s = 1 
    }  
    if (n < 1) { 
        s = slides.length 
    }  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
   slides[s-1].style.display = "block";  



}  




