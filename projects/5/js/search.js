function mySearchEng() {
    let input;
    let filter;
    let gallery;
    let img;
    

    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();

    gallery = document.getElementsByClassName('gallery')[0];
    img = gallery.getElementsByTagName('a');
  
    let caption;

   for (let i = 0; i < img.length; i++ ) {
       caption = img[i].getAttribute('data-caption');
       if(caption.toUpperCase().includes(filter)){
           img[i].style.display= "";
       } else {
           img[i].style.display= "none";
       }
   }

}    
//w3school based 