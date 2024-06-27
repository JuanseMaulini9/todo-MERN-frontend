import {Route, Routes} from 'react-router-dom'
import ProtectedRoute from './components/Auth/ProtectedRoute';
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProtectedRoute><h1>Hola mundo</h1></ProtectedRoute>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </>
  );
}

export default App;
