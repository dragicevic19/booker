import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = ({onLogin}) => {  // pozvati ovu metodu onLogin kada dobijemo ulogovanog korisnika na beku
  
  const navigate = useNavigate();

  const fakeLogin = () => {
    const user = {
      'firstName': 'Marko',
      'lastName': 'Markovic',
      'email': 'marko@gmail.com',
      'password': 'marko123',
      'type': 'boat_owner',
      // .... i ostali atributi koje cemo dobiti sa beka
    }
    onLogin(user)
    navigate('/')
  }
  
  return (
        <div className="container">
            <div className="login">
              <h2>Login Form...</h2>
              <Button onClick={fakeLogin}>Login</Button>
            </div>
            <div className="login-footer">
              <p>Don't have an account yet?</p>
              <Link to={'/register'}>Register Now!</Link>
            </div>
        </div>
      );
}
 
export default Login;