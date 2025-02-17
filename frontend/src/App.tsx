import { unstable_HistoryRouter as HistoryRouter, Navigate, Route, Routes } from 'react-router-dom';
import { history } from './utils/history';
import Home from './routes/Home'
import Login from './routes/Login'
import Favorite from './routes/Favorite'
import { PrivateRoute } from './components/PrivateRoute';
import './index.css'

export default function App() {


  return (

    <HistoryRouter history={history}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="favorite" element={<PrivateRoute roles={['ROLE_ADMIN','ROLE_OPERATOR']}><Favorite /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HistoryRouter>
  )
}