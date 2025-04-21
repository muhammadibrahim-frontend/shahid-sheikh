$(document).ready(function () {
  // Mobile Menu Toggle
  $("#mobileMenuButton").click(function () {
    $("#mobileMenu").slideToggle();
  });

  // Destination Slider
  const sliderContainer = $("#sliderContainer");
  const sliderItems = $(".slider-item");
  const sliderDots = $("#sliderDots");
  const itemCount = sliderItems.length;
  let currentIndex = 0;

  // Create dots
  for (let i = 0; i < itemCount; i++) {
    sliderDots.append('<div class="dot" data-index="' + i + '"></div>');
  }

  const dots = $(".dot");
  dots.first().addClass("active");

  // Update slider position
  function updateSlider() {
    let itemWidth = sliderItems.first().outerWidth(true);
    let translateX = -currentIndex * itemWidth;
    sliderContainer.css("transform", "translateX(" + translateX + "px)");

    // Update active dot
    dots.removeClass("active");
    dots.eq(currentIndex).addClass("active");
  }

  // Next button
  $("#nextBtn").click(function () {
    if (currentIndex < itemCount - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  });

  $("#prevBtn").click(function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = itemCount - 1;
    }
    updateSlider();
  });

  dots.click(function () {
    currentIndex = $(this).data("index");
    updateSlider();
  });

  let autoSlide = setInterval(function () {
    $("#nextBtn").click();
  }, 5000);

  $(".destination-slider").hover(
    function () {
      clearInterval(autoSlide);
    },
    function () {
      autoSlide = setInterval(function () {
        $("#nextBtn").click();
      }, 5000);
    }
  );

  function handleResize() {
    updateSlider();
  }

  let resizeTimer;
  $(window).resize(function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleResize, 250);
  });
});

const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.remove("-translate-x-full");
});

menuClose.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-x-full");
});

// Optional: Close menu if user clicks outside
document.addEventListener("click", (e) => {
  if (
    !mobileMenu.contains(e.target) &&
    !menuToggle.contains(e.target) &&
    !mobileMenu.classList.contains("-translate-x-full")
  ) {
    mobileMenu.classList.add("-translate-x-full");
  }
});

// filter section
