class User {
  constructor(n, a) {
    this.name = n;
    this.age = a;
  }
}

function clearFields() {
  document.querySelector("#name").value = "";
  document.querySelector("#age").value = "";
}

let user; // Declare user outside the event listeners so it can be accessed in both

window.addEventListener("DOMContentLoaded", function (e) {
  document.querySelector("#make").addEventListener("click", function (e) {
    // Code to be executed when the button is clicked
    let name = document.querySelector("#name").value;
    let age = document.querySelector("#age").value.trim();
    user = new User(name, age);
    if (user.name === "" || user.age === "") {
      alert("Please enter a Name and Age");
      return;
    }

    age = parseInt(age); //convert to number
    if (!isNaN(age)) {
      console.log("Age is a number");
    } else {
      alert("Age must be a number");
      return;
    }
    console.log(user);
    clearFields(); // Clear the fields after creating the user
    e.preventDefault();
  });

  document
    .querySelector("#displayButton")
    .addEventListener("click", function (e) {
      // Code to be executed when the button is clicked
      if (user) {
        let html = `<p> Name: ${user.name} <br/> Age: ${user.age}</p> `;
        document.querySelector("#userInfo").innerHTML = html;
        clearFields(); // Clear the fields after displaying the user
      } else {
        console.log("No user to display");
      }
      e.preventDefault();
    });
});
