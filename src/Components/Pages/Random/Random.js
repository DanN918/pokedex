
import React, { Component } from 'react';
import classes from './Random.module.scss';
import { Link } from 'react-router-dom';

let newLink;
//random genereates a number from 1-807 and display the stats of the pokemon
class Random extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randNum: Math.floor(Math.random() * 807) + 1
        }
    }

    generatePokemon = () => {
        return newLink = `/pokemon/${this.state.randNum}`;
    }

    render() {
        return (
            <div>
                <h1>Random</h1>
                <p>Click the button below to be suprised!</p>
                <br/>
                <Link className = {classes.buttonLink} to={this.generatePokemon}>GENERATE</Link>

            </div>
        )
    }
}

export default Random;