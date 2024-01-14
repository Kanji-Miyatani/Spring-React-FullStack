import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import UsersList from './pages/UsersList'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/users' element={<UsersList />}></Route>
      </Routes>
    </>
  )
}

export default App
