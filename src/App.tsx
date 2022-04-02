import { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './components/common/layout/Layout';
import Schedule from './components/schedule/Schedule';
import SnudySpace from './components/snudyspace/SnudySpace';
import SubjectDetail from './components/subject-detail/SubjectDetail';
import Todo from './components/todo/Todo';

const Example = lazy(() => import('./components/example/Example'));

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<SnudySpace />} />
          <Route path="/space/:id" element={<SubjectDetail />} />

          <Route path="/schedule" element={<Schedule />} />
          <Route path="/todo" element={<Todo />} />

          {process.env.NODE_ENV === 'development' && <Route path="/example" element={<Example />} />}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
