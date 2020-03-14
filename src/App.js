import React from 'react';
import Data from './Utils/data.js';
import FolderList from './Views/FolderList';
import './App.css';

function App() {
  return (
    <div className="App">
      <FolderList data={Data} depth={0}/>
    </div>
  );
}

export default App;
