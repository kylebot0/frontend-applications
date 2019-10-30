import React, { Component } from "react";

export class item extends Component {
         constructor(props) {
           super(props);
           this.state = {
             stage: 1,
             render: {
               title: "",
               imgUrl: ""
             }
           };
         }

         componentDidMount(props) {
           return this.setState({
             stage: this.props.stage,
             render: {
               title: this.props.render[this.props.stage].title.value,
               imgUrl: this.props.render[this.props.stage].imgUrl.value
             }
           });
         }

         static getDerivedStateFromProps(props, state) {
           if (props.stage !== state.stage) {
             return {
               stage: props.stage,
               render: {
                 title: props.render[props.stage].title.value,
                 imgUrl: props.render[props.stage].imgUrl.value
               }
             };
           }
           return null;
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

        //  componentWillUnmount() {

        //  }
       }

export default item;
