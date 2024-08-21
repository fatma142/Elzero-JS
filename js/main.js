// setting box
document.querySelector(".toggel-icon").onclick= function(){
    this.classList.toggle("fa-spin"); //add class on icon
    document.querySelector(".setting-box").classList.toggle("open"); //add class
};

// check local storage
let mainColors = localStorage.getItem("colors-list");

  if(mainColors !== null){
    document.documentElement.style.setProperty('--main-color', mainColors); 
    document.querySelectorAll(".colors-list li").forEach(element => {
     element.classList.remove("active");

     if(element.dataset.color === mainColors){
        element.classList.add("active")
     }
    });
 }


// Switch colors
let colorLi= document.querySelectorAll(".colors-list li");

colorLi.forEach( li =>{
    li.addEventListener("click", (e)=>{
        // set color on root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color); 
    // saving in localstorage
    localStorage.setItem("colors-list", e.target.dataset.color)

    // class active
    handelActive(e);

  });
});

// Switch Random Backgrounds

let backgroundOption=true;
let backgroundInterval;
let backLocal = localStorage.getItem("background-option");

if(backLocal !== null){
 if(backLocal === 'true'){
     backgroundOption = true;
  }else{
    backgroundOption = false;
 }

  document.querySelectorAll(".random-backgrounds span").forEach(element =>{
    element.classList.remove("active")
  });

   if(backLocal === 'true'){
      document.querySelector(".random-backgrounds .yes").classList.add("active")
   }else{
    document.querySelector(".random-backgrounds .no").classList.add("active")
   }
}


const randomBack= document.querySelectorAll(".random-backgrounds span");

randomBack.forEach( span =>{
    span.addEventListener("click", (e)=>{
    // class active
    e.target.parentElement.querySelectorAll(".active").forEach(element =>{
      element.classList.remove("active")
  })
      e.target.classList.add("active");
 
  if(e.target.dataset.background === 'yes'){

   backgroundOption = true;
   randomImges();
   localStorage.setItem("background-option", true)

  }else{
    backgroundOption = false;
    clearInterval(backgroundInterval);
    localStorage.setItem("background-option", false)
   }  
  });
}); 


// Function Background 

  function randomImges(){
    if(backgroundOption === true){
        backgroundInterval = setInterval(()=> {
        let randomImage = Math.floor(Math.random()* arr.length);
        landingPage.style.backgroundImage= 'url("img/'+ arr[randomImage] +' ")'
        landingPage.style.transition ='0.8s'
     },1000);
    }
  }
  randomImges();

let landingPage = document.querySelector(".landing-page");
// landingPage.style.backgroundImage='url("sunset-landscape.jpg")'
let arr=["a.jpg","b.jpg","c.jpg","d.jpg"];



// SELECT SKILLS
 let ourSkills= document.querySelector(".skills");

 window.onscroll = function (){

  let skillsOffsetTop = ourSkills.offsetTop;
  
  let skillsOuterHeight = ourSkills.offsetHeight;
 
  let windowHeight = this.innerHeight;

  let windowScroll = this.scrollY;

//////////

// console.log(windowScroll)

//////////
  if (windowScroll > (skillsOffsetTop +  skillsOuterHeight  - windowHeight)) {

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span")
    
    allSkills.forEach(skill => {
        skill.style.width = skill.dataset.progress;
      });
      
    }
    else if(windowScroll < 667){
      let allSkills = document.querySelectorAll(".skill-box .skill-progress span")
    
     allSkills.forEach(skill => {
        skill.style.width = skill.dataset.defult;
      });
    }
 };


// Create Popup With The Image  IN GALLARY
let ourGallary= document.querySelectorAll(".gallary img");

