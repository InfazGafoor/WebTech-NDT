import { Link, Outlet } from "react-router-dom";

function Navigation() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary col-md-12">
                <span className="navbar-brand col-md-7 col-lg-7 col-xl-7 p-2" >Student Management System</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link btn btn-light text-dark" style={{ marginLeft: "200px", width: "100px" }} to="/home">Home </Link>
                        </li>
                      
                        <li className="nav-item">
                            <Link className="nav-link btn btn-light text-dark" style={{ marginLeft: "20px", width: "100px" }} to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn btn-light text-dark" style={{ marginLeft: "20px", width: "100px" }} to="/login">Login</Link>
                        </li>
                    </ul>

                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navigation;