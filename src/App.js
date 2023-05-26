import './App.css'
import {Routes, Route} from "react-router-dom";
import Popular from "./Pages/Popular";
import NowPlaying from "./Pages/NowPlaying";
import TopRated from "./Pages/TopRated";
import Header from "./components/header/Header";
import Hero from "./Pages/Hero";
import Detail from "./Pages/DetailPages/Detail";
import DetailActors from "./Pages/DetailPages/Actors/DetailActors";
import Search from "./Pages/Search/search";


function App() {



  return (
      <>

          <Header/>
          <Hero/>
          <Routes>
              <Route path="/" element={<Popular/>}></Route>
              <Route path='/toprated' element={<TopRated/>}></Route>
              <Route path='/NowPlaying' element={<NowPlaying/>}></Route>
              <Route path='/movie/:id' element={<Detail/>}/>
              <Route path='/movie/search/:movieName' element={<Search/>}/>
              <Route path={'/movie/actors/:actorId'} element={<DetailActors/>}/>
          </Routes>

      </>
  );
}

export default App;
