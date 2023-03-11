import { Routes, Route } from 'react-router-dom';
import './App.css';
import Shop from './page/Shop';
import Login from './page/Login';
import Register from './page/Register';
import SharedLayout from './page/SharedLayout'
import Page404 from './page/Page404';
import VerifyReg from './page/VerifyReg';
import ChangePassword from './page/ChangePassword';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={ <Shop /> } /> 
          {/* <Route index element={ <Landingpage /> } />  */}
        </Route>

        <Route path="/auth">
          <Route path="/auth/signup" element={ <Register /> } />
          <Route path="/auth/login" element={ <Login /> } />
          <Route path="/auth/verify" element={ <VerifyReg /> } />
          <Route path="/auth/forgot-password" element={ <ChangePassword /> } />
        </Route>
        <Route path="/*" element={ <Page404 /> } />
      </Routes>
    </div>
  );
}

export default App;
