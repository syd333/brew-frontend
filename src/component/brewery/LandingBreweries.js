import React, { Component } from 'react'
import BreweryCard from './BreweryCard'

//landing page should load 4 breweries for display, these can be random

export default class LandingBreweries extends Component {
    state = {
       
    }

    //MAYBE MAKE A CALL TO API HERE TO PULL UP A FEW RANDOM BREWERIES OR SOMETHING

    render() {
        return (
            <div id="landing-breweries" className="ui four column doubling stackable grid container">
                <div className="column">
                    <p><BreweryCard/></p>
                </div>
                <div className="column">
                    <p><BreweryCard/></p>
                </div>
                <div className="column">
                    <p><BreweryCard/></p>
                </div>
                <div className="column">
                    <p><BreweryCard/></p>
                </div>
                </div>
        )
    }
}