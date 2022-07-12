// 
// Copyright Date
// 
// This will include it in the console as well
let year = (new Date()).getFullYear()
document.getElementById("copyright-date").innerHTML = year

// thatAfro, copyright date on console
console.log("%c thatAfro", "font-weight: bold; font-size: 20px; color: #008ede");
console.log("  © Mehluli Hikwa" + ", 1986 - " + year);