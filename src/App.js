import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router ,
        Route, Routes} from 'react-router-dom'
import ShowCourse from './Components/ShowCourse';


function App() {
  return (
    <Router>
    <Home />
   <Routes>
    <Route path="/" element={ <ShowCourse />} />
   </Routes>
  </Router>
  );
}

export default App;
