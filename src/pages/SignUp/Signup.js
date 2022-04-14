import React from "react";
import { useState } from "react";
import TextField from "../../components/TextField";
import { useFormik } from "formik";
import validationSchema from "../../utils/validation";
import { useDispatch } from "react-redux";
import { userAction } from "../../store/user-slice";
// import { useHistory } from "react-router-dom";
const initialValues = {
  file: null,
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmpassword: "",
};

const Signup = () => {
  // const history = useHistory();
  const dispatch = useDispatch();
  // const inputFile = useRef();
  const [fileName, setFileName] = useState(null);
  function onSubmit(values) {
    const reader = new FileReader();
    reader.readAsDataURL(values.file);
    reader.onloadend = () => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          isAuth: true,
          file: reader.result,
        })
      );
    };
    dispatch(
      userAction.login({
        file: URL.createObjectURL(values.file),
        name: values.name,
        email: values.email,
        phone: values.phone,
        isAuth: true,
        password: values.password,
      })
    );
    // history.push("/homepage");
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: validationSchema,
    validateOnBlur: true,
  });
  const resetHandler = () => {
    formik.setErrors({});
    formik.resetForm({});
    setFileName(null);
  };
  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <input
            hidden
            className="d-none border"
            name="file"
            type="file"
            id="exampleFormControlFile1"
            onChange={(event) => {
              setFileName(event.target.files[0].name);
              formik.setTouched({ ...formik.touched, file: true });
              formik.setFieldValue("file", event.target.files[0]);
            }}
          />
          <label
            htmlFor="exampleFormControlFile1"
            className="d-flex justify-content-center mt-4"
          >
            photo +
          </label>

          {fileName && (
            <p
              className={`${
                formik.errors.file ? "error" : "success"
              } d-flex justify-content-center mt-1`}
            >
              {fileName}
            </p>
          )}
          {formik.touched.file && formik.errors.file && (
            <div className="error d-flex justify-content-center mt-1">
              {formik.errors.file}
            </div>
          )}
        </div>
        <TextField
          label="Name"
          name="name"
          type="text"
          id="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.name}
          error={formik.errors.name}
        />

        <TextField
          label="Email"
          name="email"
          type="text"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.email}
          error={formik.errors.email}
        />

        <TextField
          label="PhoneNo"
          name="phone"
          type="tel"
          id="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.phone}
          error={formik.errors.phone}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          id="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.password}
          error={formik.errors.password}
        />

        <TextField
          label="Confirm Password"
          name="confirmpassword"
          type="password"
          id="confirmpassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.confirmpassword}
          error={formik.errors.confirmpassword}
        />
        <div className="my-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            onClick={resetHandler}
            type="reset"
            className="btn btn-danger mx-2"
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default Signup;
