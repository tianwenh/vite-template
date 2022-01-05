import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Mdx from './mdx.mdx';

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
