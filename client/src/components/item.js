import React, { Component } from 'react'

export class item extends Component {
    render() {
        return (
            <div className="img-container">
                <h1>{this.props.render.title}</h1>
                <img src={this.props.render.img} alt="Item" className="item-img"></img>
            </div>
        )
    }
}

export default item
