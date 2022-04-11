import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="container">
            <div className="login">
              <h2>Login Form...</h2>
            </div>
            <div className="login-footer">
              <p>Don't have an account yet?</p>
              <Link to={'/register'}>Register Now!</Link>
            </div>
        </div>
      );
}
 
export default Login;