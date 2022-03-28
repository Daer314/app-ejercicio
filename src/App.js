import { Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar'
import Home from "./Pages/Home/Home"
import MyPlan from './Pages/MyPlan/MyPlan'
import Workouts from './Pages/Workouts/Workouts'
import BulkWeek from './Pages/BulkWeek'
import ShrededWeek from './Pages/ShrededWeek'
import Login from "./Pages/Login/Login"
import Signup from "./Pages/Signup/Signup"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/log-in' element={<Login />} />
        <Route path='/my-plan' element={<MyPlan />} />
        <Route path='/workouts' element={<Workouts />} />
        <Route path='/bulk-week' element={<BulkWeek />} />
        <Route path='/shreded-week' element={<ShrededWeek />} />
      </Routes>
    </div>
  );
}

export default App;
