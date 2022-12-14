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

const filterToDos = (toDos, inputValue, returnMatchedToDos) => toDos
    .filter(toDo => {
        const matchedToDos = toDo.textContent.toLowerCase().includes(inputValue)
        return returnMatchedToDos ? matchedToDos : !matchedToDos
    })

const manipulateClasses = (toDos, classToAdd, classToRemove) => {
    toDos.forEach(toDo => {
        toDo.classList.remove(classToRemove)
        toDo.classList.add(classToAdd)
    }) 
}


const hideToDos = (toDos, inputValue) => {
    const toDosToHide = filterToDos(toDos, inputValue, false)
    manipulateClasses(toDosToHide, 'hidden', 'd-flex')
}

const showToDos = (toDos, inputValue) => {
    const toDosToShow = filterToDos(toDos, inputValue, true)
    manipulateClasses(toDosToShow, 'd-flex', 'hidden')
}


inputSearchToDo.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase()
    const toDos = Array.from(toDosContainer.children)

    hideToDos(toDos, inputValue)
    showToDos(toDos, inputValue)
})



