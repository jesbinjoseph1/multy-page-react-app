import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Root from './components/root';
import Home from './components/Home';
import Todo from './components/Todo';
import Countries from './components/Countries';
import NotFound from './components/Notfound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="todo" element={<Todo />} />
          <Route path="countries" element={<Countries />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
