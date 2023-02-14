
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Alert from './components/Alert'
import CardUser from './components/CardUser'
import FormUser from './components/FormUser'

function App() {
  const [users, setUsers] = useState();
  const [totalUsers, setTotalUsers] = useState();
  const [isModal, setIsModal] = useState(false);
  const [alert, setAlert] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [updateInfo, setUpdateInfo] = useState();

  const getAllUsers = () => {
     const url = 'https://users-crud.academlo.tech/users/'
     axios.get(url).then(res => {
      setTotalUsers(res.data.length);
      setUsers(res.data)
    }).catch(err => console.log(err))

  }

  useEffect(()=>{
    getAllUsers();
  },[])

const createNewUsers = data => {
  const url = 'https://users-crud.academlo.tech/users/'
  axios.post(url,data)
    .then(res => {
      console.log(res.data);
      setAlert(true);
      getAllUsers();
    })
    .catch(err=>console.log(err))
}

const deleteById = id => {
  const url = `https://users-crud.academlo.tech/users/${id}/`
  axios.delete(url)
    .then(res=>{
      getAllUsers();
      console.log(res.data);
    })
    .catch(err=>console.log(err))
}

const updateById = (id,data) =>{
  const url = `http://users-crud.academlo.tech/users/${id}/`

  axios.put(url,data)
    .then(res => {
      setAlert(true);
      getAllUsers();
      console.log(res.data)
    })
    .catch(err => console.log(err))
}

const handleModal = () =>{
    setIsModal(true);
}

const handleModalHidden = () =>{
  setIsModal(false);
}

  return (
    <div className="App">
      <div className='container__header' style={{backgroundImage: "url(./fundo-azul.jpg)"}}>
        <div className='header'>
        <div className='header__logo'>
           <span>ADMIN</span>
           <div className='header__btns'>
                <button onClick={handleModal} className='btn__create'><i className='bx bx-plus'></i> Create new user</button>
        </div>
        </div>
        
        <div className='header__cards'>
          <div className='card__total'>
              <span>Total users</span>
              <h1>{totalUsers && `${totalUsers}`}</h1>
           </div>
        </div>
        </div>
      </div>

      <div className={`modal ${isModal ? "" : "modal--hidden"}`}>
        <FormUser createNewUsers={createNewUsers} handleModalHidden={handleModalHidden} updateInfo={updateInfo}
        updateById={updateById} setUpdateInfo={setUpdateInfo} alert={alert} setAlert={setAlert}></FormUser> 
      </div>
      
      <div className='cards'>
        {
          users?.map( user => (
            <CardUser key={user.id} user={user} deleteById={deleteById} handleModal={handleModal} setUpdateInfo={setUpdateInfo} deleteUser={deleteUser} setDeleteUser={setDeleteUser} alert={alert} setAlert={setAlert}/>
          ) )
        }
      </div>
    </div>
  )
}

export default App
