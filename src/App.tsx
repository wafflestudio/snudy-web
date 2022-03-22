import { Routes, Route, Navigate } from 'react-router-dom';

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
        <Route path="/" element={<Navigate replace to="/snudyspace" />} />
        <Route path="/snudyspace" element={<SnudySpace />} />
        <Route path="/snudyspace/:id" element={<SubjectDetail />} />

        <Route path="/schedule" element={<Schedule />} />
        <Route path="/todo" element={<Todo />} />
      </Route>
    </Routes>
  );
}

export default App;
