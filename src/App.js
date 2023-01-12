import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingPage,LiveGames,News,Play,Puzzles,SignIn } from "./component/pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path ='/' element ={<LandingPage />}/>
        <Route exact path ='/livegames' element ={<LiveGames />}/>
        <Route exact path ='/news' element ={<News />}/>
        <Route exact path ='/play' element ={<Play />}/>
        <Route exact path ='/puzzles' element ={<Puzzles />}/>
        <Route exact path ='/signin' element ={<SignIn />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
