//----- Variable Declarations------------//
const storyArea = document.getElementById("cs-details-grid");
const testimonial = document.getElementById("cs-text");
const customer = document.getElementById("cs-name");
const picture = document.getElementById("cs-img");
let prev;
let current;
let stories = [
   
    {
      story: "Excellent Food!",
      name: "Balarabe Bomboy",
      picture: "assets/img/CS2.png",
    },
    {
        story: "The website design was easy to use and the delivery came quicky.",
        name: "Cosmos Calistus",
        picture: "assets/img/CS1.png",
    }, 
    {
        story: "Everyone who attended the party they catered for me kept on asking who made the food.",
        name: "Daniel Darlington",
        picture: "assets/img/CS2.png",
    },  
  ];

function fading(){
 //--- Fade Out
 storyArea.classList.remove("fadein");
 storyArea.classList.add("fadeout");
 //---- Change Story
 var counter=randomizer(stories);

 testimonial.innerText = stories[counter].story;
 customer.innerText = stories[counter].name;
 picture.src= stories[counter].picture;

 
 //----- Fade Back in
 storyArea.classList.remove("fadeout");
 storyArea.classList.add("fadein");

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
runFade();