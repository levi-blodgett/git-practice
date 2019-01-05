// Onload animation part
document.getElementById("body").className += " load";

// Accordian part
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("mouseenter", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var description = this.nextElementSibling.children[0];
    if (panel.style.maxHeight === panel.scrollHeight + "px") {
      
    } else {
      panel.style.maxHeight = description.scrollHeight + "px";
    }
  });
  acc[i].addEventListener("mouseleave", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var description = this.nextElementSibling.children[0];
    if (panel.style.maxHeight === description.scrollHeight + "px") {
      panel.style.maxHeight = null;
    }
  });
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight === panel.scrollHeight + "px") {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}