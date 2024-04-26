import { Box, Button, InputLabel,  input, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import "./edit.css"
import { useDispatch, useSelector } from 'react-redux';
import { editMovie } from '../redux/action';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditMovie() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie.movie)
  const navigate = useNavigate()
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    yearOfRelease: "",
    image: "",
    producer: "",
    actors: "",
  });

  useEffect(() => {
    
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get(`https://imdb-backend-cbwj.onrender.com/movie/allMovie/${id}`);
      console.log(response.data)
      const { name, yearOfRelease, image,producer,actors } = response.data;
      setFormData({ name, yearOfRelease, image, producer, actors });
    } catch (error) {
      console.log(error);
    }
  };



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    try {
  dispatch(editMovie(id, formData));
      alert("update successfull")
      navigate("/movie");
    }
    catch {
      alert("error in updating")
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          width={"25%"}
          height={"100%"}
          border={2}
          borderRadius={10}
          padding={0.5}
          margin="auto"
          boxShadow={"10px 10px 20px #ccc"}
          display="flex"
          flexDirection={"column"}
          marginTop={"10px"}
        >
          <Typography
            variant="h6"
            textAlign={"center"}
            fontWeight="bold"
            // padding={1}
            color="gray"
          >
            Edit Movie
          </Typography>
          <InputLabel
            sx={{ mb: 0.2, mt: 0.2, fontSize: "20px", fontWeight: "bold" }}
          >
            Title
          </InputLabel>
          <input
            className="text"
            name="name"
            margin="small"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <InputLabel
            sx={{ mb: 0.2, mt: 0.2, fontSize: "20px", fontWeight: "bold" }}
          >
            Image
          </InputLabel>
          <input
            className="text"
            name="image"
            margin="small"
            variant="outlined"
            value={formData.image}
            onChange={handleChange}
            required
          />
          <InputLabel
            sx={{ mb: 0.2, mt: 0.2, fontSize: "20px", fontWeight: "bold" }}
          >
            Year of Release
          </InputLabel>
          <input
            className="text"
            name="yearOfRelease"
            margin="small"
            value={formData.yearOfRelease}
            onChange={handleChange}
            variant="outlined"
            required
          />
          <InputLabel
            sx={{ mb: 0.2, mt: 0.2, fontSize: "20px", fontWeight: "bold" }}
          >
            Producer
          </InputLabel>

          <input
            className="text"
            name="producer"
            margin="small"
            variant="outlined"
            value={formData.producer}
            onChange={handleChange}
            required
          />
          <InputLabel
            sx={{ mb: 0.2, mt: 0.2, fontSize: "20px", fontWeight: "bold" }}
          >
            Actors
          </InputLabel>
          <input
            className="text"
            name="actors"
            margin="small"
            variant="outlined"
            value={formData.actors}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" id="submit">
            Update
          </Button>
        </Box>
      </form>
    </>
  );
}

export default EditMovie;
