//----- Variable Declarations------------//
const storyArea = document.getElementById("cs-details-grid");
const testimonial = document.getElementById("cs-text");
const customer = document.getElementById("cs-name");
const picture = document.getElementById("cs-img");
let prev;
let current;
let stories = [
   
    {
      story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et curabitur mauris et laoreet ac, tincidunt neque, integer euismod",
      name: "Bimbo Balarabe",
      picture: "assets/img/CS2.png",
    }, 
    {
      story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et curabitur mauris et laoreet ac, tincidunt neque, integer euismod",
      name: "Erling Ekpeyong",
      picture: "assets/img/CS5.jpg",
  },  
  {
    story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et curabitur mauris et laoreet ac, tincidunt neque, integer euismod",
    name: "Fareeda Faroukh",
    picture: "assets/img/CS4.jpg",
},  
  ];

function fading(){
 //--- Fade Out

storyArea.style.opacity="0";
 //---- Change Story
 
 setTimeout(changeStory,3000)
 //----- Fade Back in
 

}



function randomizer(arr){
   current=Math.floor(Math.random() *arr.length)
  if((current==prev) && (current<arr.length)){
    current=current % arr.length;
    prev=current;
     return current;
  }
  else{
    
    prev=current;
    return current;
  }
  
 
};
function runFade(){
    setInterval(fading,10000);
}
function changeStory(){
  var counter=randomizer(stories);
  
  picture.src= stories[counter].picture;
  testimonial.innerText = stories[counter].story;
  customer.innerText = stories[counter].name;
  
  storyArea.style.opacity="1";
 
}
runFade();