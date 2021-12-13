
function addTarefa() {
    var lista = document.querySelector('#list');
    var tarefa = document.querySelector('#tarefa');
    
    var confirm = '<img onclick="changeState(this)" src="img/confirm.png" id="confirm" value="0"/>';
    var remove = '<img onclick="removeTask(this)" src="img/decline.png" id="decline" value="0"/>';

    var item = '<li id="item" value="0">' + tarefa.value + '   ' + confirm + remove + '<hr>' + '</li>';

    lista.innerHTML += item;
    tarefa.value = '';
    tarefa.focus();
}

function changeState(element) {
    var itens = document.querySelectorAll("#item");

    if (element.value == "0") {
        element.src="img/confirmed.png";
        element.value = "1";

        var confirmElements = document.querySelectorAll("#confirm");
        
        for (let index = 0; index < confirmElements.length; index++) {
            if(confirmElements[index].value == "1"){
                itens[index].style.color = "#31FF4E";
                itens[index].style.textDecoration = "line-through";
            }
        }

    } else {
        element.src="img/confirm.png";
        element.value = "0";
        
        var confirmElements = document.querySelectorAll("#confirm");
        
        for (let index = 0; index < confirmElements.length; index++) {
            if(confirmElements[index].value == "0"){
                itens[index].style.color = "#000000";
                itens[index].style.textDecoration = "none";
            }
        }
    }
}

function removeTask(element) {
    var itens = document.querySelectorAll("#item");

    for (var index = 0; index <itens.length; index++){
        itens[index].querySelector("#decline").addEventListener("click",function(){
            this.closest("#item").remove();
        });
    }
}