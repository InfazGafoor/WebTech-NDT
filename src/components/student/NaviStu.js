import { Link, Outlet } from "react-router-dom";
import axios from "axios";

function naviStu() {
    const logout = () => {
        alert("Are you sure to logout?");
        axios
          .post("http://localhost/20it0484/backend/logout.php")
          .then(function (response) {
            console.log(response.data);
            if (response.data === "fine") {
              document.cookie = "";
              localStorage.clear();
              window.location = "http://localhost:3000/";
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <span className="navbar-brand" >Student Management System</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link btn btn-light text-dark" style={{ marginLeft: "200px", width: "100px" }} to="/home">Home </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link btn btn-light text-dark" style={{ marginLeft: "20px", width: "100px" }} to="/pro">Profile </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link btn btn-light text-dark" style={{ marginLeft: "20px", width: "100px" }} to="/res">Result </Link>
                        </li>
                      
                        <li className="nav-item">
                            <button onClick={()=>logout()} className="nav-link btn btn-light text-dark" style={{ marginLeft: "20px", width: "100px" }} >Logout</button>
                        </li>
                    </ul>

                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default naviStu;