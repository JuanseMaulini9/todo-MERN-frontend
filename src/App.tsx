import { Route, Routes, Navigate } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { useAuthContext } from "./context/authUtils";
import Protectedroute from "./components/routes/ProtectedRoute";

function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <Routes>
        <Route path="/" element={<h1>hola mundo</h1>} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Protectedroute />}>
          <Route
            path="/board"
            element={
              !authUser.username ? <Navigate to="/login" /> : <h1>Este es el tablero</h1>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
