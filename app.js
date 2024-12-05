const inputText = document.querySelector('.input')
const cardLists = document.querySelector('.card__body');
const submitForm = document.querySelector('.form')

submitForm.addEventListener('submit', (event)=> {
    event.preventDefault()
    const liEl = document.createElement('li')
    const spnEl = document.createElement('span')
    const trashBtn = document.createElement('button');
    const iconEl = document.createElement('i')
    iconEl.className = 'fa-solid fa-trash'
    trashBtn.className = 'trashBtn'
    trashBtn.appendChild(iconEl)
    trashBtn.addEventListener('click', (e)=> {
        e.target.closest('li').remove()
    })
        if(inputText.value.trim() !== '' && inputText.value.length < 55){
    
        spnEl.textContent = inputText.value;
    
        liEl.append(spnEl, trashBtn)
    
        cardLists.appendChild(liEl)
        }else{
            return confirm('Error: Please,check whether the number of characters is beween 1 and 55!')
        }
    inputText.value = ''
})