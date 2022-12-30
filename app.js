const clap1 =document.querySelector(".clap1");
const clap2 =document.querySelector(".clap2");
const snare1 =document.querySelector(".snare1");
const snare2 =document.querySelector(".snare2");
const hihat1 =document.querySelector(".hihat1");
const hihat2 =document.querySelector(".hihat2");
const kick1 =document.querySelector(".kick1");
const kick2 =document.querySelector(".kick2");

const audio=[clap1,clap2,snare1,snare2,kick1,kick2,hihat1,hihat2];
audio.forEach(element => {
    window.addEventListener('keydown',
    ()=>{
       if (element.dataset.key==event.key) {
          element.play()
         

          div=document.querySelectorAll('.kit')
          div.forEach(element => {
            span=element.childNodes[1];
      
          
           if (event.key==span.innerText) {
               element.classList.add('active')
               
           }
           else if(event.key!==span.innerText){
            element.classList.remove('active')
              
           }
          });
          element.currentTime=0
         // element.addEventListener('transitioned',)

       }
       
    })
});

    

