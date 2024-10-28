function adicionarItem() {
    let itemList = window.document.getElementById("item-list");
    let item = document.getElementById("item-input").value;

    if (item == ""){
        return;
    } else {
        
        let itemElement = window.document.createElement("li"); // Criando o elemento li
        itemElement.classList.add("item"); // Adicionando a classe item no elemento
        itemElement.id = "item";

        let checkbox = window.document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        itemElement.appendChild(checkbox);
        
        let itemText = window.document.createElement("div"); // Criando o elemento div;
        itemText.classList.add("itemText");
        itemText.innerHTML = item;
        itemElement.appendChild(itemText);

        let botao = window.document.createElement("button");

        let iconLixo = window.document.createElement("i");
        iconLixo.classList.add("bx");
        iconLixo.classList.add("bx-trash");
        iconLixo.setAttribute("onclick","deletarItem()");
        iconLixo.id = "BotaoRemove";
        botao.appendChild(iconLixo);

        itemElement.appendChild(botao);

        itemList.appendChild(itemElement);

        document.getElementById("item-input").value = "";

    }
}

function deletarItem(){
    let item = document.getElementById("item");
    let aviso = document.getElementById("AvisoItemExcluido");

    item.remove();

    aviso.classList.add("visible");

    setTimeout(() => {
        aviso.classList.remove("visible");
    }, 3000);
}

function ocultarAviso(){
    let aviso = document.getElementById("AvisoItemExcluido");

    aviso.classList.remove("visible");
}