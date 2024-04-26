import React, { useState } from "react";
import { Box, List, ListItem, ListItemText, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "./account.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser, registerUser } from "../redux/action";
function Login() {
  const dispatch = useDispatch()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [account, toggleAccount] = useState("login");
 
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };
   const handleLogin = async () => {
     if (!email || !password) {
      alert("Please fill in all fields.");
       return;
     }

     try {
       console.log(email,password)
       await dispatch(loginUser({ email, password }));

       alert("Logged in successfully");
       toggleSignup("login");
       navigate("/movie");
     } catch (err) {
        console.error("Login failed:", err);
      alert("Invalid Email or Password");
     }
   };
  const handleSignup = async() => {
    if (!name || !email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    
    try {
      await dispatch(registerUser({ name, email, password }));
      toast.success("signed in successfully");
      toggleSignup("login");
      navigate("/movie")
    }
    catch(err){
       toast.error("Invalid Email or Password");
    }
  };


 
  return (
    <Box className="image">
      {account === "login" ? (
        <Box className="details">
          <TextField
            id="filled-basic"
            label=" email"
            variant="standard"
            name="loginemail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Password"
            type="password"
            name="loginPassword"
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button id="login-button" variant="contained" onClick={handleLogin}>
            Login
          </Button>
          <Typography id="text" variant="h5">
            OR
          </Typography>
          <Button
            id="sign-up"
            variant="outlined"
            onClick={() => toggleSignup()}
          >
            Create An Account
          </Button>
          {error && <p id="error-message">{error}</p>}
        </Box>
      ) : (
        <Box className="details">
          <TextField
            id="filled-basic"
            onChange={(e) => setName(e.target.value)}
            name="Name"
            inputProps={{
              type: "text",
              className: "no-hover",
            }}
            label=" Enter Your Name"
            variant="standard"
          />
          <TextField
            id="filled-basic"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            inputProps={{
              type: "text",
              className: "no-hover",
            }}
            label=" email"
            variant="standard"
          />
          <TextField
            id="filled-basic"
            onChange={(e) => setPassword(e.target.value)}
            name="Password"
            inputProps={{
              type: "password",
              className: "no-hover",
            }}
            label="Password"
            variant="standard"
          />
          <Button id="login-button" variant="contained" onClick={handleSignup}>
            Signup
          </Button>
          <Typography id="text" variant="h5">
            OR
          </Typography>
          <Button
            id="sign-up"
            variant="outlined"
            onClick={() => toggleSignup()}
          >
            Already Have An Account
          </Button>
          <p id="message">{message}</p>
          {error && <p id="error-message">{error}</p>}
        </Box>
      )}
      <Box className="benefits">
        <Typography variant="h6">
          Benefits of using your free IMDB Account
        </Typography>
        <List>
          <ListItem>
            <ListItemText>Personalized Recommendations</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Track everything you want to watch</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Rate and Remember everything you see</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Contribute to IMDB</ListItemText>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Login;
