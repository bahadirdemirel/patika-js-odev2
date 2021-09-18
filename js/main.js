// add new element when the 'ekle' button is clicked
function newElement() {
    // take the input
    let inputText = document.querySelector('#task');

    // check the input whether empty or not
    if (inputText.value === "") {
        $('#liveToast2').toast('show');
        return;
    }

    // create li item
    let liDOM = document.createElement('li');
    liDOM.innerHTML = `${inputText.value} <span class="close">x</span>`;

    // append li to ul
    let ulDOM = document.querySelector('#list');
    ulDOM.append(liDOM);

    // add delete attribute
    closeDOM = document.getElementsByClassName("close");
    closeDOM[closeDOM.length - 1].onclick = function(){
        this.parentElement.remove();
    }

    // add onclick function
    liList[liList.length - 1].onclick = function(){
        this.classList.toggle("checked");
    }

    // show toast message and clean the input
    $('#liveToast').toast('show');
    inputText.value = "";
}

// add <span class="close">x</span> to all li items
let liList = document.getElementsByTagName("li");
for(let i = 0; i < liList.length; i++){
    let elem = `<span class="close">x</span>`;
    liList[i].innerHTML += elem;
}

// delete element when 'x' is clicked
let closeDOM = document.getElementsByClassName("close");
for(let i = 0; i < closeDOM.length; i++){
    closeDOM[i].onclick = function(){
        this.parentElement.remove();
    }
}

// when 'li' is clicked, add checked class to 'li'
for(let i = 0; i < liList.length; i++){
    liList[i].onclick = function(){
        this.classList.toggle("checked");
    }
}
