
import { useEffect, useState } from 'react'
import './App.css'
import UseCrud from './Hooks/UseCrud'
import FormUser from './Components/FormUser'
import UserCard from './Components/UserCard'
import SmsDeleteUser from './Components/SmsDeleteUser'
import SmsConfirmacionUser from './Components/SmsConfirmacionUser'

function App() {
  const [userSelect, setuserSelect] = useState()
  const [FormisOpen, setFormisOpen] = useState(false)
  const [FormisDelete, setFormisDelete] = useState(false)
  const [Formisconfirmacion, setFormisconfirmacion] = useState(false)
  const [users,getUsers,createUser,deleteUser,updateUser] = UseCrud('/users/')
useEffect(() => {
  getUsers()
}, [])

const handleopenform = () =>{
  setFormisOpen(true)
}
   return (
     <div>
      <div className='Header'> 
      <h1 className='Header__Title'>Usuarios</h1>
      <button className='Header__Button' onClick={handleopenform}>Nuevo Usuario</button>
     </div>
      
      <FormUser 
      createUser={createUser}
      userSelect={userSelect}
      updateUser={updateUser}
      setuserSelect={setuserSelect}
      FormisOpen={FormisOpen}
      setFormisOpen={setFormisOpen}
      />

      <div className='user__container'>
      {
        users?.map(user => (
          <UserCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          setuserSelect={setuserSelect}
          setFormisOpen={setFormisOpen}
          setFormisDelete={setFormisDelete}
          />
        ))
      }
      </div>

        <SmsDeleteUser
        FormisDelete={FormisDelete}
        setFormisDelete={setFormisDelete}
        userSelect={userSelect}
        setuserSelect={setuserSelect}
        deleteUser={deleteUser}
        Formisconfirmacion={Formisconfirmacion}
     setFormisconfirmacion={setFormisconfirmacion}
        />
     
     <SmsConfirmacionUser
     Formisconfirmacion={Formisconfirmacion}
     setFormisconfirmacion={setFormisconfirmacion}
     userSelect={userSelect}
     setuserSelect={setuserSelect}
     />

    </div>
  )
}

export default App
