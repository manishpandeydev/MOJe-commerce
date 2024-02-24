import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter ,Route,Routes,Router} from 'react-router-dom'
import Login from './Login.jsx'
import SignUp from './SignUp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >

      <Routes>

      <Route path='/' element=
        {<App />}/>

        <Route path='/Login' element=
        {<Login />}/>
        <Route path='/SignUp' element=
        {<SignUp />}/>

</Routes>

    </BrowserRouter>


  </React.StrictMode>,
)
