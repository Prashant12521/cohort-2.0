window.addEventListener("mousemove", function (details) {

  var rect = document.querySelector("#rect");

  // width of the box
  var boxWidth = rect.getBoundingClientRect().width;

  // mapRange function (GSAP alternative)
  function mapRange(inMin, inMax, outMin, outMax, value) {
    return (
      ((value - inMin) * (outMax - outMin)) / (inMax - inMin) +
      outMin
    );
  }

  // Calculate x value (touch edges)
  var xval = mapRange(
    0,                       // mouse min
    window.innerWidth,       // mouse max
    0,                       // rect touches LEFT edge
    window.innerWidth - boxWidth, // rect touches RIGHT edge
    details.clientX          // actual mouse x
  );

  // Apply to the element
  rect.style.left = xval + "px";
});