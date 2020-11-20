var click = document.querySelector("#botao");


click.addEventListener("click", function () {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
    console.log(xhr)


    xhr.addEventListener("load", function () {
        var pessoas = JSON.parse(xhr.responseText);
        console.log(pessoas);

        var userIdTr = document.querySelector(".coluna");
        var idTr = document.querySelector(".id");
        var titleTr = document.querySelector(".title");
        var completeTr = document.querySelector(".complete");

        var userIdTd = document.createElement("td");
        var idTd = document.createElement("td");
        var titleTd = document.createElement("td");
        var completeTd = document.createElement("td");

        var tr = document.createElement("tr")

        pessoas.forEach(p => {

            userIdTr = document.querySelector(".coluna");
            idTr = document.querySelector(".id");
            titleTr = document.querySelector(".title");
            completeTr = document.querySelector(".complete");

            userIdTr = p.userId;
            idTr = p.id;
            titleTr = p.title;
            completeTr = p.completed;

            userIdTd.classList.add("userId");
            userIdTd.textContent = p.userId;
            tr.appendChild(userIdTd,"coluna");


            idTd.classList.add("id");
            idtd.textContent = p.id;
            tr.appendChild(idTd,"id");


            
            titleTd.classList.add("title");
            titletd.textContent = p.title;
            tr.appendChild(titleTd,"title");


            
            completeTd.classList.add("complete");
            completeTd.textContent = p.completed;
            tr.appendChild(completeTd,"complete");


            document.querySelector(".lista").appendChild(tr)
            


        });
    })
    xhr.send();
})