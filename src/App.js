import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './components/Header';
import Login from './components/Login/Login';
import Footer from './components/Foooter/Footer';
import MovieCard from './components/Movie/MovieCard';
import EditMovie from './components/Movie/EditMovie';
import AddMovie from './components/Movie/AddMovie';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/movie" element={<MovieCard />} />
          <Route path="/add" element={<AddMovie />} />
          <Route path="/editmovie/:id" element={<EditMovie />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
