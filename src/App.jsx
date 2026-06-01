import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import Navbar from './components/Navbar'

import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import './index.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    city: '',
    active: true
  })

  const [users, setUsers] = useState(() => {
    try {
      const saved = localStorage.getItem('users')
      return saved ? JSON.parse(saved) : []
    } catch {
      localStorage.clear()
      return []
    }
  })

  const [editing, setEditing] = useState(null)
  const [valid, setValid] = useState('')

  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('darkMode') === 'true'
  )

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
    localStorage.setItem('darkMode', darkMode)
  }, [users, darkMode])

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function handleAdd() {
    if (
      !formData.name ||
      !formData.email ||
      !formData.age ||
      !formData.city
    ) {
      setValid('Please fill all fields')
      return
    }

    if (users.some(user => user.email === formData.email)) {
      setValid('Email already exists')
      return
    }

    if (formData.age < 1 || formData.age > 120) {
      setValid('Invalid age')
      return
    }

    if (editing !== null) {
      setUsers(
        users.map((user, index) =>
          index === editing ? formData : user
        )
      )
      setEditing(null)
    } else {
      setUsers([...users, formData])
    }

    setValid('')
    setFormData({
      name: '',
      email: '',
      age: '',
      city: '',
      active: true
    })
  }

  function handleEdit(index) {
    setEditing(index)
    setFormData(users[index])
  }

  function handleDelete(index) {
    setUsers(users.filter((_, i) => i !== index))
  }

  function handleCancel() {
    setEditing(null)
    setValid('')
    setFormData({
      name: '',
      email: '',
      age: '',
      city: '',
      active: true
    })
  }

  function handleActive(index) {
    setUsers(
      users.map((user, i) =>
        i === index
          ? { ...user, active: !user.active }
          : user
      )
    )
  }

  function handleSort(field) {
    const sorted = [...users].sort((a, b) => {
      if (field === 'name')
        return a.name.localeCompare(b.name)

      if (field === 'age')
        return a.age - b.age
    })

    setUsers(sorted)
  }

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Navbar />

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? '☀ Light' : '🌙 Dark'}
      </button>

      <Routes>
        <Route
          path="/"
          element={<Home users={users} />}
        />

        <Route
          path="/users"
          element={
            <Users
              users={users}
              formData={formData}
              editing={editing}
              valid={valid}
              handleAdd={handleAdd}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              handleCancel={handleCancel}
              handleChange={handleChange}
              handleActive={handleActive}
              handleSort={handleSort}
            />
          }
        />

        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App