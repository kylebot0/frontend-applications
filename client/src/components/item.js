import React, { Component } from 'react'

export class item extends Component {
         state = {
             stage: this.props.stage,
           render: {
             title: this.props.render[0].title.value,
             imgUrl: this.props.render[0].imgUrl.value
           }
         };
         componentDidMount() {

         }
         render() {
           return (
             <div className="img-container">
               <h1>{this.state.render.title}</h1>
               <img
                 src={this.state.render.imgUrl}
                 alt="Item"
                 className="item-img"
               ></img>
             </div>
           );
         }
       }

export default item
