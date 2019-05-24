// Onload animation part
document.getElementById("body").className += " load";

// Accordian part
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  // Add event to enable preview of div when mousing into the accordian
  acc[i].addEventListener("mouseenter", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var description = this.nextElementSibling.children[0];
    if (panel.style.maxHeight != panel.scrollHeight + "px") {
      panel.style.maxHeight = description.scrollHeight + "px";
    }
  });
  // Add event to disable preview of div when mousing out of accordian
  acc[i].addEventListener("mouseleave", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var description = this.nextElementSibling.children[0];
    if (panel.style.maxHeight === description.scrollHeight + "px") {
      panel.style.maxHeight = null;
    }
  });
  // Add event to make panels active and bring them to max height
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    this.scrollIntoView(true);
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight === panel.scrollHeight + "px") {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
  // Add event to make it so overflow doesn't affect active panels
  // Hides overflow when hiding the panel
  acc[i].addEventListener("mouseup", function() {
    if (this.classList.contains("active")) {
      this.nextElementSibling.style.overflow = "visible";
      console.log('yes');
    } else {
      console.log('no');
      this.nextElementSibling.style.overflow = "hidden";
    }
  });
}