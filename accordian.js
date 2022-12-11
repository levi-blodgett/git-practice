// Onload animation part
document.getElementById("body").className += " load";

// Accordian part
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  // Add event to enable preview of div when mousing into the accordian
  acc[i].addEventListener("mouseenter", function() {
    // Define panel for function
    var panel = this.nextElementSibling;

    // Function to toggle event when mouse leaves accordian
    onMouseEnter(this, panel);
  });
  // Add event to disable preview of div when mousing out of accordian
  acc[i].addEventListener("mouseleave", function() {
    // Define panel for function
    var panel = this.nextElementSibling;

    // Function to toggle event when mouse leaves accordian
    onMouseLeave(this, panel);
  });
  // Add event to make panels active and bring them to max height
  acc[i].addEventListener("click", function() {
    // Define panel for functions
    var panel = this.nextElementSibling;

    // Functions to toggle events when clicking the accordians
    togglePanels(this, panel);
  });
}

// Toggles height on panels
function togglePanels(accordian, panel) {
  accordian.scrollIntoView(true);
  var panel = accordian.nextElementSibling;
  if (panel.style.maxHeight === panel.scrollHeight + "px") {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

// Turns off visiblity of accordian preview
function onMouseLeave(accordian, panel) {
  //accordian.classList.toggle("active");
  var description = accordian.nextElementSibling.children[0];
  if (panel.style.maxHeight === description.scrollHeight + "px") {
    panel.style.maxHeight = null;
  }
}

// Turns on visiblity of accordian preview
function onMouseEnter(accordian, panel) {
  //accordian.classList.toggle("active");
  var panel = accordian.nextElementSibling;
  var description = accordian.nextElementSibling.children[0];
  if (panel.style.maxHeight != panel.scrollHeight + "px") {
    panel.style.maxHeight = description.scrollHeight + "px";
  }
}