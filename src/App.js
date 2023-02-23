import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './page/Homepage/Homepage';
import Login from './page/Login/Login';
import Register from './page/Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={ <Register /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/home" element={ <Homepage /> } />
      </Routes>
    </div>
  );
}

export default App;
