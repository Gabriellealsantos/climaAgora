import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Login from './routes/Login'
import './index.css'

export default function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}