import { React, useState, useEffect } from "react";
import axios from "axios";

const ProfileTea = () => {
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost/20it0484/backend/getprofile.php", {
        role: localStorage.getItem("Role"),
        nic: localStorage.getItem("Nic"),
      })
      .then(function (response) {
        // console.log(response.data);
        setDetail(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {/* {console.log(detail)} */}
      <div>
        <section className="vh-100" style={{}}>
          <div className="container py-5 h-100">
            <div className="row d-flex jr h-100">
              <div className="col-md-12 col-xl-12">
                <div
                  className="card"
                  style={{ borderRadius: "15px", backgroundColor: "#2A2A2A" }}
                >
                  <div className="card-body text-center">
                    <h4 className="mb-2 text-light">
                      {detail.fname} {detail.lname}
                    </h4>
                    <p className=" mb-2 text-light">
                      @{detail.role} <span className="mx-2">|</span>{" "}
                      <span>{detail.email}</span>
                    </p>
                    <p className=" mb-2 text-light">nic: {detail.nic}</p>
                    <p className=" mb-2 text-light">
                      Student Id : {detail.stuid}
                    </p>
                    <p className=" mb-4 text-light">
                      Mobile Number : {detail.mobile}
                    </p>

                    <button
                      type="button"
                      className="btn btn-primary btn-rounded btn-lg"
                    >
                      Edit Profile
                    </button>
                    <div className="d-flex justify-content-between text-center mt-5 mb-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileTea;
