import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from "./Pages/Home";
import MyPlan from './Pages/MyPlan'
import Workouts from './Pages/Workouts'
import BulkWeek from './Pages/BulkWeek';
import ShrededWeek from './Pages/ShrededWeek'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/my-plan' element={<MyPlan />} />
        <Route path='/workouts' element={<Workouts />} />
        <Route path='/bulk-week' element={<BulkWeek />} />
        <Route path='/shreded-week' element={<ShrededWeek />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
