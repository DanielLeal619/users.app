import { useEffect, useState } from 'react'
import './App.css'
import { useFetch } from './hook/useFetch'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

function App() {

  const [infoUpdate, setInfoUpdate] = useState()


  const baseUrl = "http://localhost:8080/users"

  const [users, getUsers, createUser, deleteUser, updateUser] = useFetch(baseUrl)

  useEffect(() => {
    getUsers("/users")
  }, [])

  const [style, setStyle] = useState("false")

  const modalWindow = () => {
    if (style === "false") {
      setStyle("true")
    } else {
      setStyle("false")
    }
  }

  const modalWindow2 = (e) => {
    e.preventDefault()
    if (style === "false") {
      setStyle("true")
    } else {
      setStyle("false")
    }
  }

  return (
    <div>
      <div className="header">
        <h1 className='title'>Users</h1>
        <button className='btn__create' onClick={modalWindow}>Create a user</button>
      </div>
      <FormUsers
        createUser={createUser}
        infoUpdate={infoUpdate}
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
        style={style}
        modalWindow2={modalWindow2}
        setStyle={setStyle}
      />
      <div className='all__card'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              style={style}
              modalWindow={modalWindow}
              setStyle={setStyle}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
