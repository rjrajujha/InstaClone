import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <React.Fragment>
            <div id='header'>
                <div id='nav-left'>  <Link to="/"> <i className="fa-brands fa-instagram"></i> </Link> <p className='logotext'>InstaClone</p> </div>
            </div>
            <div id='hr-line'></div>
            <p>Homepage</p>
            <p>This page is under cunstruction</p>
            <Link to="/feed"> <button>Feed Page</button> </Link>
        </React.Fragment>
    );
};

export default Home;