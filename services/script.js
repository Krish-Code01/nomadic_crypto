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
//swiper
var swiper = new Swiper(".product-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: false,
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

//swiper가 작동할 때/slide가 작동할 때 클래스 active를 추가
swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".product-slider__item").eq(index).data("target");

  $(".product-img__item").removeClass("active");
  $(".product-img__item#" + target).addClass("active");

  //swiper가 끝이기에 오른쪽으로 더 가지 못할 때 마우스 오버시 커서 변경
  if (swiper.isEnd) {
    $(".prev").removeClass("disabled");
    $(".next").addClass("disabled");
  } else {
    $(".next").removeClass("disabled");
  }
  //swiper가 시작이기에 왼쪽으로 더 가지 못할 때 마우스 오버시 커서 변경
  if (swiper.isBeginning) {
    $(".prev").addClass("disabled");
  } else {
    $(".prev").removeClass("disabled");
  }
});

//wishlist 아이콘 변경
$(".js-fav").on("click", function () {
  $(this).find(".heart").toggleClass("is-active");
});
//swiper
var swiper = new Swiper(".product-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: false,
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

//swiper가 작동할 때/slide가 작동할 때 클래스 active를 추가
swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".product-slider__item").eq(index).data("target");

  $(".product-img__item").removeClass("active");
  $(".product-img__item#" + target).addClass("active");

  //swiper가 끝이기에 오른쪽으로 더 가지 못할 때 마우스 오버시 커서 변경
  if (swiper.isEnd) {
    $(".prev").removeClass("disabled");
    $(".next").addClass("disabled");
  } else {
    $(".next").removeClass("disabled");
  }
  //swiper가 시작이기에 왼쪽으로 더 가지 못할 때 마우스 오버시 커서 변경
  if (swiper.isBeginning) {
    $(".prev").addClass("disabled");
  } else {
    $(".prev").removeClass("disabled");
  }
});

//wishlist 아이콘 변경
$(".js-fav").on("click", function () {
  $(this).find(".heart").toggleClass("is-active");
});
//swiper
var swiper = new Swiper(".product-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: false,
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

//swiper가 작동할 때/slide가 작동할 때 클래스 active를 추가
swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".product-slider__item").eq(index).data("target");

  $(".product-img__item").removeClass("active");
  $(".product-img__item#" + target).addClass("active");

  //swiper가 끝이기에 오른쪽으로 더 가지 못할 때 마우스 오버시 커서 변경
  if (swiper.isEnd) {
    $(".prev").removeClass("disabled");
    $(".next").addClass("disabled");
  } else {
    $(".next").removeClass("disabled");
  }
  //swiper가 시작이기에 왼쪽으로 더 가지 못할 때 마우스 오버시 커서 변경
  if (swiper.isBeginning) {
    $(".prev").addClass("disabled");
  } else {
    $(".prev").removeClass("disabled");
  }
});

//wishlist 아이콘 변경
$(".js-fav").on("click", function () {
  $(this).find(".heart").toggleClass("is-active");
});
// ============= SCROLLING ANIMATIONS =================

window.addEventListener("DOMContentLoaded", e => {
  document.querySelector(".one").style.animationName = "fade-in-a";
});

window.addEventListener("scroll", e => {
  // console.log(parseInt(document.querySelector('.three').getBoundingClientRect()['top']), parseInt(innerHeight) + 200)
  if (pageYOffset > 30) {
    document.querySelector("header").style.top =
      innerWidth < 600 ? "-50px" : "-45px";
  } else {
    document.querySelector("header").style.top = "0px";
  }
  // hecks whether the element is within the limits of the viewport or not
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

// ============= VIDEO AND MODAL STYLING =================

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

function openModal(ind) {
  document.querySelectorAll(".video-wrapper iframe")[ind].src += "&autoplay=1";

  document.querySelector("#modal").style.display = "block";
  document.querySelector("#modal span").style.display = "block";
  document.getElementsByClassName("video-wrapper")[ind].style.display = "block";

  setTimeout(() => (document.querySelector("#modal").style.opacity = "1"), 100);
}

document.querySelector("#modal span").addEventListener("click", closeModal);
document.querySelector("#modal").addEventListener("click", closeModal);

function closeModal() {
  document.querySelector("#modal").style.opacity = "0";

  setTimeout(() => {
    document.querySelector("#modal").style.display = "none";
    document.querySelector("#modal span").style.display = "none";
    Array.from(document.getElementsByClassName("video-wrapper")).forEach(
      wrapper => (wrapper.style.display = "none")
    );
  }, 500);

  Array.from(document.querySelectorAll(".video-wrapper iframe")).forEach(
    iframe => {
      // replace the source attribute with itself to reset the video
      // also remove the autoplay
      iframe.src = iframe.src.replace("&autoplay=1", "");
    }
  );
}

// ============= NAVIGATION BAR AND CONTACT BUTTON EFFECT =================

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
