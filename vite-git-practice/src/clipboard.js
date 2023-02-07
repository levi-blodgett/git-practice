function clipboard() {
    var elements = document.getElementsByClassName("clipboard");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function (e) {
            // Grab the button that was clicked
            var target = e.target;

            // Grab the code text behind the button
            var textToCopy = target.previousSibling.previousSibling.innerText;

            // Copy the text into clipboard
            navigator.clipboard.writeText(textToCopy);

            // Activate the tooltip after the clipboard button
            target.nextElementSibling.style.display = "inline";
            setTimeout(function () {
                target.nextElementSibling.style.display = "none";
            }, 1000);
        }, false);
    }
}
clipboard();