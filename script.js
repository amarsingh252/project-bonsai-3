const freQues = document.getElementsByClassName("fre-ques");
const quesDesc = document.getElementsByClassName("ques-desc");

for (let i = 0; i < freQues.length; i++) {
  freQues[i].addEventListener("click", () => {
    if (quesDesc[i].style.display === "block") {
      quesDesc[i].style.display = "none";
    } else {
      quesDesc[i].style.display = "block";
    }
  });
}

const toggle = document.querySelector(".toggle");
const monthlyLabel = document.querySelector(".monthly");
const yerlyLabel = document.querySelector(".yearly");
const monthlyPrice = document.querySelectorAll(".price-box");
const yearlyPrice = document.querySelectorAll(".price-box-yearly");


toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  monthlyLabel.classList.toggle("grayColor");
  yerlyLabel.classList.toggle("blackColor");

  monthlyPrice.forEach((box) =>{
    box.classList.toggle("none");
  })

  yearlyPrice.forEach((box)=>{

    box.classList.toggle("block");
  })
});


const mobiletoggle = document.querySelector(".mobile-toggle")
const mobileNavData = document.querySelector(".mobile-nav-data")


mobiletoggle.addEventListener("click", ()=>{
    mobileNavData.classList.toggle("active")
})

const mobileDropdown = document.querySelectorAll(".mobile-dropdown-menu");
const mobileNav = document.querySelectorAll(".mobile-nav-list");


mobileNav.forEach((navitem,index) =>{

  navitem.addEventListener("click", ()=>{
  
   mobileDropdown[index].classList.toggle("active");
   
  })
})

