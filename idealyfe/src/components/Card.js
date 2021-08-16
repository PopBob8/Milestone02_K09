import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div className="card">
            <h2>THIS IS TITLE</h2>
            <h5>Title description, Sep 2, 2017</h5>
            {/* <div class="fakeimg" style="height:200px;">Image</div> */}
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
    )
}

export default Card;