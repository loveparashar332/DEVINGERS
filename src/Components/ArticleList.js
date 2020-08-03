import React, { Component } from 'react'
import Carousel from "react-multi-carousel";

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

export default class ArticleList extends Component {
    
    render() {
        return (
            <div class="container">  
            <div class="row">
            <div class="col-lg-8 my-5">
              <h3>NARI: Ministry of Women and Child Development</h3>
              <h6>Your Network is Your Net Worth</h6>
              <a href="#">
                <p style={{ fontSize: "14px" }}>Change Language भाषा बदलो</p>
              </a>
            </div>
            <div class="col-lg-4 my-5" style={{ textAlign: "right" }}>
            <div class="dropdown">
                <button data-letters="AG" class="bg-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a data-letters="AG" class="dropdown-item" href="#">Akshra Gupta</a>
                  <p className='text-muted text-center' style={{fontSize:'0.8em'}}>Software engineer| IIIT kota</p>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Profile</a>
                  <a class="dropdown-item" href="/login">LogOut</a>
               </div>
              </div>
              
              <button
                type="submit"
                className="btn btn-sm btn-primary"
                style={{ background: "#F4508D", border: "0px" }}
              >
                <a href="/editor" className="btn btn-primary btn-sm" style={{color:"white"}}>Write an Article  <span role='img' description='aria-label'>✍️</span> </a>
              </button>
            </div>
          </div>  
                <h4>Cooking Articles</h4>
                <p>Specially Brewed for you ☕</p>
                <br/>
                <div>
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
                  <p class="card-text" style={{color:"pink"}}>Is 15/16 not too late to start practising judo (to compete in more serious competitions later)?</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/article/343782238" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/def2.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                <h5 class="card-title" style={{color:"pink"}}>Prepare for Indian Army Exam</h5>
                  <p class="card-text" style={{color:"pink"}}>In this article, you can find the details on these Indian army entries and exams and how one can preparing these...</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/article/375347838" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/def3.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                <h5 class="card-title" style={{color:"pink"}}>How to start with Taijutsu</h5>
                  <p class="card-text" style={{color:"pink"}}>Taijutsu is a Japanese blanket term for any combat skill, technique or system of martial art using body movements...</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/article/384732233" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
                <div class="card" style={{width: "22rem"}}>
                <img src={require('../assets/images/def4.jpg')} class="card-img-top" alt="..." style={{height:"200px"}}/>
                <div class="card-body">
                <h5 class="card-title" style={{color:"pink"}}>Start Local Defense Community</h5>
                  <p class="card-text" style={{color:"pink"}}>Defence families are strongest when they are connected with their local communities. We provide a number of support..</p>
                  <button type="submit" className="btn btn-sm btn-primary" style={{ background: "#F4508D", border: "0px" }}>
                  <a href="/article/387323892" style={{color:"white"}}>Read More ✍️</a>
                  </button>
                </div>
                </div>
              </Carousel>
              <br/><br/>
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
              <br/><br/>
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
              <br/><br/>
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
                </div> 
            </div>
        )
    }
}
