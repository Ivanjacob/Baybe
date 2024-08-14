import React from "react";
import { Link, useNavigate } from "react-router-dom";


function SignupLogin() {

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    navigate("/login");
  }

  return (
    <div>
      <>
        <section className="vh-10" style={{ backgroundColor: "#9A616D" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">

              <div className="col col-xl-10">
                <div className="card" style={{ borderRadius: "1rem" }}>
                  <div className="row g-0">

                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                        alt="signup form"
                        className="img-fluid"
                        style={{ borderRadius: "1rem 0 0 1rem" }}
                      />
                    </div>
                    
                    <div className="col-md-6 col-lg-6 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-4 text-black">
                        <form onSubmit={handleRegister} >
                          <div className="d-flex align-items-center mb-3 pb-1">
                            <i
                              className="fas fa-cubes fa-2x me-3"
                              style={{ color: "#ff6219" }}
                            />
                            <span className="h2 fw-bold mb-0">Welcome👋</span>
                          </div>
                          <h5
                            className="fw-normal mb-3 pb-3"
                            style={{ letterSpacing: 8 }}
                          >
                            Sign Up
                          </h5>
                          <div className="form-outline mb-2">
                            <input
                              type="email"
                              id="form2Example17"
                              className="form-control form-control-lg"
                              placeholder="Email Address"
                            />
                          </div>
                          <div className="form-outline mb-2">
                            <input
                              type="text"
                              id="form2Example17"
                              className="form-control form-control-lg"
                              placeholder="Username"
                            />
                          </div>
                          <div className="form-outline mb-2">
                            <input
                              type="password"
                              id="form2Example17"
                              className="form-control form-control-lg"
                              placeholder="Password"
                            />
                          </div>
                          <div className="form-outline mb-2">
                            <input
                              type="password"
                              id="form2Example17"
                              className="form-control form-control-lg"
                              placeholder="Confirm Password"
                            />
                          </div>
                          <div className="pt-1 mb-4">
                            <button
                              className="btn btn-dark btn-lg btn-block"
                              type="submit"
                            >
                              Register
                            </button>
                          </div>
                          <a className="small text-muted" href="#!">
                            Forgot password?
                          </a>
                          <p
                            className="mb-0 pb-lg-0"
                            style={{ color: "#393f81" }}
                          >
                            Already have an account?{" "}
                            <Link
                              to="/login"
                              style={{ color: "#87CEEB" }}
                            >
                              Login Now
                            </Link>
                          </p>
                        </form>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <footer className="bg-light text-center text-lg-start">
          {/* Copyright */}
          <div
            className="text-center p-2"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2024 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">
              evansjacob.com
            </a>
          </div>
          {/* Copyright */}
        </footer>
      </>
    </div>
  );
}

export default SignupLogin;