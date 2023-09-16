const lt=document.getElementById("lt");
const imgSlide=document.getElementById("imgSlide");
const caption=document.getElementById("caption");
let ImageList=["img.jpg","img2.jpg","img3.jpg","img4.jpg"];
let counter=0;
lt.addEventListener("click",function(){
    counter--;
    if(counter<0  ){
        counter=ImageList.length-1;
    }
    
   
    imgSlide.src=ImageList[counter];
    caption.innerHTML="Caption Text "+(counter+1)
   
})

gt.addEventListener("click",function(){
    counter++;
   
    if(counter==ImageList.length){
        counter=0;
    }
    
    imgSlide.src=ImageList[counter];
    caption.innerHTML="Caption Text "+(counter+1)
    
    
    
})