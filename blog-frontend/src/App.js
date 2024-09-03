// src/App.js
import React from 'react';
import PostList from './components/PostList';
import CreatePostForm from './components/CreatePostForm';

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: '#398552' }}>
        <PostList />
      </div>
      <div style={{ backgroundColor: '#40dd72' }}>
        <CreatePostForm />
      </div>
    </div>
  );
}

export default App;
