
import { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import '../Components/Formuser.css'
const FormUser = ({createUser,userSelect,updateUser,setuserSelect,FormisOpen,setFormisOpen}) => {
  
   
 const {handleSubmit, register,reset,formState:{errors}} = useForm()

 useEffect(() => {
   reset(userSelect)
 }, [userSelect])
 

 const submit =data=>{
   if (userSelect) {
     updateUser(userSelect.id,data)
     setuserSelect()
  }else{
    createUser(data)
  }

  reset({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: ''
  })
  setFormisOpen(false)

 }
 const handleexit = ()=>{
  setFormisOpen(false)

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
    <div className={`form-container ${FormisOpen || 'form__close'}`} >
    <form className='form' onSubmit={handleSubmit(submit)}>
      <span onClick={handleexit} className='form__exit'>X</span>
      <h2 className='form__title'>{userSelect ?  'register form' : 'create form'}</h2>
      <div className='form__list'>
      <label  className='form__field'>
        <span  className='form__label'>Email</span>
        <input  className='form__input' {...register('email',{
          required:'Campo Obligatorio *',
          pattern:{
            value:/^\S+@\S+$/i,
            message:'Ingrese correo valido'
          }
        })} type="email" />
        <h5>{errors.email?.message}</h5>
      </label>
      <label className='form__field'>
        <span className='form__label'>Password</span>
        <input  className='form__input'{...register('password',{
          required:'Campo Obligatorio *',
          minLength:{
          value:8,
          message:'La contraseña debe tener minimo 8 caracteres'
          }
        })} type="password"/>
        <h5>{errors.password?.message}</h5>
      </label>
      <label className='form__field'>
        <span className='form__label'>First Name</span>
        <input className='form__input' {...register('first_name',{
          required:'Campo Obligatorio *',
          pattern:{
          value:/[^0-9]/,
          message:'Ingrese nombre valido'
          }
        })} type="text" />
        <h5>{errors.first_name?.message}</h5>
      </label>
      <label className='form__field'>
        <span className='form__label'>Last Name</span>
        <input  className='form__input'{...register('last_name',{
           required:'Campo Obligatorio *',
           pattern:{
           value:/[^0-9]/,
           message:'Ingrese apellido valido'
           }
        })
         } type="text" />
         <h5>{errors.last_name?.message}</h5>
      </label>
      <label className='form__field'>
        <span className='form__label'>Birthday</span>
        <input className='form__input' {...register('birthday',{
          required:'Campo Obligatorio *',
          pattern:{
          value:/[^0-9]/,
          message:'Ingrese apellido valido'
          }
        })} type="date" />
         <h5>{errors.birthday?.message}</h5>
      </label>
      </div>
      <button className='form__btn'>Submit</button>
    </form>
  </div>
  )
}

export default FormUser