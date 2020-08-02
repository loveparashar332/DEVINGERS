import React, { Component } from "react";
import {Link} from "react-router-dom";
import { TwitterTimelineEmbed,TwitterFollowButton} from 'react-twitter-embed';
import "../assets/css/mainpage.css";
import "../assets/css/scroll.css";


export default class Mainpage extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 my-5">
                <h3>NARI: Ministry of Women and Child Development</h3>
                <h6>Your Network is Your Net Worth</h6>
                <a href=""><p style={{fontSize:"14px"}}>Change Language भाषा बदलो</p></a>
            </div>
            <div class="col-lg-4 my-5" style={{textAlign:"right"}}>
              <h5><a href="/login">Login</a> &nbsp; <a href="/register">Sign Up</a></h5>
              <TwitterFollowButton screenName={'ministrywcd'}/>
            </div>
          </div>
          <div class="row">
            <img  src={require("../assets/images/community.jpg")} style={{width:"100%",height:"100%"}}></img>
          </div>
          <div class="row my-5"> 
            <div class="col-lg-8">
              <h4>About Nari</h4>
              <hr></hr>
                <p>
                Women Empowerment includes the action of raising the status of women through education, raising awareness, literacy, and training. Our aim is to bring Empowerment by bringing significance to one’s emotional being. NARI is a web app that is building a emerging , enhancing and interactive community.where women will be encouraged, empowered according to her emotional aspect. 
              </p> 
              <h4>Why Nari?</h4>
              <hr></hr>
              <p>NARI is a web app that is building a emerging , enhancing and interactive community.where women will be encouraged, empowered according to her emotional aspect. NARI build a community where women can read blogs,and videos and empower herselves. mereover it has DIDI which is a very interactive chatbot for consulting about their career opportunity. <br></br>NARI has a interactive SOS, So that she can use it when she is feeling unsafe in unknown area. an interactive map will provide them nearest Police station,Hospitals and some reliable places</p>
            </div>
            <div class="col-lg-4">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="ministrywcd"
              options={{height: 400}}
            />
            </div>
          </div>
          <div class="row">
            <p style={{fontSize:"14px"}}>&nbsp;&nbsp;&nbsp;&nbsp;Developed and Managed by Team Devingers! Made for Smart India Hackathon 2020</p>
          </div>
        </div>
      </div>
    );
  }
}
