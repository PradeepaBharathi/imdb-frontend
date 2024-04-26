import React, { useEffect } from "react";
import "./moviecard.css";
import { Box, Card, CardHeader, IconButton } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../redux/action";

function MovieCard() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movie);

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  return (
    <div className="container">
      {movies.map((movie) => (
        <Card
          key={movie._id}
          className="individual-blog"
          sx={{ maxWidth: "15rem", margin: "1rem" }}
        >
          <Box display={"flex"} sx={{ width: "10px" }}>
            <Link to={`/editmovie/${movie._id}`}>
              <IconButton sx={{ marginLeft: "auto" }}>
                <EditIcon />
              </IconButton>
            </Link>
          </Box>

          <CardMedia
            component="img"
            className="movie-img"
            height="194"
            image={movie.image}
            alt={movie.title}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Title: {movie.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Year of Release: {movie.yearOfRelease}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Producer: {movie.producer}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Actor: {movie.actors}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default MovieCard;
