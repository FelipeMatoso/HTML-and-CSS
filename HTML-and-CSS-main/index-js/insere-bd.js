var click = document.querySelector("#botao");

click.addEventListener("click", function () {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");


    xhr.addEventListener("load", function () {
        var pessoas = JSON.parse(xhr.responseText);



        var tr = document.createElement("table");

        pessoas.forEach(p => {


                var userIdTr = document.querySelector(".userId");
                var idTr = document.querySelector(".id");
                var titleTr = document.querySelector(".title");
                var completeTr = document.querySelector(".complete");

                var userIdTd = document.createElement("td");
                var idTd = document.createElement("td");
                var titleTd = document.createElement("td");
                var completeTd = document.createElement("td");

                tr = document.createElement("tr");

                userIdTr = p.userId;
                idTr = p.id;
                titleTr = p.title;
                completeTr = p.completed;


                userIdTd.textContent = p.userId;
                userIdTd.classList.add("userId");
                tr.appendChild(userIdTd, "userId");


                idTd.textContent = p.id;
                idTd.classList.add("id");
                tr.appendChild(idTd, "id");



                titleTd.textContent = p.title;
                titleTd.classList.add("title");
                tr.appendChild(titleTd, "title");



                completeTd.textContent = p.completed;
                completeTd.classList.add("completed");
                tr.appendChild(completeTd, "complete");

                tr.classList.add("linha");
                document.querySelector(".tabela").appendChild(tr);
                console.log("feito");
            }

        });
    })
    xhr.send();
})