import "semantic-ui-css/semantic.min.css";
import React from 'react';
import { Link } from 'react-router-dom';

const PageList = ({filterBrew, handleDetails}) => {


    const renderedFilterBrew = filterBrew.map((brew) => {   
        return (
            <div key={brew.id} className="item">
                <div className="right floated content">
                    <Link to= {`/breweries/${brew.id}`} className="ui button">
                     Details
                    </Link>
                </div>
                <div className="header">
                 {brew.name}   
                </div>
                <div>
                    {brew.street} {brew.city}, {brew.state}
                </div>
            </div>
        )
    })

    return (
        <div className="ui relaxed divided list">
            {renderedFilterBrew}
        </div>
    )
    

}

export default PageList