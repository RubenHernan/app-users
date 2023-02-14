import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import "./styles/formUser.css"
import defaultValues from "../util/defaultValues.js"
import Alert from './Alert'

const FormUser = ({createNewUsers,handleModalHidden,updateInfo,setUpdateInfo,updateById,alert,setAlert}) => {

  // const [close, setClose] = useState(false)
  const {reset,register,handleSubmit}=  useForm();

const submit = data => {
  if(updateInfo){
    updateById(updateInfo.id, data)
  }else{
    createNewUsers(data);
  }
  handleClose();
}

const handleClose = () =>{
  handleModalHidden();
  setUpdateInfo();
  reset(defaultValues);
 }

// if(close) {
//   handleClose();
//   setClose(false);
// }


useEffect(()=>{
  if(updateInfo) reset(updateInfo);
 },[updateInfo]) 



  return (
    <>
    {/* <div className={`alert__modal ${alert ? "" : "alert--hidden"}`}>
          <Alert setAlert={setAlert} updateInfo={updateInfo} setClose={setClose} alert={alert}/>
      </div> */}
    <div onClick={handleClose} className="hidden"></div>
    <form className='form' onSubmit={handleSubmit(submit)}>
      <h2>{`${updateInfo ? "UPDATE" : "CREATE"}`} USER</h2>
      <i onClick={handleClose} className='btn__close bx bx-x'></i>
      <div className='form__box'>
        
        <input {...register('email')} required="required" type="email" id='email' />
        <label htmlFor="email">Email</label>
        <span className="bar"></span>
      </div>
      <div className='form__box'>
        
        <input {...register('password')} required="required" type="password" id='password' />
        <label htmlFor="password">Password</label>
        <span className="bar"></span>
      </div>
      <div className='form__box'>
        
        <input {...register('first_name')} required="required" type="text" id='firstName' />
        <label htmlFor="firstName">First name</label>
        <span className="bar"></span>
      </div>
      <div className='form__box'>
        
        <input {...register('last_name')} required="required" type="text" id='lastName' />
        <label htmlFor="lastName">Last name</label>
        <span className="bar"></span>
      </div>
      <div className='form__box'>
        
        <input {...register('birthday')} required="required" type="date" id='birthday' />
        <label htmlFor="birthday">Birthday</label>
        <span className="bar"></span>
      </div>
      <div className='form__box--btn'>
         <button className='form__btn'>{`${updateInfo ? "UPDATE" : "CREATE"}`}</button>
      </div>
    </form>
    </>
  )
}

export default FormUser