// // Pertanyaan
// var pertanyaan = prompt(" 1 + 1 = ...");
// var password = "2";

// if (pertanyaan == password) {
//   ("");
// } else {
//   close();
// }

// Link Instagram
var instagram = document.getElementById("instagram").addEventListener("click", tampilkanAlertInstagram);
function tampilkanAlertInstagram() {
  var tes = confirm("Anda yakin ingin mengunjungi instagram?");
  if (tes) {
    window.open("https://instagram.com/__diamondlight__", "_blank");
  } else {
    getElementById("home");
  }
  return;
}

// Link Github
var instagram = document.getElementById("github").addEventListener("click", tampilkanAlertGithub);
function tampilkanAlertGithub() {
  var tes = confirm("Anda yakin ingin mengunjungi github?");
  if (tes) {
    window.open("https://github.com/Rezaprtma/Rezaprtma.github.io ", "_blank");
  } else {
    getElementById("home");
  }
  return;
}