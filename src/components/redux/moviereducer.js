const initialState = {
  movie: [],
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        movie: [...state.movie, action.payload],
        error: null,
      };
    case "ADD_ERROR":
      return {
        ...state,

        error: action.payload,
      };

    case "GET_MOVIE":
      return {
        ...state,
        movie: action.payload,
      };
       case "EDIT_MOVIE":
      
      const updatedIndex = state.movie.findIndex(movie => movie._id === action.payload._id);
     
      const updatedMovies = [...state.movie];
      updatedMovies[updatedIndex] = action.payload;
      return {
        ...state,
        movies: updatedMovies,
        error: null,
      };
    case "GET_ERROR":
      return {
        ...state,

        movie: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
