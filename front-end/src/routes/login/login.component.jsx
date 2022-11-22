import './login.styles.css'
import  React from 'react';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/Home');
      };

  return (
    <>

<div className="container">
  <div className="row justify-content-center col-md-5 card">
        <h2 className="card-title text-center">Login</h2>
        <div className="card-body py-md-4">
          <form _lpchecked={1}>
            <div className="form-group">
              <input type="email" className="form-control" id="email" placeholder="Email"/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="password" placeholder="Password"/>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-between">
                <button className="btn btn-primary">Log In</button>
            </div>
          </form>
        </div>
  </div>
</div>

    </>
  );
}

export default Login;
