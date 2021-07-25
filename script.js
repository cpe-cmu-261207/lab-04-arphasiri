const input = document.querySelector('input')
const btn = document.querySelector('#btn')
var todolist=[]
var donelist=[]
// local

if (localStorage.getItem('todo') === null) {
    localStorage.setItem('todo', JSON.stringify([]));
}
var t= []
 t = JSON.parse(localStorage.getItem('todo'))

if (localStorage.getItem('done') === null) {
    localStorage.setItem('done', JSON.stringify([]));
}
var d=[]
 d = JSON.parse(localStorage.getItem('done'))

 for (let index = 0; index < t.length; index++) {
    todolist.push(t[index])
    addtodo(t[index])
    localStorage.todo = JSON.stringify(todolist) 
 }

for (let index = 0; index < d.length; index++) {
    donelist.push(d[index])
    adddone(d[index])
    localStorage.done = JSON.stringify(donelist)
    
}


// alert
btn.addEventListener('click', () => {
    if (input.value === '')
        alert("task cannot be empty")
    else {
        addtodo(input.value)
        todolist.push(input.value)
        input.value = ''
        localStorage.todo = JSON.stringify(todolist)
        localStorage.done = JSON.stringify(donelist)
    }
})


// enter button
input.addEventListener('keyup', (evnt) => {
    if (evnt.keyCode === 13) {
        if (input.value === '')
            alert("task cannot be empty")
        else {
            addtodo(input.value)
            todolist.push(input.value)
            input.value = ''
            localStorage.todo = JSON.stringify(todolist)
            localStorage.done = JSON.stringify(donelist)
        }
    }
})


function addtodo(textnow) {
    const divtesk = document.createElement('div')
    const divbtn = document.createElement('div')
    const text = document.createElement('p')
    const donebtn = document.createElement('button')
    const delbtn = document.createElement('button')
    const tlist = document.querySelector('#tlist')
    divtesk.addEventListener('mouseover', () => {
        donebtn.style.visibility = "visible"
        delbtn.style.visibility = "visible"
    })
    divtesk.addEventListener('mouseout', () => {
        donebtn.style.visibility = "hidden"
        delbtn.style.visibility = "hidden"
    })
    //tailwindcss
    divtesk.classList = 'max-w-screen-md mx-96 shadow-md flex p-2 justify-between bg-purple-600 bg-opacity-50 rounded-md my-2  '
    divbtn.classList = 'space-x-20 '
    text.innerText = textnow
    text.classList = 'text-2xl font-sans'
    donebtn.classList = 'button p-2 text-2xl font-sans rounded-md bg-green-400 hover:bg-green-200'
    delbtn.classList = 'button p-2 text-2xl font-sans rounded-md bg-red-500 hover:bg-red-200'
    donebtn.innerText = 'Done ✅'
    delbtn.innerText = 'Delete ❌'


    //hidden button
    donebtn.style.visibility = "hidden"
    delbtn.style.visibility = "hidden"
    donebtn.addEventListener('click', () => {
        todolist.splice(todolist.indexOf(text.innerText), 1)
        donelist.push(text.innerText)
        localStorage.todo = JSON.stringify(todolist)
        localStorage.done = JSON.stringify(donelist)
        adddone(text.innerText)
        divtesk.remove()
    })
    delbtn.addEventListener('click', () => {
        todolist.splice(todolist.indexOf(text.innerText), 1)
        localStorage.todo = JSON.stringify(todolist)
        localStorage.done = JSON.stringify(donelist)
        divtesk.remove()
    })
    divbtn.append(donebtn)
    divbtn.appsnd(delbtn)
    divtesk.append(text)
    divtesk.append(divbtn)
    tlist.append(divtesk)
}

function adddone(textnow) {
    const divtesk = document.createElement('div')
    const text = document.createElement('p')
    const DoneListDiv = document.querySelector('#dlist')
    text.innerText = textnow
    text.classList = 'text-2xl'
    text.style.textDecoration = 'line-through'
    divtesk.classList = 'max-w-screen-md mx-96 shadow-md flex p-2 justify-between bg-gray-600 bg-opacity-75 rounded-md my-2'
    divtesk.append(text)
    DoneListDiv.append(divtesk)
}
