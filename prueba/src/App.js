import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;