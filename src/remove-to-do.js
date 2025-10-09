export function removeToDo(array) {
const allRemoveButton = document.querySelectorAll('.to-do-remove-button');

allRemoveButton.forEach((button)=> {
  button.addEventListener('click', ()=> {
    console.log(button.parentElement.parentElement)    
    array.forEach((todo) => {
      //check if the title of the todo is equal to the data title attribute 
      console.log(todo.title === button.parentElement.parentElement.getAttribute('data-title'))
      
    })
  })
});
}


