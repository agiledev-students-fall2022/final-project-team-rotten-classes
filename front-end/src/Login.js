import './Login.css'
import  React from 'react';
import { useNavigate } from 'react-router-dom'

function Login(){

    const navigate = useNavigate();
    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/Home');
      };

  return (
    <>

<div className="container">
  <div className="row justify-content-center">
    <div className="col-md-5">
      <div className="card">
        <h2 className="card-title text-center" onClick={navigateHome}>
          CLASSCRITIC
        </h2>
        <div className="card-body py-md-4">
          <form _lpchecked={1}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="confirm-password"
                placeholder="Confirm Password"
              />
            </div>
            <div className="d-flex flex-row align-items-center justify-content-between">
              <a className="login-text" href="#">Login</a>
              <button className="btn btn-primary">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Login;
