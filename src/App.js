import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/register";
import ProtectedRoute from "./components/ProtectedRoute";
import Main from "./components/User/Main";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/*" element={<ProtectedRoute component={Main} />} />
      </Routes>
    </div>
  );
}

export default App;
