import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";

export const AuthContext = createContext();

function App() {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <>
      <BrowserRouter>
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
          <MainRoutes />
        </AuthContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
