import { Route, Routes, Navigate } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { useAuthContext } from "./context/authUtils";
import Protectedroute from "./components/routes/ProtectedRoute";
import Layout from "./Layout/Layout";
import BoardPage from "./pages/BoardPage";

function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<BoardPage/>} />
          <Route />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<Protectedroute />}>
            <Route
              path="/board"
              element={
                !authUser.username ? (
                  <Navigate to="/login" />
                ) : (
                  <h1>Este es el tablero</h1>
                )
              }
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
