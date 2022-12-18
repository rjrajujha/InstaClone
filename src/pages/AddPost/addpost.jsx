import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const INSTACLONE_API = 'https://insta-node-api.onrender.com/api/users'

function Post() {
    const [imgFile, setImgFile] = useState();
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', imgFile)
        formData.append('name', name)
        formData.append('location', location)
        formData.append('description', description)

        await fetch(INSTACLONE_API, { method: 'post', body: formData }).then((res) => res.json()).then((data) => {console.log(data); }).catch((e) => console.log(e))
        navigate('/feed');
    }
    return (
        <React.Fragment>
            <div id='header'>
                <div id='nav-left'>  <Link to="/"> <i className="fa-brands fa-instagram"></i> </Link> <p className='logotext'>InstaClone</p> </div></div>
            <div id='hr-line'></div>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                    <input type='file' name='image' onChange={(e) => { setImgFile(e.target.files[0]) }} accept='image/*' />
                </div>
                <div>
                    <div>
                        <input type='text' placeholder="Author" name='name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <input type='text' placeholder="Location" name='location' value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                </div>
                <div>
                    <input type='text' placeholder="Description" name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <input type='submit' value="Post" />
            </form>
        </React.Fragment>
    );
}

export default Post;