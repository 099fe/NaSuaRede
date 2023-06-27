var buttonUp = document.getElementById("up-btn");

buttonUp.addEventListener("click", function(){
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
})

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });