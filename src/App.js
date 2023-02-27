import { Routes, Route } from 'react-router-dom';
import './App.css';
import Shop from './page/Shop/Shop';
import Login from './page/Login/Login';
import Register from './page/Register/Register';
import SharedLayout from './page/UtilPage/SharedLayout'
import Page404 from './page/UtilPage/Page404';
import VerifyReg from './page/Auth/VerifyReg';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={ <Shop /> } /> 
          {/* <Route index element={ <Landingpage /> } />  */}
        </Route>

          <Route path="/auth/signup" element={ <Register /> } />
          <Route path="/auth/login" element={ <Login /> } />
          <Route path="/auth/verify" element={ <VerifyReg /> } />
          <Route path="/*" element={ <Page404 /> } />
      </Routes>
    </div>
  );
}

export default App;
