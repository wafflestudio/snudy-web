import { Routes, Route } from 'react-router-dom';

import './App.css';
import Assignment from './components/assignment/Assignment';
import Overview from './components/overview/Overview';
import Planner from './components/planner/Planner';
import Sidemenu from './components/Sidemenu';

function App() {
  return (
    <Routes>
      <Route element={<Sidemenu />}>
        <Route path="/" element={<Overview />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path="/planner" element={<Planner />} />
      </Route>
    </Routes>
  );
}

export default App;
