const formAddToDo = document.querySelector('.form-add-todo')
const toDosContainer = document.querySelector('.todos-container')
const inputSearchToDo = document.querySelector('.form-search input')

const addToDo = inputValue => {
    if (inputValue.length) {
        toDosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
        </li>`

        event.target.reset()
    }
}

formAddToDo.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.add.value.trim()
    addToDo(inputValue)
})

const removeToDo = clickedElement => {
    const trashDataValue = clickedElement.dataset.trash
    const todo = document.querySelector(`[data-todo="${trashDataValue}"]`)

    if (trashDataValue) {
        todo.remove()
    }
}


toDosContainer.addEventListener('click', event => {
    const clickedElement = event.target
    removeToDo(clickedElement)
})

inputSearchToDo.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase()
    Array.from(toDosContainer.children)
        .filter(toDo => !toDo.textContent.toLowerCase().includes(inputValue))
        .forEach(toDo => {
            toDo.classList.remove('d-flex')
            toDo.classList.add('hidden')
        }) 
    Array.from(toDosContainer.children)
        .filter(toDo => toDo.textContent.toLowerCase().includes(inputValue))
        .forEach(toDo => {
            toDo.classList.remove('hidden')
            toDo.classList.add('d-flex')
        }) 
})

// 13: 50

