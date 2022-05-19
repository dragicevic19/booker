import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/context/AuthContext";
import "./login.css";
 

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const {  loading, error, dispatch } = useContext(AuthContext);
 

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
   
    dispatch({ type: "LOGIN_START" });
    
    try {
      const res = await axios.post("http://localhost:8080/auth/login", {email:credentials.username, password:credentials.password});
    //     const res =fetch('http://localhost:8080/auth/login', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({email:credentials.username, password:credentials.password})
    //   })
      

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      console.log(res.data.details)
      console.log(res)
      
      navigate("/")
    } catch (err) {
        console.log(error);
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;