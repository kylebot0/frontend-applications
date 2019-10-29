import React, { Component } from "react";

export class timeline extends Component {
  componentDidMount() {
    let date = this.props.render.date;
    console.log(date);

    const offsetDate = () => {
      let dateArray = [];
      for (let i = 0; i < 11; i++) {
        //Offset van -50 tot max 50
        let min = Math.ceil(-50);
        let max = Math.floor(50);
        let offset = Math.floor(Math.random() * (max - min + 1)) + min;
        // let offsetMax = Math.floor(Math.random() * (50 - 5 + 1)) + 10;
        if(date > 1963) {
            
            offset = offset / 2;
            let dateMax = date + offset;
            console.log(dateMax);
            if (dateMax > 2019) {
              date = 2019;
              dateArray.push(date - Math.floor(Math.random() * 50 + 1));
            } else {
              dateArray.push(date + offset);
            }
        } else {
              dateArray.push(date + offset);
        }
        
      }
      console.log(dateArray);
    };
    offsetDate();
  }
  render(props) {
    return (
      <div className="timeline">
        <div className="dot" id="1">
          <span></span>
          <p>{this.props.render.date}</p>
        </div>
        <div className="dot" id="2">
          <span></span>
          <p></p>
        </div>
        <div className="dot" id="3">
          <span></span>
          <p></p>
        </div>
        <div className="dot" id="4">
          <span></span>
          <p></p>
        </div>
        <div className="dot" id="5">
          <span></span>
          <p></p>
        </div>
        <div className="dot" id="6">
          <span></span>
          <p>1280</p>
        </div>
        <div className="dot" id="7">
          <span></span>
          <p>1280</p>
        </div>
        <div className="dot" id="8">
          <span></span>
          <p>1280</p>
        </div>
        <div className="dot" id="9">
          <span></span>
          <p>1280</p>
        </div>
        <div className="dot" id="10">
          <span></span>
          <p>1280</p>
        </div>
        <div className="dot" id="11">
          <span></span>
          <p>1280</p>
        </div>
        <div className="dot" id="12">
          <span></span>
          <p>1280</p>
        </div>
        <div className="timeline-inside"></div>
      </div>
    );
  }
}

export default timeline;
