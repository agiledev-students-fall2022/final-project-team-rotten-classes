import React, { useState, useEffect } from "react";
import './profile.css';

import mock_user from './../../MOCK_DATA_USERS.json';

function Profile() {
  const [data, setData] = useState({})
  useEffect(()=>{
    fetch("http://localhost:4000/api/users")
    .then(res => res.json())
    .then(data => setData(data))
  }, [])
    return (
        <>
        <h1 className="heading">PROFILE</h1>
            <aside className="profile-card">
  <header>
    {/* here’s the avatar */}
      <img className="dp" src={data.dp} />
    <br></br>
    <br></br>
    {/* name */}
    <h1 className="name">{data.name}</h1>
    {/* and role or location */}
    <h2 className="subtitle">{data.year}</h2>
    <br></br>
    
  </header>
  {/* bit of a bio; who are you? */}
  <div className="profile-bio">
    <p className="school"><span className="heading-school">University:</span> {data.university}</p>
    <p className="school"><span className="heading-school">School:</span> {data.school}</p>
    <p className="major"><span className="heading-major">Major:</span> {data.major}</p>
    <p className="bio"><span className="heading-bio">Bio:</span> {data.bio}</p>
  </div>
</aside>
<br></br>
<button type="button" className="button1">SIGN OUT</button>

        </>

    );
}

export default Profile;