document.addEventListener("DOMContentLoaded", function() {
  console.log("Freeze site here");
  Object.freeze(document.getElementById("main-content"));
});
