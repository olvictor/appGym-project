import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Home from "./Components/Pages/Home";
import NotFound from "./Components/Pages/NotFound";
import Register from "./Components/Pages/Register";
import Header from "./Components/Header/Header";
import { UserStorage } from "./UserContext";
import Myaccount from "./Components/Pages/Myaccount";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <section className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="myaccount/*" element={<Myaccount />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </section>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
