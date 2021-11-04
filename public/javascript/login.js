async function loginFormHandler(event) {
  event.preventDefault();
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert(response.statusText);
      }
    }
  }

async function signupFormHandler(event) {
  event.preventDefault();
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  if (email && password && username) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
        username,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      if (
        document.location === "http://project2.herokuapp.com/login" ||
        "localhost:3001/login"
      ) {
        document.location.replace("/profile");
      } else {
        alert(response.statusText);
      }
    }
  }
}
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
