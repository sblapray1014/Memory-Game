import React from 'react';
import './Jumbotron.css';

const Jumbotron = () => (
    <div>
        <div className="background jumbotron-fluid top-margin ">
            <div className="container">
                <br />
                <h1 id="Title" className="display-4n text-center">Game of Memory</h1>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div id="instructions">Click on an image to earn points, but don't click on any more than once or you might die!</div>
                    </div>
                </div>
                <br />
            </div>
        </div>
    </div>
)

export default Jumbotron;