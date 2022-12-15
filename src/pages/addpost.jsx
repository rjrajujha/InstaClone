import React from 'react';
import { Link } from 'react-router-dom';

function Post() {
    return (
        <React.Fragment>
            <div id='header'>
                <div id='nav-left'>  <Link to="/"> <i className="fa-brands fa-instagram"></i> </Link> <p className='logotext'>InstaClone</p> </div></div>
            <div id='hr-line'></div>
            <p>Post Page</p>
            <p>This page is under cunscruction</p>
        </React.Fragment>
    );
}

export default Post;