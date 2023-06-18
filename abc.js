const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const username = form.username.value
  const password = form.password.value

  const authenticated = authentication(username, password)

  if (authenticated) {
    window.location.href = "abc2.html"
  } else {
    alert("You have entered wrong username or password! Please check your Login credentials and try again.")
  }
})

// function for checking username and password

function authentication(username, password) {
  if (username === "PoliteAdmin" && password === "@Supplypolite2030") {
    return true
  } else {
    return false
  }
}