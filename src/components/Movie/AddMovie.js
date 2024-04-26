import React, { useState } from 'react'
import { Box, Button, InputLabel,  input, Typography } from "@mui/material";
import "./edit.css"
import { useDispatch } from 'react-redux';
import { addMovie } from '../redux/action';
import { useNavigate } from 'react-router-dom';
function AddMovie() {
  const dispatch = useDispatch();
   const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    yearOfRelease: "",
    image: "",
    producer: "",
    actors: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addMovie(formData));
      alert("Movie added successfully!");
      navigate("/movie")
     
      setFormData({ name: "", yearOfRelease: "", image: "", producer: "", actors: "" });
    } catch (error) {
      alert("Failed to add movie. Please try again later.");
      console.error(error);
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
            Add Movie
          </Typography>
          <InputLabel
            sx={{ mb: 0.2, mt: 0.2, fontSize: "20px", fontWeight: "bold" }}
          >
            Title
          </InputLabel>
          <input
            className="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="small"
            variant="outlined"
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
            value={formData.yearOfRelease}
            onChange={handleChange}
            margin="small"
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
            value={formData.producer}
            onChange={handleChange}
            variant="outlined"
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
            value={formData.actors}
            onChange={handleChange}
            margin="small"
            variant="outlined"
            required
          />
          <Button type="submit" variant="contained" id="submit">
            Add
          </Button>
        </Box>
      </form>
    </>
  );
}

export default AddMovie