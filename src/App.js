import React from 'react';
import Data from './Utils/data.js';
import Header from './Views/Header';
import FolderList from './Views/FolderList';
import './App.css';

function App() {
  return <div className="App">
			<Header />
			<div className="folder">
				<FolderList data={Data} depth={0} />
			</div>
		</div>;
}

export default App;
