import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/login';
import ProtectRoute from './components/ProtectedRoute'
import Dashboard from './pages/dashboard';
import Detail from './pages/detail';
import Add from './pages/add';
import Edit from './pages/edit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={
          <ProtectRoute>
          <Dashboard/>
        </ProtectRoute>
        } />
        <Route path="/detail/:id" element={
          <ProtectRoute>
            <Detail/>
          </ProtectRoute>
        } />
         <Route path="/add" element={
          <ProtectRoute>
            <Add/>
          </ProtectRoute>
        } />
        <Route path="/edit/:id" element={
          <ProtectRoute>
            <Edit/>
          </ProtectRoute>
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default App;