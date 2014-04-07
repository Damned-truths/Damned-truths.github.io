// When picture is clicked, toggle the pictures size.

var toggle_size = function (image) {
    if (/(^| )large-photo( |$)/.test(image.className)) {
        image.className = image.className.replace(" large-photo",""); 
    }
    else {
        image.className += " large-photo";
    }
};



