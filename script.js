const todoForm = document.querySelector(".form-todo")
const inputText = document.querySelector(".form-todo input[type='text']")
const newul = document.querySelector(".todo-ul")
console.log(newul.textContent)
// console.log(ul.textContent)
todoForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const entertTodo = inputText.value
    const newLi = document.createElement("li")
    const newinnerHtml =`<span class="text">${entertTodo}</span>
    <div class="Todo buttons">
        <button class="Todo-btn done">Done</button>
        <button class="Todo-btn remove">Remove</button>
    </div>`
    newLi.innerHTML= newinnerHtml;
    newul.append(newLi)
    inputText.value="";
    console.log("form submitted!!!")
 
   
})

newul.addEventListener('click', (e)=>{
    var i = 0;
    if(e.target.classList.contains("done")){
        i++;
       const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration="line-through"
        }  
    if(e.target.classList.contains("remove")){
        const removeList = e.target.parentNode.parentNode
        removeList.remove();
    }
    console.log(i);
})

