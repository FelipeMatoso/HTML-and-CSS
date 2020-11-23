var click = document.querySelector("#botao");

click.addEventListener("click", function () {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
    console.log(xhr)


    xhr.addEventListener("load", function () {
        var pessoas = JSON.parse(xhr.responseText);
        console.log(pessoas);

        var userIdTr = document.querySelector(".userId");
        var idTr = document.querySelector(".id");
        var titleTr = document.querySelector(".title");
        var completeTr = document.querySelector(".complete");

        var userIdTd = document.createElement("td");
        var idTd = document.createElement("td");
        var titleTd = document.createElement("td");
        var completeTd = document.createElement("td");

        var tr = document.createElement("tr")

        pessoas.forEach(p => {

            userIdTr = p.userId;
            idTr = p.id;
            titleTr = p.title;
            completeTr = p.completed;

            userIdTd.textContent = p.userId;
            userIdTd.classList.add("userId");
            tr.appendChild(userIdTd,"userId");

            console.log(tr)

            idTd.textContent = p.id;
            idTd.classList.add("id");
            tr.appendChild(idTd,"id");
            console.log(tr)


            
            titleTd.textContent = p.title;
            titleTd.classList.add("title");
            tr.appendChild(titleTd,"title");

            console.log(tr)

            
            completeTd.textContent = p.completed;
            completeTd.classList.add("complete");
            tr.appendChild(completeTd,"complete");
            console.log(tr)


            document.querySelector(".linha").appendChild(tr)
            console.log("passou ");
            console.log(tr)

        });
    })
    xhr.send();
})