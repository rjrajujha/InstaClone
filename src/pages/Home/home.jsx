import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

function Home() {

    function enterAlert(){
        alert('Click On Enter')
    }

    return (
        <React.Fragment>
            <div id='header'>
                <div id='nav-left'>  <Link to="/"> <i className="fa-brands fa-instagram"></i> </Link> <p className='logotext'>InstaClone</p> </div>
            </div>
            <div id='hr-line'></div>
            <div id='homemain'>
                <div id='homeimg'>
                    <img src='https://res.cloudinary.com/dktebfwtc/image/upload/v1671361709/10x/lens-1418954_ctucl6.png' alt='LandingImg' onMouseOver={enterAlert}></img>
                </div>
                <div id='hometext'>
                    <p>Welcome to InstaClone</p>
                    <Link to="/feed"> <button id='feedbtn'>Enter</button> </Link>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;