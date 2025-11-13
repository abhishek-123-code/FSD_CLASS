// Simple Todo app with localStorage persistence
const STORAGE_KEY = 'simple_todos_v1'
const input = document.getElementById('todo-input')
const addBtn = document.getElementById('add-btn')
const list = document.getElementById('todo-list')
const counter = document.getElementById('counter')
const clearCompletedBtn = document.getElementById('clear-completed')

let todos = []

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    todos = raw ? JSON.parse(raw) : []
  } catch (e) {
    console.error('Failed to load todos', e)
    todos = []
  }
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  } catch (e) {
    console.error('Failed to save todos', e)
  }
}

function render() {
  list.innerHTML = ''
  todos.forEach(todo => {
    const li = document.createElement('li')
    li.className = 'todo-item' + (todo.done ? ' completed' : '')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = !!todo.done
    checkbox.addEventListener('change', () => toggleTodo(todo.id))

    const span = document.createElement('div')
    span.className = 'text'
    span.textContent = todo.text
    span.title = 'Double-click to edit'
    span.addEventListener('dblclick', () => startEdit(todo.id, span))

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', () => deleteTodo(todo.id))

    li.appendChild(checkbox)
    li.appendChild(span)
    li.appendChild(deleteBtn)
    list.appendChild(li)
  })
  updateCounter()
}

function updateCounter() {
  const remaining = todos.filter(t => !t.done).length
  counter.textContent = `${remaining} item${remaining !== 1 ? 's' : ''}`
}

function addTodo(text) {
  const trimmed = String(text).trim()
  if (!trimmed) return
  todos.push({ id: Date.now().toString(), text: trimmed, done: false })
  save()
  render()
}

function toggleTodo(id) {
  const t = todos.find(x => x.id === id)
  if (!t) return
  t.done = !t.done
  save()
  render()
}

function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id)
  save()
  render()
}

function startEdit(id, spanEl) {
  const todo = todos.find(t => t.id === id)
  if (!todo) return
  const input = document.createElement('input')
  input.type = 'text'
  input.className = 'edit'
  input.value = todo.text
  spanEl.replaceWith(input)
  input.focus()
  input.setSelectionRange(input.value.length, input.value.length)

  function commit() {
    const v = input.value.trim()
    if (v) todo.text = v
    else todos = todos.filter(t => t.id !== id)
    save()
    render()
  }
  function cancel() {
    render()
  }
  input.addEventListener('blur', commit)
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') commit()
    if (e.key === 'Escape') cancel()
  })
}

addBtn.addEventListener('click', () => {
  addTodo(input.value)
  input.value = ''
  input.focus()
})

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTodo(input.value)
    input.value = ''
  }
})

clearCompletedBtn.addEventListener('click', () => {
  todos = todos.filter(t => !t.done)
  save()
  render()
})

// init
load()
render()
