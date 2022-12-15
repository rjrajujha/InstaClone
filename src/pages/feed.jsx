import './feed.css';
import React from 'react';
import userData from '../../src/mock_data/userData.json';
import { Link } from "react-router-dom";

function Feed() {
    const users = userData.user;
    return (
        <React.Fragment>
            <div id='header'>
                <div id='nav-left'>  <Link to="/"> <i className="fa-brands fa-instagram"></i> </Link> <p className='logotext'>InstaClone</p> </div>
                <div id='nav-right'> <Link to="/post"> <i class="fa-solid fa-camera">  </i> </Link> </div>
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
                            <img src={e.PostImage} alt='card-img' />
                        </div>
                        <div id='card-footer'>
                            <div id='card-footer-likes'>
                                <div id='card-likes-icon'>
                                    <div id='like-post'><i class="fa-regular fa-heart"></i></div>
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