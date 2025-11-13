import React, { useState, useRef } from 'react'

export default function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState(todo.text)
  const ref = useRef(null)

  function startEdit() {
    setValue(todo.text)
    setEditing(true)
    // focus after state update
    setTimeout(() => ref.current?.focus(), 0)
  }

  function commit() {
    setEditing(false)
    onUpdate(value)
  }

  function cancel() {
    setEditing(false)
    setValue(todo.text)
  }

  return (
    <li className={`todo-item ${todo.done ? 'completed' : ''}`}>
      <input type="checkbox" checked={!!todo.done} onChange={onToggle} />
      {editing ? (
        <input
          ref={ref}
          className="edit"
          value={value}
          onChange={e => setValue(e.target.value)}
          onBlur={commit}
          onKeyDown={e => {
            if (e.key === 'Enter') commit()
            if (e.key === 'Escape') cancel()
          }}
        />
      ) : (
        <div className="text" onDoubleClick={startEdit} title="Double-click to edit">
          {todo.text}
        </div>
      )}
      <button className="delete" onClick={onDelete}>Delete</button>
    </li>
  )
}
