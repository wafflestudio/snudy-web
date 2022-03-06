import { Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './components/layout/Layout';
import Schedule from './components/schedule/Schedule';
import Overview from './components/snudyspace/SnudySpace';
import Todo from './components/todo/Todo';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Overview />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/todo" element={<Todo />} />
      </Route>
    </Routes>
  );
}

export default App;
