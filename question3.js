document.querySelector("#btnq3").addEventListener("click", toDoList);

function toDoList() {
    fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {
        return response.json();
    })
        .then((data) => {
            // console.log(data);
            //display in html
            let q3 = "";
            data.forEach((user) => {
                q3 += `<div class="f1">  <p> ${user.id}</p>   <p>${user.title} </p> <p> ${user.completed}</p></div>`
            })
            document.querySelector("#q3").innerHTML = q3;
        })

}
