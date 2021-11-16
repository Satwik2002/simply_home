import React, { useEffect, useState } from "react";
import Contents from "../navigation/Contents";
import { useNavigate } from "react-router";
import { useFormik } from "formik";

function PenaltyRate() {
  const navigate = useNavigate();
  const [penalty, setPenalty] = useState(0);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "false") {
      navigate("/login");
    }
    const url = `http://127.0.0.1:8000/api/payments/penalty/`;
    const fetchData = async () => {
      const response = await fetch(url, {
        headers: {
          authorization: `Token ${localStorage.getItem("token")}`,
        },
      });
      const result = await response.json();
      if (response.ok) {
        setPenalty(result.penalty);
      } else {
        if (
          Object.values(result)[0] === "Invalid Token" ||
          Object.values(result)[0] === "The Token is expired"
        ) {
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          localStorage.setItem("isLoggedIn", "false");
          navigate("/login");
        }
        setMsg(Object.values(result)[0]);
      }
    };
    fetchData();
  }, [navigate]);

  const formik = useFormik({
    initialValues: {
      penalty: `${penalty}`,
    },
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      const url = `http://127.0.0.1:8000/api/payments/penalty/`;
      const fetchData = async () => {
        const response = await fetch(url, {
          method: "PUT",
          body: JSON.stringify({
            penalty: values.penalty,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            authorization: `Token ${localStorage.getItem("token")}`,
          },
        });
        const result = await response.json();
        if (response.ok) {
          resetForm({ values: "" });
          navigate("/maintenance");
        } else {
          if (
            Object.values(result)[0] === "Invalid Token" ||
            Object.values(result)[0] === "The Token is expired"
          ) {
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            localStorage.setItem("isLoggedIn", "false");
            navigate("/login");
          }
          setMsg(Object.values(result)[0]);
        }
      };
      fetchData();
    },
  });

  return (
    <div className="h-screen flex">
      <div className="bg-green-300 dark:bg-gray-800 w-64 hidden md:flex">
        <Contents />
      </div>
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 overflow-y-scroll">
          <div className="md:py-5 flex-grow py-3 text-center dark:text-white uppercase tracking-wider font-semibold text-xl md:text-3xl">
            Change Penalty
          </div>
          <div
            className="
              flex flex-col
              justify-center
              sm:w-2/3  
              md:w-3/4
              lg:w-1/2
              sm:m-auto
              mx-5
              mb-5
              space-y-8
            "
          >
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
                <div className="flex flex-col space-y-1">
                  <label htmlFor="penalty">Penalty Rate*</label>
                  <input
                    type="number"
                    name="penalty"
                    id="penalty"
                    className="
                    bg-gray-50
                      border-2
                      rounded
                      px-3
                      py-2
                      w-full
                      focus:outline-none focus:border-blue-400 focus:shadow"
                    placeholder="Enter Penalty Rate"
                    onChange={formik.handleChange}
                    value={formik.values.penalty}
                    required
                  />
                </div>
                <div className="text-red-500 text-center">{msg}</div>
                <div className="flex flex-row-reverse">
                  <button
                    type="submit"
                    className="bg-green-400 hover:bg-green-600 text-white font-bold my-3 py-2 px-4 rounded"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PenaltyRate;