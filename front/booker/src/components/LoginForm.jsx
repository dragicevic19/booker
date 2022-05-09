import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TextField } from '@mui/material';


 
const LoginForm = ({onLogin,  handleChange ,values,validation}) => {  // pozvati ovu metodu onLogin kada dobijemo ulogovanog korisnika na beku





  const navigate = useNavigate();

  const handleSubmit = async e => {
    const user = await fakeLogin(
 
    )
    onLogin(user)
    navigate('/')
  }

  async function fakeLogin() {
    return fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email:values.email, password: values.password})
    })
      .then(data => data.json())
      
  }

  
  return (
        <div className="container">
            <div className="login">
              <h2>Login</h2>
                <div className="email">
                  <TextField id="email" label="Email" variant="outlined" onChange={handleChange("email")}/>
                </div>
                <div className="pass">
                  <TextField id="pass" label="Password" variant="outlined" onChange={handleChange("password")} />
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
 
export default LoginForm;