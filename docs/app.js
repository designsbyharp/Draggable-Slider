let draggableSlider = function () {
  // DOM element(s)
  let slider = document.querySelector(".slider"),
    innerSlider = document.querySelector(".slider-inner");

  // Slider variables
  let pressed = false,
    startX,
    x;

  // Mousedown eventlistener
  slider.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = "grabbing";
  });

  // mouseneter
  slider.addEventListener("mouseenter", () => {
    slider.style.cursor = "grab";
  });

  // mouseup
  slider.addEventListener("mouseup", () => {
    slider.style.cursor = "grab";
  });

  // window
  window.addEventListener("mouseup", () => {
    pressed = false;
  });

  // Slider mousemove event listener
  slider.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;

    innerSlider.style.left = `${x - startX}px`;

    checkBoundry();
  });

  // Check boundry of outer and inner sliders
  function checkBoundry() {
    let outer = slider.getBoundingClientRect(),
      inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0) {
      innerSlider.style.left = "0px";
    } else if (inner.right < outer.right) {
      innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
  }
};

// Invoke code
draggableSlider();
