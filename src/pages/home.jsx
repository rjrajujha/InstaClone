import './home.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <React.Fragment>
            <p>Homepage</p>
            <p>This page is under cunstruction</p>
            <Link to="/feed"> <button>Feed Page</button> </Link>
        </React.Fragment>
    );
};

export default Home;