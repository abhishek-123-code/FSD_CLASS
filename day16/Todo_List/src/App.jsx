import React, { useEffect, useState, useRef } from 'react'
import TodoItem from './components/TodoItem'

const STORAGE_KEY = 'simple_todos_v1'

export default function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')
  const [filter, setFilter] = useState('all') // all | active | completed
  const inputRef = useRef(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      setTodos(raw ? JSON.parse(raw) : [])
    } catch (e) {
      console.error('Failed to load todos', e)
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    } catch (e) {
      console.error('Failed to save todos', e)
    }
  }, [todos])

  function addTodo() {
    const v = text.trim()
    if (!v) return
    setTodos(prev => [...prev, { id: Date.now().toString(), text: v, done: false }])
    setText('')
    inputRef.current?.focus()
  }

  function toggleTodo(id) {
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  function updateTodo(id, newText) {
    const v = newText.trim()
    if (!v) {
      // delete if empty after edit
      setTodos(prev => prev.filter(t => t.id !== id))
      return
    }
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, text: v } : t)))
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  function clearCompleted() {
    setTodos(prev => prev.filter(t => !t.done))
  }

  const filtered = todos.filter(t => {
    if (filter === 'active') return !t.done
    if (filter === 'completed') return t.done
    return true
  })

  const remaining = todos.filter(t => !t.done).length

  return (
    <div className="root">
      <main className="todo-app">
        <h1>Todo List</h1>

        <section className="add-area">
          <input
            ref={inputRef}
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addTodo()}
            placeholder="What needs to be done?"
            aria-label="New todo"
          />
          <button className="primary" onClick={addTodo}>Add</button>
        </section>
        
  <section className="controls">
          <div className="left">
            <span className="counter">{remaining} item{remaining !== 1 ? 's' : ''} left</span>
          </div>
          <div className="filters">
            <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
            <button onClick={() => setFilter('active')} className={filter === 'active' ? 'active' : ''}>Active</button>
            <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
          </div>
          <div className="right">
            <button onClick={clearCompleted}>Clear completed</button>
          </div>
        </section>

        <ul className="todo-list" aria-live="polite">
          {filtered.length === 0 && <li className="empty">No todos</li>}
          {filtered.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => toggleTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
              onUpdate={newText => updateTodo(todo.id, newText)}
            />
          ))}
        </ul>

        <footer className="hint">Todos are saved in your browser (localStorage).</footer>
      </main>
    </div>
  )
}
