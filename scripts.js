document.addEventListener('DOMContentLoaded', function(){
    function new_task(){
        const ul = document.querySelector('#Lista');
        const text = document.querySelector('input[type="text"]');

        if (text.value === '') {
            return;
        }
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        
        checkbox.type = 'checkbox';

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(text.value));
        ul.appendChild(li);
        console.log("Me estoy ejecutando")
        text.value = '';
        console.log(text)
    }

    function remove_task(){
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const ul = document.querySelector('#Lista');
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                ul.removeChild(checkboxes[i].parentNode);
            }
        }
    }

    function add_task(event){
        console.log('add task');
    }

    const Button = document.querySelector('#agregar');
    Button.addEventListener('click', new_task);
    if (document.querySelectorall('input[type="checkbox"]') !== null) {
        const checkbox = document.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('click', remove_task);
    }
});