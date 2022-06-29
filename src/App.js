import React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    // mode:"onTouched"
  });
  const onSubmit = data => {
    console.log(data);
    alert(
      `FullName : ${data.fullname}, Email : ${data.email}, Contact Number : ${data.phone}, Password : ${data.password}, State : ${data.state}, Gender : ${data.gender}`
    );
  };

  //  patterns
  //  email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  //  phone: ^\d{10}$
  //  password: (?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$
  //  Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 shadow w-75 p-4 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="fullname">FullName :</label>
                {/* <input
                  type="text"
                  className={classNames("form-control",{"is-invalid":true})}
                  id="fullname"
                  placeholder="Enter Your Full Name"
                  name="fullname"
                  {...register("fullname",{required:true, minLength:4,})}
                /> 
                <small className="text-danger form-text">
                {errors.fullname?.type==="required" && (<div className="invalid-feedback">Fullname is required</div>)}
                </small>
                <small className="text-danger form-text">
                {errors.fullname?.type==="minLength" && (<div className="invalid-feedback">Fullname length should be more than 4 character</div>)}
                </small> */}

                <input
                  type="text"
                  className={classNames("form-control", {
                    "is-invalid": errors.fullname
                  })}
                  id="fullname"
                  placeholder="Enter your fullname"
                  name="fullname"
                  {...register("fullname", {
                    required: "Fullname is required",
                    minLength: {
                      value: 7,
                      message: "Fullname length should be more than 7 character"
                    }
                  })}
                />
                {errors.fullname && (
                  <div className="invalid-feedback">
                    {errors.fullname.message}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className={classNames("form-control", {
                    "is-invalid": errors.email
                  })}
                  id="email"
                  placeholder="Enter your email address"
                  name="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Please enter valid email address"
                    }
                  })}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email.message}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Contact Number</label>
                <input
                  type="tel"
                  className={classNames("form-control", {
                    "is-invalid": errors.phone
                  })}
                  id="phone"
                  placeholder="Enter your contact number"
                  name="phone"
                  {...register("phone", {
                    required: "Contact number is required",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Please enter valid contact number"
                    }
                  })}
                />
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone.message}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className={classNames("form-control", {
                    "is-invalid": errors.password
                  })}
                  id="password"
                  placeholder="Enter your password"
                  name="password"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{8,16}$/,
                      message:
                        "Password should include at least one uppercase, one numeric value and one special character, minium length 8 character & maximum length 16 character"
                    }
                  })}
                />
                {errors.password && (
                  <div className="invalid-feedback">
                    {errors.password.message}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="state">Choose Your State</label>
                <select
                  className={classNames("form-control", {
                    "is-invalid": errors.state
                  })}
                  id="state"
                  name="state"
                  {...register("state", {
                    required: "Please select your state"
                  })}
                >
                  <option value="">--- Select Your State ---</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Assam">Assam</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                </select>
                {errors.state && (
                  <div className="invalid-feedback">{errors.state.message}</div>
                )}
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="gender" className="mr-4">
                  Choose Your Gender
                </label>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="male"
                    value="male"
                    name="gender"
                    {...register("gender", {
                      required: "Please select your gender"
                    })}
                  />
                  <label className="form-check-label" htmlFor="male">
                    male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="female"
                    value="female"
                    name="gender"
                    {...register("gender", {
                      required: "Please select your gender"
                    })}
                  />
                  <label className="form-check-label" htmlFor="female">
                    female
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="other"
                    value="other"
                    name="gender"
                    {...register("gender", {
                      required: "Please select your gender"
                    })}
                  />
                  <label className="form-check-label" htmlFor="other">
                    other
                  </label>
                </div>
                {errors.gender && (
                  <div className="form-text text-danger">
                    {errors.gender.message}
                  </div>
                )}
              </div>
              <br />

              <div className="form-group">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="tnc"
                    name="tnc"
                    {...register("tnc", {
                      required: "Please agree given terms & conditions"
                    })}
                  />
                  <label className="form-check-label" for="tnc">
                    I agree all terms & conditions
                  </label>
                </div>
                {errors.tnc && (
                  <div className="form-text text-danger">
                    {errors.tnc.message}
                  </div>
                )}
              </div>
              <br />

              <button type="submit" className="btn btn-outline-info btn-sm">
                Create New Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
