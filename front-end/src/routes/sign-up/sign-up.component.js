import './sign-up.styles.css'
import  React from 'react';
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate();
    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/Home');
      };
    const navigateLogin = () => {
        // 👇️ navigate to /
        navigate('/login');
    };

  return (
    <>

<div className="container">
  <div className="row justify-content-center col-md-5 card">
        <h2 className="card-title text-center">Create Your Account</h2>
        <div className="card-body py-md-4">
          <form _lpchecked={1}>
            <div className="form-group">
              <input type="text" className="form-control" id="name" placeholder="Name"/>
            </div>
            <div className="form-group">
              <input type="email" className="form-control" id="email" placeholder="Email"/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="password" placeholder="Password"/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="confirm-password" placeholder="Confirm Password"/>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-between">
                <a className="login-text" onClick={navigateLogin}>Login</a>
                <button className="btn btn-primary">Create Account</button>
            </div>
          </form>
        </div>
  </div>
</div>

    </>
  );
}

export default SignUp;