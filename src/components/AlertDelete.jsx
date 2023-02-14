import React, { useState } from 'react'
import Alert from './Alert'
import "./styles/alert.css"

const AlertDelete = ({setModalInfo, setAlert ,alert,handleDelete}) => {
    
    const [isDelete, setIsDelete] = useState(false);
    const [closeDelete, setCloseDelete] = useState(false)

    // useEffect(() => {
    //     if(delete){
    //     setTimeout(() => {
    //       closeAll();
    //     }, 5000);}
    //   }, [delete]);

    const closeAll = () =>{
        setIsDelete(false)
        setModalInfo(false)
      }

    if(closeDelete){
        closeAll();
        setCloseDelete(false);
    }


      const deleted = () =>{
        handleDelete();
        setIsDelete(true);
        setAlert(true);
      }
    
    
      return (
        <>
        <div onClick={closeAll} className="hidden"></div>
        <div className='alert alert__delete'>
            <i className='icon__info bx bx-info-circle'></i>
            <h2>ARE YOU SURE?</h2>
            <div className='btns__info'>
            <button onClick={deleted} className='btn__ok'>YES</button>
            <button onClick={closeAll} className='btn__ok'>NO</button>
            </div>
        </div>
        <div className={`alert__modal ${alert ? "" : "alert--hidden"}`}>
          {/* <Alert isDelete={isDelete} setAlert={setAlert} setCloseDelete={setCloseDelete}/> */}
      </div>
        </>
      )
    }
    

export default AlertDelete