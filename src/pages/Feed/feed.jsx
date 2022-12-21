import './feed.css';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import env from 'react-dotenv';

const INSTACLONE_API = env.MONGODB_URI;

function Feed() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(INSTACLONE_API)
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                console.log("API Fetched");
            })
            .catch((e) => console.log(e));
    }, []);
    const defaultImg = "https://cdn.siasat.com/wp-content/uploads/2020/04/Instagram--780x470.jpg";

    return (
        <React.Fragment>
            <div id='header'>
                <div id='nav-left'>  <Link to="/"> <i className="fa-brands fa-instagram"></i> </Link> <p className='logotext'>InstaClone</p> </div>
                <div id='nav-right'> <Link to="/post"> <i className="fa-solid fa-camera">  </i> </Link> </div>
            </div>
            <div id='hr-line'></div>

            {posts.map((e, i) => {
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
                                    <div id='like-post'>
                                        <i className="fa-regular fa-heart"></i>
                                        <i className="fa-solid fa-share"></i>
                                    </div>

                                    <div id='card-likes-count'> {e.likes} Likes</div>
                                </div>
                                <div id='card-footer-date'>{e.date.split("T")[0]}</div>
                            </div> <br />
                            <div id='card-footer-description'>{e.description}</div>
                        </div>
                    </div>
                );
            })}
        </React.Fragment>
    );
}

export default Feed;
