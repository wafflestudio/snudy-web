import { Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './components/common/layout/Layout';
import Schedule from './components/schedule/Schedule';
import SnudySpace from './components/snudyspace/SnudySpace';
import SubjectDetail from './components/snudyspace/subject-detail/SubjectDetail';
import Todo from './components/todo/Todo';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<SnudySpace />} />
        <Route path="/space/:id" element={<SubjectDetail />} />

        <Route path="/schedule" element={<Schedule />} />
        <Route path="/todo" element={<Todo />} />
      </Route>
    </Routes>
  );
}

export default App;
