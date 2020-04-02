import React, { Component } from 'react';
import compareLogo from '../../../Assets/Images/compare.png';
import './Compare.css';
import Search from '../../SearchBar/Search';

//Page where user can enter two indexes and compare stats

class Compare extends Component {

    render() {
        return (
            <>
            <div className="container">
                <h1>Compare</h1>
                <img src={compareLogo} />
                
            </div>

            {/*Where the twp comparisons will be at*/}
            <div className="searches">
                <Search/>
                <br/>
                <Search/>
            </div>
            </>
        )
    }
}

export default Compare;