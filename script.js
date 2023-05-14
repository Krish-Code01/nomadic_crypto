$(document).ready(function () {
  $(".custom-carousel .item").first().removeClass("active");
  $(".custom-carousel .item").hover(function () {
    if (!$(this).hasClass("no-drag")) {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    }
  });

  $(".custom-carousel").owlCarousel({
    autoWidth: true,
    onDragStart: function (event) {
      if ($(event.target).hasClass("no-drag")) {
        event.preventDefault();
      }
    },
  });
});
var mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
  loop: true,
  pagination: ".swiper-pagination",
  grabCursor: true,
  speed: 1000,
  paginationClickable: true,
  parallax: true,
  autoplay: true,
  effect: "slide",
  mousewheelControl: 1,
});

$l = $(".left");
$r = $(".right");
$l.mouseenter(function () {
  $(".container").addClass("left-is-hovered");
}).mouseleave(function () {
  $(".container").removeClass("left-is-hovered");
});

$r.mouseenter(function () {
  $(".container").addClass("right-is-hovered");
}).mouseleave(function () {
  $(".container").removeClass("right-is-hovered");
});

var swiper = new Swiper(".product-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  on: {
    init: function () {
      var index = this.activeIndex;

      var target = $(".product-slider__item").eq(index).data("target");

      $(".product-img__item").removeClass("active");
      $(".product-img__item#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;
  var target = $(".product-slider__item").eq(index).data("target");
  $(".product-img__item").removeClass("active");
  $(".product-img__item#" + target).addClass("active");
  if (swiper.isEnd) {
    $(".prev").removeClass("disabled");
  } else {
    $(".next").removeClass("disabled");
  }
  if (swiper.isBeginning) {
  } else {
    $(".prev").removeClass("disabled");
  }
});
$(".js-fav").on("click", function () {
  $(this).find(".heart").toggleClass("is-active");
});
window.addEventListener("DOMContentLoaded", e => {
  document.querySelector(".one").style.animationName = "fade-in-a";
});
window.addEventListener("scroll", e => {
  if (pageYOffset > 30) {
    document.querySelector("header").style.top =
      innerWidth < 600 ? "-50px" : "-45px";
  } else {
    document.querySelector("header").style.top = "0px";
  }
  let fade = (element, animationName) => {
    if (element.getBoundingClientRect()["top"] < innerHeight)
      element.style.animationName = animationName;
  };

  Array.from(document.querySelectorAll(".block:not(.one):not(.two)")).forEach(
    block => fade(block, "fade-in-a")
  );
  Array.from(document.querySelectorAll("#block7 img")).forEach(image =>
    fade(image, "fade-in-a")
  );
  fade(document.querySelector("#block4"), "fade-in-b");
  fade(document.querySelector("#block5"), "fade-in-b");
});

Array.from(document.querySelectorAll(".two button")).forEach((button, ind) => {
  button.addEventListener(
    "mouseover",
    () => (button.firstElementChild.style.color = "#EB0028")
  );
  button.addEventListener(
    "mouseout",
    () => (button.firstElementChild.style.color = "#FFF")
  );
  button.addEventListener("click", () => openModal(ind));
});

document.querySelector("nav button").addEventListener("mouseover", () => {
  document.querySelector("nav button span").style.animationName =
    "buttonEffect";
});
document.querySelector("nav button").addEventListener("mouseout", () => {
  document.querySelector("nav button span").style.animationName =
    "buttonEffectRemoval";
});

document.querySelector(".contact button").addEventListener("mouseover", () => {
  document.querySelector(".contact button span").style.animationName =
    "buttonEffect";
});
document.querySelector(".contact button").addEventListener("mouseout", () => {
  document.querySelector(".contact button span").style.animationName =
    "buttonEffectRemoval";
});
