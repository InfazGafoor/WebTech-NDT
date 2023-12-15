import axios from "axios";
import { useFormInputValidation } from "react-form-input-validation";

function Register() {
    const [fields, errors, form] = useFormInputValidation(
        {
            stid: "",
            fname: "",
            lname: "",
            nic: "",
            email: "",
            role: "",
            mobile: "",
            pass: "",
        },
        {
            stid: "between:2,12",
            fname: "required",
            lname: "required",
            nic: "required|between:10,12",
            email: "required|email",
            role: "required",
            mobile: "required|numeric|digits_between:10,12",
            pass: "required|between:5,15",
        }
    );

    const subm = async (event) => {
        const isvalid = await form.validate(event);
        if (isvalid) {
            try {
                await axios
                    .post("http://localhost/20it0484/backend/register.php", {
                        stid: fields.stid,
                        fname: fields.fname,
                        lname: fields.lname,
                        nic: fields.nic,
                        email: fields.email,
                        role: fields.role,
                        mobile: fields.mobile,
                        password: fields.pass,
                    })
                    .then(function (response) {
                        // console.log(response.data);
                        if (response.data === "success") {
                            popup();
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
    const popup = () => {
        alert("Successfully Registered");
        setTimeout(() => {
            window.location = "http://localhost:3000/login";
        }, 2000);
    };

    const popuperror = () => {
        alert("Something went wrong! You may be already registered. Please try again");
    };


    return (
        <div className="container-fluid">
            <div className="justify-content-center align-items-center h-100" style={{ backgroundColor: "#C0C0C0" }}>

                <section className="bg-image">
                    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                        <div className="container h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                    <div className="card m-5" style={{ borderRadius: "20px" }}>
                                        <div className="card-body p-5">
                                            <h3 className="text-center">
                                                Register
                                            </h3>

                                            <form className="form-control border-0" id="my-form" onSubmit={subm}>
                                                <div className="form-group m-2">

                                                    <label >First Name</label>
                                                    <input type="text" className="form-control" id="fname" name="fname" aria-describedby="fnameHelp" placeholder="Enter First Name" onBlur={form.handleBlurEvent}
                                                        onChange={form.handleChangeEvent} value={fields.fname} />
                                                    <label className="error mb-3" style={{ color: "red" }}>
                                                        {errors.fname ? errors.fname : ""}
                                                    </label>
                                                </div>
                                                <div className="form-group m-2">

                                                    <label >Last Name</label>
                                                    <input type="text" className="form-control" id="lname" name="lname" aria-describedby="lnameHelp" placeholder="Enter Last Name" onBlur={form.handleBlurEvent}
                                                        onChange={form.handleChangeEvent} value={fields.lname} />
                                                    <label className="error mb-3" style={{ color: "red" }}>
                                                        {errors.lname ? errors.lname : ""}
                                                    </label>
                                                </div>

                                                <div className="form-group m-2">


                                                    <label >Student id</label>
                                                    <input type="text" className="form-control" id="stid" name="stid" aria-describedby="StudentidHelp" placeholder="Enter Student id" onBlur={form.handleBlurEvent}
                                                        onChange={form.handleChangeEvent} value={fields.stid} />
                                                    <label className="error mb-3" style={{ color: "red" }}>
                                                        {errors.stid ? errors.stid : ""}
                                                    </label>
                                                </div>
                                                <div className="form-group m-2">
                                                    <label >NIC</label>
                                                    <input type="text" className="form-control" id="nic" name="nic" placeholder="Enter nic" onBlur={form.handleBlurEvent}
                                                        onChange={form.handleChangeEvent} value={fields.nic} />
                                                    <label className="error mb-3" style={{ color: "red" }}>
                                                        {errors.nic ? errors.nic : ""}
                                                    </label>
                                                </div>
                                                <div className="form-group m-2">
                                                    <label >Email address</label>
                                                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" onBlur={form.handleBlurEvent}
                                                        onChange={form.handleChangeEvent} value={fields.email} />
                                                    <label className="error mb-3" style={{ color: "red" }}>
                                                        {errors.email ? errors.email : ""}
                                                    </label>
                                                </div>
                                                <div className="form-group m-2">
                                                    <label >Phone Number</label>
                                                    <input type="number" className="form-control" id="mobile" name="mobile" placeholder="Enter Phone Number" onBlur={form.handleBlurEvent}
                                                        onChange={form.handleChangeEvent} value={fields.mobile} />
                                                    <label className="error mb-3" style={{ color: "red" }}>
                                                        {errors.mobile ? errors.mobile : ""}
                                                    </label>
                                                </div>
                                                <div className="form-group m-2">
                                                    <label >Role</label>
                                                    <select className="form-control" id="role" name="role" onBlur={form.handleBlurEvent}
                                                        onChange={form.handleChangeEvent}>
                                                        <option>Select the role</option>
                                                        <option value="student">Student</option>
                                                        <option value="teacher">Teacher</option>
                                                    </select>
                                                    <label className="error mb-3" style={{ color: "red" }}>
                                                        {errors.role ? errors.role : ""}
                                                    </label>
                                                </div>
                                                <div className="form-group m-2">
                                                    <label >Password</label>
                                                    <input type="password" className="form-control" id="pass" name="pass" placeholder="Password" onBlur={form.handleBlurEvent}
                                                        onChange={form.handleChangeEvent} value={fields.pass} />
                                                    <label className="error mb-3" style={{ color: "red" }}>
                                                        {errors.pass ? errors.pass : ""}
                                                    </label>
                                                </div>

                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                            </form>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>
                <div style={{ height: "1000px" }}>

                </div>
            </div>
            )


            export default Login;
        </div>

    )
}

export default Register;