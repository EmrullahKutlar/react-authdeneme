import React from "react";
import { login } from "../../store/User/User";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { stateUser } from "../../store/User/User";
import { useSelector } from "react-redux";
import { Formik, Field, Form } from "formik";
import { loginServices } from "../../services/auth";

function Auth() {
  const user = useSelector(stateUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  return (
    <>
      {!user.user ? (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className=" col-12 col-md-6">
              <div>
                <h1>Sign Up</h1>
                <Formik
                  initialValues={{
                    userName: "",
                    password: "",
                  }}
                  onSubmit={async (values) => {
                    await loginServices(values.userName, values.password)
                      .then((res) => {
                        console.log(res);
                        dispatch(
                          login({
                            user: res,
                            role: res.gender,
                          })
                        );
                        navigate("/");
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <label htmlFor="email">User Name</label>
                      <Field
                        id="userName"
                        name="userName"
                        placeholder="jane"
                        type="text"
                        className="form-control"
                      />
                      <label htmlFor="lastName">Password</label>
                      <Field
                        id="password"
                        name="password"
                        className="form-control"
                        type="password"
                        placeholder="********"
                      />
                      <button
                        type="submit"
                        className="form-control btn btn-primary mt-3"
                        disabled={isSubmitting}
                      >
                        Submit
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default Auth;
