import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Mdx from './mdx.mdx';
// Code highlighting
import 'prismjs/themes/prism.css';
// Normalize default style
import 'normalize.css';

function App() {
  return (
    <BrowserRouter>
      <Link to="/">root</Link>
      <Link to="mdx">mdx</Link>
      <hr />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/mdx" element={<Mdx />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
