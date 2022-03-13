// alert("ok");

const todos =[];

const render = function(){
    const parent_container = document.getElementById("list_container");
    parent_container.innerHTML ="";


    for(let i =0; i < todos.length; i++){
        const single_todo_item = todos[i];
        const new_li = document.createElement("li");
        new_li.innerText =single_todo_item;
        parent_container.appendChild(new_li);
    }
}

//this is add a new itwm to the array

const add_item = function(){
    const ip = document.getElementById('todo_input');
    const new_todo = ip.value;
    ip.value ="";
    todos.push(new_todo);
    render();
}

const btn = document.getElementById('add_btn');
btn.addEventListener('click', add_item);