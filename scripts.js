
function new_task(){
    const ul = document.querySelector('#Lista');
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const text = document.querySelector('input[type="text"]').value;
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(text));
    ul.appendChild(li);
    

}

function remove_task(event){
    console.log('remove task');
}

function add_task(event){
    console.log('add task');
}



const form = document.querySelector('input[type="submit"]');
form.addEventListener('click', new_task);

console.log(form);
