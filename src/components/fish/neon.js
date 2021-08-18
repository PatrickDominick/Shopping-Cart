import React, { Component } from "react";
import neons from "../../../static/assets/images/Neons.jpg"

export default class Neons extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>Neon Tetra</h2>
                    <h3>$2 each</h3>

                    <img src={neons} alt="Neon Tetra Picture" />

                    <button onClick>Add to Cart</button>
                </div>
            </div>
        )
    }
}