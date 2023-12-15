import axios from "axios";
import { useFormInputValidation } from "react-form-input-validation";

function Login() {
  const [fields, errors, form] = useFormInputValidation(
    {
      role: "",
      nic: "",
      pass: "",
    },
    {
      role: "required",
      nic: "required",
      pass: "required|between:5,25",
    }
  );

  const onSub = async (event) => {
    const isvalid = await form.validate(event);
    if (isvalid) {
      try {
        await axios
          .post("http://localhost/20it0484/backend/login.php", {
            role: fields.role,
            nic: fields.nic,
            password: fields.pass,
          })
          .then(function (response) {
            if (response.data) {
              if (response.data.role === "student") {
                popupStudent(response.data);
              } else if (response.data.role === "teacher") {
                popupTeacher(response.data);
              } else {
                popuperror();
              }
            } else {
              popuperror();
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } catch (error) {
        console.error(error);
      }
    }
  };
  const popupStudent = (x) => {
    localStorage.setItem("Role", x.role);
    localStorage.setItem("Name", x.fname);
    localStorage.setItem("Nic", x.nic);
    localStorage.setItem("Index", x.stuid);

    // setting cookie for student
    const d = new Date();
    d.setTime(d.getTime() + 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie =
      "userCookie=" + x.nic + x.role + ";" + expires + ";path=/";

    alert("Congratulations Student! You have Logged in Successfully");
    setTimeout(() => {
      window.location = "http://localhost:3000/";
    }, 2000);
  };
  const popupTeacher = (x) => {
    localStorage.setItem("Role", x.role);
    localStorage.setItem("Name", x.fname);
    localStorage.setItem("Nic", x.nic);

    // setting cookie for teacher
    const d = new Date();
    d.setTime(d.getTime() + 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie =
      "userCookie=" + x.nic + x.role + ";" + expires + ";path=/";

    alert("Congratulations Teacher! You have Logged in Successfully");
    setTimeout(() => {
      window.location = "http://localhost:3000/";
    }, 2000);
  };
  const popuperror = () => {
    alert("Incorrect Password or Username");
  };
  return (
    <div
      className="justify-content-center align-items-center h-100"
      style={{ backgroundColor: "#C0C0C0" }}
    >
      <section className="bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card m-5" style={{ borderRadius: "20px" }}>
                  <div className="card-body p-5">
                    <h3 className="text-center">LOGIN</h3>
                    <form className="form-control border-0 " onSubmit={onSub}>
                      <div className="form-group m-2">
                        <label>Role</label>
                        <select
                          className="form-control"
                          name="role"
                          id="role"
                          onBlur={form.handleBlurEvent}
                          onChange={form.handleChangeEvent}
                        >
                          <option>Please select a role</option>
                          <option value="student">Student</option>
                          <option value="teacher">Teacher</option>
                        </select>
                        <label className="error mb-3" style={{ color: "red" }}>
                          {errors.role ? errors.role : ""}
                        </label>
                        {/* <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" /> */}
                      </div>
                      <div className="form-group m-2">
                        <label>NIC</label>
                        <input
                          type="text"
                          className="form-control"
                          id="nic"
                          name="nic"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          onBlur={form.handleBlurEvent}
                          onChange={form.handleChangeEvent}
                        />
                        <label className="error mb-3" style={{ color: "red" }}>
                          {errors.nic ? errors.nic : ""}
                        </label>
                      </div>

                      <div className="form-group m-2">
                        <label>Entetr a password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="pass"
                          name="pass"
                          placeholder="Password"
                          onBlur={form.handleBlurEvent}
                          onChange={form.handleChangeEvent}
                        />
                        <label className="error mb-3" style={{ color: "red" }}>
                          {errors.pass ? errors.pass : ""}
                        </label>
                      </div>

                      <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ height: "1000px" }}></div>
    </div>
  );
}

export default Login;
