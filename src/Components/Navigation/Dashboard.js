import React, { Component } from 'react';
import PokeList from '../PokeList/PokeList';

//Dashboard that shows 20 pokemon by name in a 5x4 format

class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <PokeList/>
                    
                </div>
            </div>
        )
    }

}

export default Dashboard;