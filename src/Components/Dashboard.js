import React, { Component } from "react";
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed";
import "../assets/css/dashboard.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {display: "inline"};
    this.handleMood = this.handleMood.bind(this);
  }
  handleMood(e){
    console.log("New Here")
    this.setState((state)=>{
      return {display:"none"}
    });
    alert('Response Saved! Thank you for submitting your response 🦄.')
  }
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 my-5">
              <h3>NARI: Ministry of Women and Child Development</h3>
              <h6>Your Network is Your Net Worth</h6>
              <a href="">
                <p style={{ fontSize: "14px" }}>Change Language भाषा बदलो</p>
              </a>
            </div>
            <div class="col-lg-4 my-5" style={{ textAlign: "right" }}>
              <h5>
                <a href="/profile" title="My Profile">
                  Akshra Gupta
                </a>
                <h6><a href="/logout">Logout</a></h6>
              </h5>
              <button
                type="submit"
                className="btn btn-sm btn-primary"
                style={{ background: "#F4508D", border: "0px" }}
              >
                <a href="/editor" style={{color:"white"}}>Write an Article ✍️</a>
              </button>
            </div>
          </div>
          <div class="row" id="mood" style={{display: `${this.state.display}` }}>
            <div class="col-lg-6 my-3">
              <h6>
                Good Morning Akshra, today we have a Quick Mood Test! We are
                with you in your every ups and downs!!
              </h6>
              <h2>How are you feeling today?</h2>
              <div className="row">
                <button className="feedback" onClick={this.handleMood} style={{ fontSize: "40px" }}>
                  😣
                </button>
                <button className="feedback" onClick={this.handleMood} style={{ fontSize: "40px" }}>
                  😔
                </button>
                <button className="feedback" onClick={this.handleMood} style={{ fontSize: "40px" }}>
                  ☹️
                </button>
                <button className="feedback" onClick={this.handleMood} style={{ fontSize: "40px" }}>
                  😶
                </button>
                <button className="feedback"  onClick={this.handleMood} style={{ fontSize: "40px" }}>
                  🙂
                </button>
                <button className="feedback" onClick={this.handleMood} style={{ fontSize: "40px" }}>
                  😀
                </button>
                <button className="feedback" onClick={this.handleMood} style={{ fontSize: "40px" }}>
                  😎
                </button>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "40px" }}>
            <h3>Safety First</h3>
            You are in a <button class="btn btn-sm btn-success">SAFE</button> location!! Check <a href="/safety">Here</a> to get full
            details. Below are some nearby landmarks.
            <br></br>
            <div class="row my-2 mx-1">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Police Station</th>
                    <th scope="col">Hospital</th>
                    <th scope="col">Public Park</th>
                    <th scope="col">Resturant</th>
                    <th scope="col">Hotel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Name</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone Number</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">Location</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
              <br></br>
            </div>
            <div style={{ marginTop: "40px" }}>
              <h3>Articles Hand Crafted for you!</h3>
              <p>Recommendations are based on previous searches! Find more articles <a href="/glossary">here</a></p>
              <div
                class="input-group input-group-sm mb-3"
                style={{ width: "40%" }}
              >
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    Search By Keyword
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="tagsearch"
                  name="tagsearch"
                ></input>
              </div>
              <h5>Defense and Training</h5>
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all 2.0"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/def1.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                  <h5 class="card-title" style={{color:"pink"}}>Learn Judo in 15 days</h5>
                  <p class="card-text" style={{color:"pink"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/editor" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/def2.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                <h5 class="card-title" style={{color:"pink"}}>Prepare for Indian Army Exam</h5>
                  <p class="card-text" style={{color:"pink"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/editor" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/def3.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                <h5 class="card-title" style={{color:"pink"}}>How to start with Ninjutsu</h5>
                  <p class="card-text" style={{color:"pink"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/editor" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/def4.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                <h5 class="card-title" style={{color:"pink"}}>Start Local Defense Community</h5>
                  <p class="card-text" style={{color:"pink"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/editor" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
              </Carousel>
              <h5 style={{marginTop:"30px"}}>Cooking</h5>
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all 2.0"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/cake.jpeg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                  <h5 class="card-title" style={{color:"pink"}}>Learn Judo in 15 days</h5>
                  <p class="card-text" style={{color:"pink"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/editor" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/pizza.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                <h5 class="card-title" style={{color:"pink"}}>Prepare for Indian Army Exam</h5>
                  <p class="card-text" style={{color:"pink"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/editor" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/burger.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                <h5 class="card-title" style={{color:"pink"}}>How to start with Ninjutsu</h5>
                  <p class="card-text" style={{color:"pink"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/editor" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/food.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                <h5 class="card-title" style={{color:"pink"}}>Start Local Defense Community</h5>
                  <p class="card-text" style={{color:"pink"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/editor" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
              </Carousel>
              {/* <h5 style={{marginTop:"30px"}}>Art and Craft</h5> */}
              {/* <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all 2.0"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <div class="card" style={{width: "22rem"}}>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="card-link">
                      Card link
                    </a>
                    <a href="#" class="card-link">
                      Another link
                    </a>
                  </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="card-link">
                      Card link
                    </a>
                    <a href="#" class="card-link">
                      Another link
                    </a>
                  </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="card-link">
                      Card link
                    </a>
                    <a href="#" class="card-link">
                      Another link
                    </a>
                  </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="card-link">
                      Card link
                    </a>
                    <a href="#" class="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              </Carousel> */}
            </div>
          </div>
          <div class="row my-3">
            <p style={{fontSize:"14px"}}>&nbsp;&nbsp;&nbsp;&nbsp;Developed and Managed by Team Devingers! Made for Smart India Hackathon 2020</p>
          </div>
        </div>
      </div>
    );
  }
}
