import { Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './components/layout/Layout';
import Schedule from './components/schedule/Schedule';
import SnudySpace from './components/snudyspace/SnudySpace';
import SubjectDetail from './components/subject-detail/SubjectDetail';
import Todo from './components/todo/Todo';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<SnudySpace />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/subject/:id" element={<SubjectDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
