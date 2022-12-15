import './feed.css';
import React from 'react';
import { Link } from "react-router-dom";

// import userData from '../../src/mock_data/userData.json';
// const fetch = require('node-fetch');
let userData;

fetch('https://rjrajujha.github.io/insta-node-api/mock_data/userData.json')
    .then((val) => val.json())
    .then((val2) => {
        console.log("data fetched from github/mock_data");
        userData = val2;
    }).catch((err) => { console.log(`Error is ${err}`) })


function Feed() {
    const users = userData.user;
    const defaultImg = "https://cdn.siasat.com/wp-content/uploads/2020/04/Instagram--780x470.jpg"
    return (
        <React.Fragment>
            <div id='header'>
                <div id='nav-left'>  <Link to="/"> <i className="fa-brands fa-instagram"></i> </Link> <p className='logotext'>InstaClone</p> </div>
                <div id='nav-right'> <Link to="/post"> <i className="fa-solid fa-camera">  </i> </Link> </div>
            </div>
            <div id='hr-line'></div>

            {users.map((e, i) => {
                return (
                    <div id='card'>
                        <div id='card-nav'>
                            <div id='card-nav-left'>
                                <div id='user-name'> {e.name} </div>
                                <div id='user-city'> {e.location} </div>
                            </div>
                            <div id='card-nav-rigth'><a href='/'>...</a></div>
                        </div>
                        <div id='card-img'>
                            <img src={e.PostImage || defaultImg} alt='card-img' />
                        </div>
                        <div id='card-footer'>
                            <div id='card-footer-likes'>
                                <div id='card-likes-icon'>
                                    <div id='like-post'><i className="fa-regular fa-heart"></i></div>
                                    <div id='card-likes-count'> {e.likes} Likes</div>
                                </div>
                                <div id='card-footer-date'>{e.date}</div>
                            </div> <br />
                            <div id='card-footer-description'>{e.description}</div>
                        </div>
                    </div>
                );
            })};
        </React.Fragment>
    );
}

export default Feed;