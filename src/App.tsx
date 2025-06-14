import { Routes, Route, Navigate } from "react-router";
import Home from "./views/Home";
import Login from "./views/Login";

export default function App() {
  function isAuthenticated() {
  // Esto puede venir de un context, store, localStorage, etc.
  return localStorage.getItem("token") === null;
}

function PrivateRoute({ children }: { children: React.ReactNode }) {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
}

  return (
    <>
    <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}
