const date = new Date();
let currentYear = date.getFullYear();

let dateText = document.getElementById("copyrightDate");
dateText.innerHTML = currentYear;