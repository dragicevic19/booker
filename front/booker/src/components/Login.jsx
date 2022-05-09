import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TextField } from '@mui/material';


async function fakeLogin() {
  return fetch('http://localhost:8080/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email:'djura@gmail.com', password: '123'})
  })
    .then(data => data.json())
}

const Login = ({onLogin}) => {  // pozvati ovu metodu onLogin kada dobijemo ulogovanog korisnika na beku
  
  const navigate = useNavigate();

  const handleSubmit = async e => {
    const user = await fakeLogin({
      email: 'djura@gmail.com',
      password: '123'
    })
    onLogin(user)
    navigate('/')
  }


  
  return (
        <div className="container">
            <div className="login">
              <h2>Login Form</h2>
                <div className="email">
                  <TextField id="email" label="Email" variant="outlined" />
                </div>
                <div className="pass">
                  <TextField id="pass" label="Password" variant="outlined" />
                </div>
              <Button onClick={handleSubmit}>Login</Button>
            </div>
            <div className="login-footer">
              <p>Don't have an account yet?</p>
              <Link to={'/register'}>Register Now!</Link>
            </div>
        </div>
      );
}
 
export default Login;