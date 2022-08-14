let input = document.getElementById('inp');
const add = document.getElementById('button-addon2');

const leftFrame = document.querySelector('#inner #inner-left');
const rightFrame = document.querySelector('#inner #inner-right');



const taskAdder = (value)=>
{
    const div = document.createElement('div');
    div.className = "topic";
    const inp_sec = document.createElement('input');
    inp_sec.className = "form-check-input";
    inp_sec.type = "checkbox";
    inp_sec.id = "flexCheckDefault";
    div.appendChild(inp_sec);

    const h6 = document.createElement('h6');
    h6.innerHTML = value;

    div.appendChild(h6);
    leftFrame.appendChild(div);
    inp_sec.onclick = function()
    {
        taskDoneAdder(inp_sec.nextElementSibling.innerHTML);
        inp_sec.parentElement.parentElement.removeChild(inp_sec.parentElement);
    }
}

const taskDoneAdder = (value)=>
{
    const div = document.createElement('div');
    div.className = "topic";
    const h6 = document.createElement('h6');
    h6.innerHTML = value;
    const del_btn = document.createElement('button');
    del_btn.className = "btn btn-outline-danger btn-sm p-1";
    del_btn.type = "button";
    del_btn.innerHTML = "Delete";
    
    div.appendChild(h6);
    div.appendChild(del_btn);

    div.style.marginBottom = "12px";

    rightFrame.appendChild(div);
    del_btn.onclick = function()
    {
        del_btn.parentElement.remove();
    }
}

input.addEventListener("keypress", function(event){
    if (event.key === "Enter")
    {
        event.preventDefault();
        add.click();
        
    }
})


add.onclick = function(){
    if (input.value !== "")
    {
        taskAdder(input.value);
        input.value = "";
    }
    else{
        alert("Black Task?");
    }
}




