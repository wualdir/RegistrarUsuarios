import React from 'react'
import { useForm } from 'react-hook-form'
import '../Components/SmsConfirmacionUser.css'

const SmsConfirmacionUser = ({Formisconfirmacion,userSelect,setFormisconfirmacion,setuserSelect}) => {
    const {reset} = useForm() 
    const handleexit = ()=>{
        setFormisconfirmacion(false)   
        
        
  reset({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: ''
  })

  setuserSelect()

    }

    return (
    <div className={`SmsDelete ${Formisconfirmacion || 'close'}`} >
    <article className='form'>
        <p>Usuario :  {userSelect?.first_name} {userSelect?.last_name} <span className='eliminado'>Eliminado</span>  </p>
      <footer className="user__footer">
      <button onClick={handleexit} className="user__Btn aceptar" >Aceptar</button>
      </footer>
    </article>  
</div> 
  )
}

export default SmsConfirmacionUser