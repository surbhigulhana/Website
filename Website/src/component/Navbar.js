import React from "react";
import logo from "../Images/logo.png";
const Navbar = () => {
  return (
    <div>
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{width:"100%"}}>
        <a class="navbar-brand" href="#">
          <img src={logo} style={{ height: "70px", width: "80%" }}></img> Alison
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Explore Diplomas & Certificates
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Discover Careers <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                More
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <form
            class="form-inline my-2 my-lg-0"
            style={{ marginRight: "200px" }}
          >
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{width:"60%",height:"40px",fontSize:"larger"}}
            />
            <button
              class="btn btn-outline-success"
              type="submit"
              style={{ width: "36%" ,fontSize:"20px"}}
            >
              Search
            </button>
          </form>
        </div>
        &nbsp;
        <button
          type="submit"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#myModal"
          style={{ width: "10%" ,fontSize:"20px"}}
        >
          Login/Sign Up
        </button>
        
      </nav>
      </div>
      <br />
      <center>
        <div>
        <div
          class="container"
          style={{
            backgroundColor: "white",
            height: "50px",
            borderRadius: "40PX",
            marginTop:"10px",
          
            marginLeft:"200px"
          }}
        >
          <div class="row">
            <div class="col-sm" style={{ marginTop: "5px" }} id="c1">
              One of three columns
            </div>&nbsp;
            <div class="col-sm" style={{ marginTop: "5px" }} id="c2">
              One of three columns
            </div>&nbsp;
            <div class="col-sm" style={{ marginTop: "5px" }} id="c3">
              One of three columns
            </div>
          </div>
        </div>
        <div class="modal fade" id="myModal">
          <div class="modal-dialog modal-lg">
            <div class="modal-content" style={{ backgroundColor: "#090977" }}>
              <div class="modal-header">
                {/* <h4 class="modal-title">Modal Heading</h4> */}
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  style={{ color: "white", fontSize: "50px" }}
                >
                  &times;
                </button>
              </div>

              <div class="modal-body">
                <div class="login-wrap">
                  <div class="login-html">
                    <input
                      id="tab-1"
                      type="radio"
                      name="tab"
                      class="sign-in"
                      checked
                    />
                    <label for="tab-1" class="tab">
                      Sign In
                    </label>
                    <input id="tab-2" type="radio" name="tab" class="sign-up" />
                    <label for="tab-2" class="tab">
                      Sign Up
                    </label>
                    <div class="login-form">
                      <div class="sign-in-htm">
                        <div class="group">
                          <label for="user" class="label">
                            Username
                          </label>
                          <input id="user" type="text" class="input" />
                        </div>
                        <div class="group">
                          <label for="pass" class="label">
                            Password
                          </label>
                          <input
                            id="pass"
                            type="password"
                            class="input"
                            data-type="password"
                          />
                        </div>
                        <div class="group">
                          <input
                            id="check"
                            type="checkbox"
                            class="check"
                            checked
                          />
                          <label for="check">
                            <span class="icon"></span> Keep me Signed in
                          </label>
                        </div>
                        <div class="group">
                          <input type="submit" class="button" value="Sign In" />
                        </div>
                        <div class="hr"></div>
                        <div class="foot-lnk">
                          <a href="#forgot">Forgot Password?</a>
                        </div>
                      </div>
                      <div class="sign-up-htm">
                        <div class="group">
                          <label for="user" class="label">
                            Username
                          </label>
                          <input id="user" type="text" class="input" />
                        </div>
                        <div class="group">
                          <label for="pass" class="label">
                            Password
                          </label>
                          <input
                            id="pass"
                            type="password"
                            class="input"
                            data-type="password"
                          />
                        </div>
                        <div class="group">
                          <label for="pass" class="label">
                            Repeat Password
                          </label>
                          <input
                            id="pass"
                            type="password"
                            class="input"
                            data-type="password"
                          />
                        </div>
                        <div class="group">
                          <label for="pass" class="label">
                            Email Address
                          </label>
                          <input id="pass" type="text" class="input" />
                        </div>
                        <div class="group">
                          <input type="submit" class="button" value="Sign Up" />
                        </div>
                        <div class="hr"></div>
                        <div class="foot-lnk">
                          <label for="tab-1">Already Member?</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </center>
    </div>
  );
};

export default Navbar;
