import React from "react";
import './profile.css';

import mock_user from './../../MOCK_DATA_USERS.json';

function Profile() {
    return (
        <>
        <h1 className="heading">PROFILE</h1>
            <aside className="profile-card">
  <header>
    {/* here’s the avatar */}
      <img className="dp" src={mock_user[0].dp} />
    <br></br>
    <br></br>
    {/* name */}
    <h1 className="name">{mock_user[0].name}</h1>
    {/* and role or location */}
    <h2 className="subtitle">{mock_user[0].year}</h2>
    <br></br>
    
  </header>
  {/* bit of a bio; who are you? */}
  <div className="profile-bio">
    <p className="school"><span className="heading-school">University:</span> {mock_user[0].university}</p>
    <p className="school"><span className="heading-school">School:</span> {mock_user[0].school}</p>
    <p className="major"><span className="heading-major">Major:</span> {mock_user[0].major}</p>
    <p className="bio"><span className="heading-bio">Bio:</span> {mock_user[0].bio}</p>
  </div>
</aside>
<br></br>
<button type="button" className="button1">SIGN OUT</button>

        </>

    );
}

export default Profile;