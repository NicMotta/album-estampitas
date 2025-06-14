import { Routes, Route } from "react-router";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import PasswordRecovery from "./views/PasswordRecovery";
import { ROUTE_HOME, ROUTE_LOGIN, ROUTE_REGISTER, ROUTE_PASSWORD_RECOVERY } from "./utils/routes";
// import { isAuthenticated } from "./utils/helpers";

export default function App() {

  // function PrivateRoute({ children }: { children: React.ReactNode }) {
  //   return isAuthenticated() ? children : <Navigate to={ROUTE_LOGIN} replace />;
  // }

  return (
    <Routes>
      {/* <PrivateRoute> */}
        <Route path={ROUTE_HOME} element={<Home />} />
      {/* </PrivateRoute> */}

      <Route path={ROUTE_LOGIN} element={<Login />} />
      <Route path={ROUTE_REGISTER} element={<Register />} />
      <Route path={ROUTE_PASSWORD_RECOVERY} element={<PasswordRecovery />} />
    </Routes>
  )
}
