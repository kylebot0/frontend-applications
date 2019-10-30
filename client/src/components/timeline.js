import React, { Component } from "react";

export class timeline extends Component {
         state = {
             data: {
                dateArray: [],
             },
         }
         componentDidMount() {
           let date = this.props.itemArray.date;
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

             this.setState({
               data: {
                 dateArray: dateArray
               }
             }, console.log(this.state));
           };
           offsetDate();
         }
         render(props) {
           return (
             <div className="timeline">
               <div className="dot" id="1">
                 <span></span>
                 <p>
                   {this.state.data.dateArray[0] > -50
                     ? this.state.data.dateArray[0]
                     : "leeg"}
                 </p>
               </div>
               <div className="dot" id="2">
                 <span></span>
                 <p>
                   {this.state.data.dateArray[1] > -50
                     ? this.state.data.dateArray[1]
                     : "leeg"}
                 </p>
               </div>
               <div className="dot" id="3">
                 <span></span>
                 <p>
                   {this.state.data.dateArray[2] > -50
                     ? this.state.data.dateArray[2]
                     : "leeg"}
                 </p>
               </div>
               <div className="dot" id="4">
                 <span></span>
                 <p>
                   {this.state.data.dateArray[3] > -50
                     ? this.state.data.dateArray[3]
                     : "leeg"}
                 </p>
               </div>
               <div className="dot" id="5">
                 <span></span>
                 <p>
                   {this.state.data.dateArray[4] > -50
                     ? this.state.data.dateArray[4]
                     : "leeg"}
                 </p>
               </div>
               <div className="dot" id="6">
                 <span></span>
                 <p>
                   {this.state.data.dateArray[5] > -50
                     ? this.state.data.dateArray[5]
                     : "leeg"}
                 </p>
               </div>
               <div className="dot" id="7">
                 <span></span>
                 <p>
                   {this.state.data.dateArray[6] > -50
                     ? this.state.data.dateArray[6]
                     : "leeg"}
                 </p>
               </div>
               <div className="dot" id="8">
                 <span></span>
                 <p>
                   {this.state.data.dateArray[7] > -50
                     ? this.state.data.dateArray[7]
                     : "leeg"}
                 </p>
               </div>
               <div className="dot" id="9">
                 <span></span>
                 <p>
                   {this.state.data.dateArray[8] > -50
                     ? this.state.data.dateArray[8]
                     : "leeg"}
                 </p>
               </div>
               <div className="dot" id="10">
                 <span></span>
                 <p>
                   {this.state.data.dateArray[9] > -50
                     ? this.state.data.dateArray[9]
                     : "leeg"}
                 </p>
               </div>
               <div className="timeline-inside"></div>
             </div>
           );
         }
       }

export default timeline;
