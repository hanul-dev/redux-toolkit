import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Todo from './Pages/Todo';
import TodoDetail from './Pages/TodoDetail';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/:id" element={<TodoDetail />} />
        </Routes>
      </Layout>
  </BrowserRouter>
      
  );
}

export default App;
