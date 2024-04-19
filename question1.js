class User {
    constructor(n, a) {
      this.name = n;
      this.age = a;
    }
   
    // makeObj() {
    //     // implementation
       

    // }

    // displayObj() {
    //     // implementation
    // }

    // clearFields() {
    //     document.querySelector("#name").value = "";
    //     document.querySelector("#age").value = "";
    // }
}

window.addEventListener("DOMContentLoaded", function (e) {
    document.querySelector("#make").addEventListener("click", function (e) {
        // Code to be executed when the button is clicked
        let name = document.querySelector("#name").value;
        let age = document.querySelector("#age").value.trim();
        age = parseInt(age); //convert to number
        if (!isNaN(age)) {
            console.log("Age is a number");
        } else {
           alert("Age must be a number");
        }
        user = new User(name, age);
        console.log(user);
        // console.log("Make Button clicked!");
        e.preventDefault();
        
    });

    document.querySelector("#displayButton").addEventListener("click", function (e) {
        // Code to be executed when the button is clicked
        if (user) {
            let html = `<p> Name: ${user.name} <br/> Age: ${user.age}</p> `;
            document.querySelector("#userInfo").innerHTML = html;
            // console.log("Display Button clicked!");
        } else {
            console.log("No user to display");
        }
        e.preventDefault();
    });
    
});
