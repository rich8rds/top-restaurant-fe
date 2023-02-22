import { Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './component/Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={ <Register /> } />
      </Routes>
    </div>
  );
}

export default App;
