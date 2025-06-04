import React, { useState } from "react";
import "./Register.css";
import StatesDropdown from "../components/StatesDropdown";
import CitiesDropdown from "../components/CitiesDropdown";

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    gender: "",
    state: "",
    city: "",
    password: "",
    confirmPassword: "",
    cpassType: "",
  });
// formData.cpassType
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "state" ? { city: "" } : {}), // reset city when state changes
    }));

    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z\s]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!formData.fullname.trim() || !nameRegex.test(formData.fullname))
      newErrors.fullname = "At least 3 letters only";

    if (!emailRegex.test(formData.email)) newErrors.email = "Enter valid email";

    if (!mobileRegex.test(formData.mobile))
      newErrors.mobile = "Enter 10-digit mobile";

    if (!formData.gender) newErrors.gender = "Select a gender";

    if (!formData.state) newErrors.state = "Select a state";

    if (!formData.city) newErrors.city = "Select a city";

    if (!passwordRegex.test(formData.password))
      newErrors.password =
        "8+ chars: A, a, 0–9, !";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords don't match";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    console.log("Submitting:", formData);
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
          <div className="inpMainDiv">
            <div>
              <div className="labDiv">
                <label htmlFor="fullName">FullName</label>
                {errors.fullname && <p className="error">{errors.fullname}</p>}
              </div>
              <input
                id="fullName"
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>

            <div>
              <div className="labDiv">
                <label htmlFor="email">Email</label>
                {errors.email && <p className="error">{errors.email}</p>}{" "}
              </div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <div className="labDiv">
                <label htmlFor="mobile">Mobile No.</label>
                {errors.mobile && <p className="error">{errors.mobile}</p>}{" "}
              </div>
              <input
                id="mobile"
                type="tel"
                name="mobile"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>

            <div>
              <div className="labDiv">
                <label htmlFor="gender">Gender</label>
                {errors.gender && <p className="error">{errors.gender}</p>}
              </div>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="select-input"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <div className="labDiv">
                <label htmlFor="states">States</label>
                {errors.state && <p className="error">{errors.state}</p>}
              </div>
              <StatesDropdown value={formData.state} onChange={handleChange} />
            </div>

            <div>
              <div className="labDiv">
                <label htmlFor="city">City</label>
                {errors.city && <p className="error">{errors.city}</p>}
              </div>
              <CitiesDropdown
                state={formData.state}
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div>
              <div className="labDiv">
                <label htmlFor="password">Password</label>
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div>
              <div className="labDiv">
                <label htmlFor="confirmPass">Confirm Password</label>
                {errors.confirmPassword && (
                  <p className="error">{errors.confirmPassword}</p>
                )}
              </div>
              <input
                id="confirmPass"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
