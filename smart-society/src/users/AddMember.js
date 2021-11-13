import React, { useEffect, useState } from "react";
import Contents from "../navigation/Contents";
import { useNavigate } from "react-router";
import { useFormik } from "formik";

function AddMember() {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "false") {
      navigate("/login");
    }
    let url = "http://127.0.0.1:8000/api/users/accounts/";
    const fetchAccounts = async () => {
      const response = await fetch(url, {
        headers: {
          authorization: `Token ${localStorage.getItem("token")}`,
        },
      });
      const array = await response.json();
      if (response.ok) {
        setAccounts(array.results);
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.setItem("isLoggedIn", "false");
        navigate("/login");
      }
    };
    fetchAccounts();
    url = "http://127.0.0.1:8000/api/society_info/properties/";
    const fetchProperties = async () => {
      const response = await fetch(url, {
        headers: {
          authorization: `Token ${localStorage.getItem("token")}`,
        },
      });
      const array = await response.json();
      if (response.ok) {
        setProperties(array.results);
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.setItem("isLoggedIn", "false");
        navigate("/login");
      }
    };
    fetchProperties();
  }, [navigate]);

  const formik = useFormik({
    initialValues: {
      propertyNo: "",
      propertyType: "",
      name: "",
      mobile: "",
      tenantName: "",
      tenantMobile: "",
    },
    onSubmit: (values, { resetForm }) => {
      const url = `http://127.0.0.1:8000/api/users/members/`;
      const fetchData = async () => {
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            property_no: values.propertyNo,
            property_type: values.propertyType,
            name: values.name,
            mobile_no: values.mobile,
            tenant_name: values.tenantName
              ? values.tenantName
              : JSON.parse(null),
            tenant_mobile: values.tenantMobile
              ? values.tenantMobile
              : JSON.parse(null),
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            authorization: `Token ${localStorage.getItem("token")}`,
          },
        });
        const result = await response.json();
        if (response.ok) {
          resetForm({ values: "" });
          navigate("/members");
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
          setMsg(Object.values(result)[0].join(" "));
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
            Add Member
          </div>
          <div className="mx-3 lg:mx-10 border rounded bg-black flex items-center justify-center">
            <div className="bg-white w-full rounded shadow-lg pt-8 pb-4 px-6 md:p-8">
              <div className="grid gap-4 gap-y-2 grid-cols-1 lg:grid-cols-2">
                <div className="lg:col-span-2">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="grid gap-4 gap-y-4 grid-cols-1 md:grid-cols-2">
                      <div className="md:col-span-1">
                        <label htmlFor="propertyNo">Property No.</label>
                        <select
                          name="propertyNo"
                          id="propertyNo"
                          placeholder=""
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          onChange={formik.handleChange}
                          value={formik.values.propertyNo}
                          required
                        >
                          <option value=""></option>
                          {accounts &&
                            accounts.map((element) => (
                              <option
                                value={element.username}
                                key={element.username}
                              >
                                {element.username}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div className="md:col-span-1">
                        <label htmlFor="propertyType">Property Type</label>
                        <select
                          name="propertyType"
                          id="propertyType"
                          placeholder=""
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          onChange={formik.handleChange}
                          value={formik.values.propertyType}
                          required
                        >
                          <option value=""></option>

                          {properties &&
                            properties.map((element) => (
                              <option
                                value={element.property_type}
                                key={element.property_type}
                              >
                                {element.property_type}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div className="md:col-span-1">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder=""
                          onChange={formik.handleChange}
                          value={formik.values.name}
                          required
                        />
                      </div>

                      <div className="md:col-span-1">
                        <label htmlFor="mobile">Mobile No.</label>
                        <input
                          type="text"
                          name="mobile"
                          id="mobile"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder=""
                          onChange={formik.handleChange}
                          value={formik.values.mobile}
                          required
                        />
                      </div>
                      <div className="md:col-span-1">
                        <label htmlFor="tenantName">Tenant Name</label>
                        <input
                          type="text"
                          name="tenantName"
                          id="tenantName"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder=""
                          onChange={formik.handleChange}
                          value={formik.values.tenantName}
                        />
                      </div>
                      <div className="md:col-span-1">
                        <label htmlFor="tenantMobile">Tenant Mobile No.</label>
                        <input
                          type="text"
                          name="tenantMobile"
                          id="tenantMobile"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder=""
                          onChange={formik.handleChange}
                          value={formik.values.tenantMobile}
                        />
                      </div>

                      <div className="md:col-span-2 text-center md:row-start-4 text-red-500">
                        {msg}
                      </div>
                      <div className="md:col-span-2 text-right md:row-start-5">
                        <div className="inline-flex items-end">
                          <button
                            type="submit"
                            className="bg-green-400 hover:bg-green-600 text-white font-bold my-3 py-2 px-4 rounded"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMember;
