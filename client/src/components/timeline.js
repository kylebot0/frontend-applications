import React, { Component } from "react";

export class timeline extends Component {
    constructor(props) {
        super(props);
         this.state = {
           stage: this.props.stage,
           data: {
             date: 0,
             dateArray: []
           }
         };
        this.handleClick = this.handleClick.bind(this);

        }
         componentDidMount() {
           let date = this.props.render[0].date.value;
           console.log(date);

           const offsetDate = () => {
             let dateArray = [];
             for (let i = 0; i < 9; i++) {
               //Offset van -50 tot max 50
               let min = Math.ceil(-50);
               let max = Math.floor(50);
               let offset = Math.floor(Math.random() * (max - min + 1)) + min;
               // let offsetMax = Math.floor(Math.random() * (50 - 5 + 1)) + 10;
               if (date > 1963) {
                 offset = Math.floor(offset / 2);
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
             dateArray.push(date);
             dateArray.sort(function(a, b) {
               return a - b;
             });
             console.log(dateArray);

             this.setState(
               {
                 data: {
                   date: date,
                   dateArray: dateArray
                 }
               },
               console.log(this.state)
             );
           };
           offsetDate();
         }

         handleClick(e) {
           e.preventDefault();
           e.stopPropagation();
           this.props.mutateStage(this.state.stage++);
           console.log("State:" + this.state.stage);

         }
         render() {
           return (
             <div className="timeline">
               <div className="dot" id="1">
                 <span></span>
                 <a onClick={this.handleClick}>
                   {this.state.data.dateArray[0] > -50
                     ? this.state.data.dateArray[0]
                     : "leeg"}
                 </a>
               </div>
               <div className="dot" id="2">
                 <span></span>
                 <a>
                   {this.state.data.dateArray[1] > -50
                     ? this.state.data.dateArray[1]
                     : "leeg"}
                 </a>
               </div>
               <div className="dot" id="3">
                 <span></span>
                 <a>
                   {this.state.data.dateArray[2] > -50
                     ? this.state.data.dateArray[2]
                     : "leeg"}
                 </a>
               </div>
               <div className="dot" id="4">
                 <span></span>
                 <a>
                   {this.state.data.dateArray[3] > -50
                     ? this.state.data.dateArray[3]
                     : "leeg"}
                 </a>
               </div>
               <div className="dot" id="5">
                 <span></span>
                 <a>
                   {this.state.data.dateArray[4] > -50
                     ? this.state.data.dateArray[4]
                     : "leeg"}
                 </a>
               </div>
               <div className="dot" id="6">
                 <span></span>
                 <a>
                   {this.state.data.dateArray[5] > -50
                     ? this.state.data.dateArray[5]
                     : "leeg"}
                 </a>
               </div>
               <div className="dot" id="7">
                 <span></span>
                 <a>
                   {this.state.data.dateArray[6] > -50
                     ? this.state.data.dateArray[6]
                     : "leeg"}
                 </a>
               </div>
               <div className="dot" id="8">
                 <span></span>
                 <a>
                   {this.state.data.dateArray[7] > -50
                     ? this.state.data.dateArray[7]
                     : "leeg"}
                 </a>
               </div>
               <div className="dot" id="9">
                 <span></span>
                 <a>
                   {this.state.data.dateArray[8] > -50
                     ? this.state.data.dateArray[8]
                     : "leeg"}
                 </a>
               </div>
               <div className="dot" id="10">
                 <span></span>
                 <a>
                   {this.state.data.dateArray[9] > -50
                     ? this.state.data.dateArray[9]
                     : "leeg"}
                 </a>
               </div>
               <div className="timeline-inside"></div>
             </div>
           );
         }
       }

export default timeline;
