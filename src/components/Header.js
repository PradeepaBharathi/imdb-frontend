import * as React from "react";
import "./header.css"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import imdb from "../assests/images.png"
import { Link, useNavigate } from "react-router-dom";



function Header() {
  const handleOut = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("name")
}

  return (
    <AppBar position="static" className="app-bar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={imdb} alt="pic" className="logo" />
          <input type="text" placeholder="search" className="search" />
          <Box className='btn-list'>
            <Link to="/movie">Movies</Link>
            <Link to="/add">Add Movies</Link>
            <Link to="/" onClick={handleOut}>SignOut</Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
