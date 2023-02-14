import React, { useState } from 'react'
import AlertDelete from './AlertDelete';
import "./styles/cardUser.css"

const CardUser = ({user,deleteById,handleModal,setUpdateInfo,alert,setAlert}) => {


  // const [modalInfo, setModalInfo] = useState(false);
  

  const handleDelete = () =>{
    deleteById(user.id);
  }  

  // const handleInfo = () => {
  //   setModalInfo(true)
  // }

  const handleUpdate = () => {
    setUpdateInfo(user)
    handleModal();
  }

  return (<>
      {/* <div className={`alert__modal ${modalInfo ? "" : "modal--hidden"}`}>
        <AlertDelete  setModalInfo={setModalInfo} alert={alert} setAlert={setAlert}></AlertDelete>
      </div> */}

    <div className='card'>
      <div className='card__info'>
          <h1>{user.first_name} {user.last_name}</h1>
          <p className='card__info--p'>Correo: <span>{user.email}</span></p>
          <p className='card__info--p'>Cumpleaños: <span>{user.birthday}</span></p>
       </div>
       <div className='card__btns'>
          <button onClick={handleUpdate} className='btn btn__update'><i className='bx bx-pencil'></i></button>
          <button onClick={handleDelete} className='btn btn__delete'><i className='bx bx-trash-alt'></i></button>
       </div>
    </div>
    </>
  )
}

export default CardUser