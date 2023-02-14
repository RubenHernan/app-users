import React, { useEffect } from 'react'
import "./styles/alert.css"

const Alert = ({setAlert,updateInfo,setClose,alert,isDelete,setCloseDelete}) => {

  const closeAll = () =>{
    setAlert(false);
    if(isDelete){
      setCloseDelete(true)
    }else{
      setClose(true);
    }
  }

  useEffect(() => {
    if(alert){
    setTimeout(() => {
      closeAll();
    }, 5000);}
  }, [alert]);

 

  return (
    <>
    <div onClick={closeAll} className="hidden"></div>
    <div className='alert'>
        <i className='icon__check bx bx-check'></i>
        <h2>USER {`${updateInfo ? "UPDATED" : "CREATED" }`} SUCCESSFULLY</h2>
        <button onClick={closeAll} className='btn__ok'>OK</button>
    </div>
    </>
  )
}

export default Alert