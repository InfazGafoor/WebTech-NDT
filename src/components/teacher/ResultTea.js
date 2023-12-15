import axios from "axios";
import { useState, useEffect } from "react";
const ResultTea = () => {
  const [mark, setMark] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost/20it0484/backend/getresall.php", {
        nic: localStorage.getItem("Nic"),
      })
      .then(function (response) {
        setMark(response.data);
        if (response.data === "Invalid Username or Password") {
          setMark([""]);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="container p-5" style={{ marginBottom: "500px" }}>
        <div className="text-center">
          <h1
            className="text-center"
            style={{ fontFamily: "BigNoodleTitling" }}
          >
            ALL RESULT
          </h1>
        </div>
        <table
          border="1"
          className="table table-striped table-success table-bordered"
        >
          <thead className="">
            <tr className="">
              <th className="col-sm-2 text-center">Student Id</th>
              <th className="col-sm-5 text-center">Subject Name</th>
              <th className="col-sm-3 text-center">ResultTeacher</th>
              <th className="col-sm-3 text-center">Grade</th>
            </tr>
          </thead>
          <tbody>
            {mark.map((res, index) => (
              <tr key={res[0]}>
                <td key={res[1]}>{res[1]}</td>
                <td key={res[2]}>{res[2]}</td>
                <td key={res[3]}>{res[3]}</td>
                <td key={res[4]}>{res[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultTea;