ourGallary.forEach(img => {

 img.addEventListener( 'click' , (e)=>{
    // Create overlay
  let overlay = document.createElement("div")
  overlay.className= 'popup-overlay';
  document.body.appendChild(overlay);

  // Create Popup
  let popupBox = document.createElement("div")
  popupBox.className= 'popup-box';

    // alt Image
 if( img.alt !== null){
  let imgHeading = document.createElement("h3");

  let imgText = document.createTextNode(img.alt);

  imgHeading.appendChild(imgText);

  popupBox.appendChild(imgHeading);
 }

 // Put Image In Popup
  let popupImage = document.createElement("img")
    popupImage.src= img.src;

    popupBox.appendChild(popupImage);
  document.body.appendChild(popupBox);

  // Creat X Button
  let closeButton = document.createElement("span");

  let closeButtonText = document.createTextNode("X");

  closeButton.appendChild(closeButtonText);

  closeButton.className=("close-btn");

  // add closeButton to popupBox
  popupBox.appendChild(closeButton)

   });
    
});

// function on btn to remove the card of popup
 document.addEventListener( 'click' , (e) => {
   // عشان هو مش عارف بكليك فين فبيسالني هو اللي انا بكلك عليه دا عنده كلاس بالاسم دا؟
 if( e.target.className == 'close-btn'){

  document.querySelector(".popup-box").remove()
   document.querySelector(".popup-overlay").remove()
}
  });



  // Select All Bullets //////////////
 
  // const allbullets =document.querySelectorAll(".nav-bullets .bullet");
 
  //  allbullets.forEach(bullet => {

  //   bullet.addEventListener('click' ,(e) => {
  //     document.querySelector(e.target.dataset.section).scrollIntoView({behavior : 'smooth'});
  //   })

  // })

  // Select All Nav Links  ///////////////

  // const alllinks =document.querySelectorAll(".landing-page .links a");
 
  //  alllinks.forEach(links => {

  //   links.addEventListener('click' ,(e) => {
  //     document.querySelector(e.target.dataset.section).scrollIntoView({behavior : 'smooth'});
  //   })

  // } )

  const allbullets =document.querySelectorAll(".nav-bullets .bullet");
  const alllinks =document.querySelectorAll(".landing-page .links a");

  function scrollToSomewhere(element){
   
    element.forEach( ele => {

    ele.addEventListener('click' , (e) => {
      document.querySelector(e.target.dataset.section).scrollIntoView({behavior: 'smooth'})
    });

    });

  }
scrollToSomewhere(allbullets);
scrollToSomewhere(alllinks);
 

/////////////////
// Handel Active State

function handelActive(ev){

  ev.target.parentElement.querySelectorAll(".active").forEach(element => {

    element.classList.remove("active");

  });
  ev.target.classList.add("active");
}

///////////////


// Show & Hide Bullets
let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets-option");

if (bulletLocalItem !== null ){

  bulletsSpan.forEach( span =>{

    span.classList.remove("active");

  });

  if(bulletLocalItem === 'block'){

    bulletContainer.style.display = 'block';

    document.querySelector(".bullets-option .yes").classList.add("active");

  } else{

    bulletContainer.style.display = 'none';

    document.querySelector(".bullets-option .no").classList.add("active");
  }
}

bulletsSpan.forEach( span =>{

  span.addEventListener("click", (e) => {
      
    if (span.dataset.display === 'show'){

      bulletContainer.style.display = 'block';

      localStorage.setItem("bullets-option" , 'block')
    }else{

      bulletContainer.style.display = 'none';
      localStorage.setItem("bullets-option" , 'none')
    }  
     handelActive(e);
      
  });
});


// Reset Button

document.querySelector(".reset-option").onclick = function () {

 localStorage.removeItem("colors-list")
 localStorage.removeItem("background-option")
 localStorage.removeItem("bullets-option")

  window.location.reload();

};


// Toggel Menu 

let toggelBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggelBtn.onclick= function(e){
  // stop propagation //
  e.stopPropagation();

  this.classList.toggle("menu-active");
  tLinks.classList.toggle("open");
}
// stop propagation // 
tLinks.onclick = function(e){
  e.stopPropagation()
}
// //
document.addEventListener('click' , (e) => {
if ( e.target !== toggelBtn && e.target !== tLinks){
    if (tLinks.classList.contains("open") ){
      tLinks.classList.toggle("open")
      toggelBtn.classList.toggle("menu-active")
    }
}

})