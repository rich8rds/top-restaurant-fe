import { Routes, Route } from 'react-router-dom';
import './App.css';
import Shop from './page/Shop/Shop';
import Login from './page/Login/Login';
import Register from './page/Register/Register';
import SharedLayout from './page/UtilPage/SharedLayout'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={ <Shop /> } /> 
          {/* <Route index element={ <Landingpage /> } />  */}
        </Route>

          <Route path="/signup" element={ <Register /> } />
          <Route path="/login" element={ <Login /> } />

      </Routes>
    </div>
  );
}

export default App;
