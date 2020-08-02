import React, { Component } from "react";
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed";
import axios from "axios";
import Map from "mapmyindia-react";

export default class Safety extends Component {
  state = {
    text: {
      recipient: "+917891217760",
      textmessage: "Hiii",
    },
  };
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  showPosition(position) {
    var x = document.getElementById("demo");
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
  }
  handleClick(e){
    var x = document.getElementById("demo");
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  render() {
    let status;
    if(this.state.location) 
      status = <button class="btn btn-sm btn-warning" onClick={this.handleClick}>Allow Location to be Accessed Manually</button>
    else{
      status = <button class="btn btn-sm btn-success">Location Accessible</button>
    }
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-8 my-5">
            <h3>NARI: Ministry of Women and Child Development</h3>
            <h6>Your Network is Your Net Worth</h6>
            <a href="">
              <p style={{ fontSize: "14px" }}>Change Language भाषा बदलो</p>
            </a>
            {status}
            <p id="demo"></p>
          </div>
          
          <div class="col-lg-4 my-5" style={{ textAlign: "right" }}>
            <h5>
              <a href="">Akshra Gupta</a>
            </h5>
            <h6><a href="/dashboard">Return to Dashboard</a></h6>
            <TwitterFollowButton screenName={"ministrywcd"} />
          </div>
        </div>
        <div className="row">
            <Map
              markers={[
                {
                  position: [18.5314, 73.845],
                  draggable: true,
                  title: "Marker title",
                  onClick: (e) => {
                    console.log("clicked ");
                  },
                  onDragend: (e) => {
                    console.log("dragged");
                  },
                },
              ]}
            />
            <hr style={{ background: "#63A026", color: "#63A026" }} />
        </div>
      </div>
    );
  }
}
