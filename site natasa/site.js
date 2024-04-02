function toggleLetter(letterId) {
    var letter = document.getElementById(letterId);
    if (letter.style.display === "none") {
      letter.style.display = "block";
    } else {
      letter.style.display = "none";
    }
}