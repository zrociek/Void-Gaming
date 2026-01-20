function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

function validateForm() {
  let email = document.getElementById("email");
  let error = document.getElementById("error");

  if (!email.value.includes("@")) {
    error.textContent = "Błędny email!";
    error.style.color = "red";
    return false;
  }
  return true;
}
