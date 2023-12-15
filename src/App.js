 import Navigation from "./components/Navigation";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home.js";
import Dashboard from "./components/Dashboard.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import NaviStu from "./components/student/NaviStu";
import Result from "./components/student/Result";
import Profile from "./components/student/Profile";

import NaviTea from "./components/teacher/NaviTea";
import ResultTea from "./components/teacher/ResultTea";
import ProfileTea from "./components/teacher/ProfileTea";

// import StudentAcc from './Accounts/StudentAccount/StudentAcc';
function App() {
  if (localStorage.getItem("Role") === "student") {
    return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NaviStu/>}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="res" element={<Result />} />
              <Route path="pro" element={<Profile />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else if (localStorage.getItem("Role") === "teacher") {
    return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NaviTea/>}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="rest" element={<ResultTea />} />
              <Route path="prot" element={<ProfileTea />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
