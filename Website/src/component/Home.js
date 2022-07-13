import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import s1 from "../Images/e.jpg";
import Card from "./card";
import s2 from "../Images/upskill.jpg";
import a from "../Images/a.png";
import a1 from "../Images/a1.png";
import CardBackGround from "./CardBackGround";
import men from "../Images/men.png";
import g from "../Images/google.png";
import m from "../Images/micro.png";
import cam from "../Images/cam.png";
import mit from "../Images/mit.png";
import stan from "../Images/stan.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <center>
        <h1
          style={{
            fontSize: "40px",
            color: "black",
            fontWeight: "700",
          }}
        >
          Build Your Career In 3 Easy Steps
        </h1>
        <br />
        <input
          type="text"
          placeholder="What Do You Want To Learn today ?"
          style={{
            height: "40px",
            width: "60%",
            borderRadius: "20px",
            textAlign: "center",
          }}
        ></input>
        <br />
        <br />
        <h1>23 Million Learners. 15 Years. 100% Free Courses</h1>
        <br />
      </center>
      <img
        src={a}
        style={{ marginLeft: "100px", height: "350px", marginTop: "-50px" }}
      ></img>
      <img src={a1} style={{ marginLeft: "850px", marginTop: "-460px" }}></img>
      <CardBackGround />
      <br />
      <center>
        <h1
          style={{
            fontSize: "40px",
            color: "black",
            fontWeight: "700",
          }}
        >
          Not Sure Where To Begin?
        </h1>
        <h1
          style={{
            fontSize: "25px",
            color: "black",
            fontWeight: "500",
          }}
        >
          What is your main goal on Alison?
        </h1>
        <img src={men} style={{ marginLeft: "-1400px" }}></img>
        <div
          class="container"
          id="container"
          style={{ marginTop: "-350px", height: "30px" }}
        >
          <div class="card" id="card3">
            <div class="card-body">
              <img src="https://www.luciferscode.com/assets/images/burger-fries.png" />
              <h1>Eat</h1>
            </div>
          </div>

          <div class="card" id="card3">
            <div class="card-body">
              <img src="https://www.luciferscode.com/assets/images/snoring.png" />
              <h1>Sleep</h1>
            </div>
          </div>

          <div class="card" id="card3">
            <div class="card-body">
              <img
                src="https://www.luciferscode.com/assets/images/refresh.png"
                style={{ width: "45px" }}
              />
              <h1>Repeat</h1>
            </div>
          </div>
        </div>
      </center>
      <center>
        <button
          type="button"
          class="btn btn-success"
          style={{
            fontSize: "22px",
            borderRadius: "20px",
            marginTop: "-300px",
          }}
        >
          {" "}
          Explore More New Courses
        </button>
        <br />
        <br />
        <br />
        <br />

        <h1
          style={{
            fontSize: "30px",
            color: "black",
            fontWeight: "700",
            marginTop: "-150px",
          }}
        >
          Learn From The World's Leading Experts
        </h1>
      </center>
      <Card />*
      <center>
        <button
          type="button"
          class="btn btn-success"
          style={{ fontSize: "22px", borderRadius: "20px" }}
        >
          {" "}
          Explore More New Courses
        </button>
        <br />
        <br />
        <br />
        <br />

        <h1
          style={{
            fontSize: "30px",
            color: "black",
            fontWeight: "700",
          }}
        >
          Learn From The World's Leading Experts
        </h1>
      </center>
      <br />
      <div
        style={{ height: "130px", width: "100%", backgroundColor: "#DCDCDC" }}
      >
        {" "}
        <center>        <span>
          <img src={g}id="span" />
        </span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span>
          <img src={mit}id="span" />
        </span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span>
          <img src={m} id="span"/>
        </span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span>
          <img src={cam}id="span" />
        </span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span>
          <img src={stan} id="span"/>
        </span>
        </center>

      </div>
      <br />
      <br />
      <center>
        <div class="row">
          <div class="col-10 col-md-7" id="h1">
          ❝ Over <b style={{color:"blue"}}> 23 Million Learners</b>
            <br /> <br />
            have used Alison to
            <br />
            <br /> empower themselves
            <br />
            <br /> through education ❞ 
          </div>
          <div class="col-5 col-md-5" style={{borderRadius:"20px",width:"50%"}}>
            <div class="bd-example">
              <div
                id="carouselExampleCaptions"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={s1} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={s1} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={s1} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </center>
      <br />
      <div class="row" style={{ marginTop: "60px" }}>
        <div class="col">
          <img
            src={s2}
            style={{ marginLeft: "100px", width: "60%", marginTop: "-80px" }}
          ></img>
        </div>
        <div class="col">
          <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
            A Faster Way For Your Employees
            <br />
            To Grow And Upskill
          </h1>
          <br />
          <h2 style={{ fontSize: "20px" }}>
            Our range of solutions has something to offer all businesses <br />
            and organizations. Whether you’re a non-profit or a commercial
            entity, <br />
            we can tailor a plan for your needs.
          </h2>
        </div>
      </div>
      <div class="card-holder" id="card1">
        <div class="card bg-gold" id="card1">
          New York is Sunny today at 60°.
        </div>
      </div>
      <br />
      <div class="grid">
        <figure class="effect-marley">
          <img
            src="https://static.pexels.com/photos/53754/pexels-photo-53754-large.jpeg"
            alt="img11"
          />
          <figcaption>
            <h2>
              Sweet <span>Marley</span>
            </h2>
            <p>Marley tried to convince her but she was not interested.</p>
            <a href="#">View more</a>
          </figcaption>
        </figure>
        <figure class="effect-marley">
          <img
            src="https://pixabay.com/static/uploads/photo/2016/02/28/12/53/child-1226954_960_720.jpg"
            alt="img12"
          />
          <figcaption>
            <h2>
              Sweet <span>Marley</span>
            </h2>
            <p>Marley tried to convince her but she was not interested.</p>
            <a href="#">View more</a>
          </figcaption>
        </figure>
      </div>
      <br />
      <div class="grid">
        <figure class="effect-marley">
          <img
            src="https://static.pexels.com/photos/53754/pexels-photo-53754-large.jpeg"
            alt="img11"
          />
          <figcaption>
            <h2>
              Sweet <span>Marley</span>
            </h2>
            <p>Marley tried to convince her but she was not interested.</p>
            <a href="#">View more</a>
          </figcaption>
        </figure>
        <figure class="effect-marley">
          <img
            src="https://pixabay.com/static/uploads/photo/2016/02/28/12/53/child-1226954_960_720.jpg"
            alt="img12"
          />
          <figcaption>
            <h2>
              Sweet <span>Marley</span>
            </h2>
            <p>Marley tried to convince her but she was not interested.</p>
            <a href="#">View more</a>
          </figcaption>
        </figure>
      </div>
      
      <br />
      <br />
      <br />
      <br />
      <center>
        <h1> Our Services</h1>
      </center>
      <div class="row" style={{ marginLeft: "-0px", width: "100%" }}>
        <div class="col-md-4">
          <div class="box">
            <div class="our-services settings">
              <div class="icon">
                {" "}
                <img src="https://i.imgur.com/6NKPrhO.png" />{" "}
              </div>
              <h4>Settings</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box">
            <div class="our-services speedup">
              <div class="icon">
                {" "}
                <img src="https://i.imgur.com/KMbnpFF.png" />{" "}
              </div>
              <h4>Speedup</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box">
            <div class="our-services privacy">
              <div class="icon">
                {" "}
                <img src="https://i.imgur.com/AgyneKA.png" />{" "}
              </div>
              <h4>Privacy</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="box">
            <div class="our-services backups">
              <div class="icon">
                {" "}
                <img src="https://i.imgur.com/vdH9LKi.png" />{" "}
              </div>
              <h4>Backups</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box">
            <div class="our-services ssl">
              <div class="icon">
                {" "}
                <img src="https://i.imgur.com/v6OnUqu.png" />{" "}
              </div>
              <h4>SSL secured</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box">
            <div class="our-services database">
              <div class="icon">
                {" "}
                <img src="https://i.imgur.com/VzjZw9M.png" />{" "}
              </div>
              <h4>Database</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
