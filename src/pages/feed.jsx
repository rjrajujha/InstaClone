import './feed.css';
import React from 'react';
import userData from '../../src/mock_data/userData.json'

function Feed() {
    const users = userData.user;
    return (
        <React.Fragment>
            <div id='header'>
                <div id='nav-left'> <i class="fa fa-car"></i> </div>
                <div id='nav-right'> R </div>
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
                                    <div id='like-post'>Hrt</div>
                                    <div id='card-likes-count'> {e.likes} Likes</div>
                                </div>
                                <div id='card-footer-date'>{e.date}</div>
                            </div> <br />
                            <div id='card-footer-description'>{e.description}</div>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    );
}

export default Feed;