function loadTodos()
{
    // this funcition will load the todes from the browser
    
    const todes =  JSON.parse(localStorage.getItem("todos")) || {"todoList": []} ;
    console.log(todes)

    return todes ; 

}




function addTodoToLocalStorage(todoText)
{
    const todos = loadTodos()

    todos.todoList.push(todoText)

    localStorage.setItem("todos" , JSON.stringify(todos) )
}




document.addEventListener("DOMContentLoaded" , () => {
    
    const todoinput =   document.getElementById("todoinput");

    const submitButton = document.getElementById("addtodo");


    submitButton.addEventListener('click' , (event) => {

        const todoText = todoinput.value ; 

        if( todoText == '' )
        {
            alert("Please write something for todo");
        }
        else 
        {
            addTodoToLocalStorage(todoText);
        }
    });


    todoinput.addEventListener('change' , (event) => {
        // this call back method is fired everytime there is a change in the input tag

        const todoText = event.target.value ;
        
        event.target.value = todoText.trim();

        console.log(event.target.value)

    });

    loadTodos();

});


