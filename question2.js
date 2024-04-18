document.querySelector("#btnq2").addEventListener("click", showJson);

function showJson() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./data/user.json");
  xhr.onload = function () {
    if (this.status === 200) {
      const user = JSON.parse(this.responseText);
      // console.log(user.name);
      //display in html
      const q2 = `<ul> <li>Name: ${user.name}</li> <li>Email: ${user.email}</li> <li>Company: ${user.company}</li> <li>Address: ${user.address}</li> </ul>`;
      document.querySelector("#q2").innerHTML = q2;
    }
  };
  xhr.send();
}
