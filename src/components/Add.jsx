import React, { useState } from 'react';

const Add = () => {
  const [blogName, setBlogName] = useState('');
  const [description, setDescription] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    
    console.log('Blog submitted:', { blogName, description, authorName });
  };

  return (
    <div>
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Blog Name:</label>
          <input type="text" value={blogName} onChange={event => setBlogName(event.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={event => setDescription(event.target.value)} />
        </div>
        <div>
          <label>Author Name:</label>
          <input type="text" value={authorName} onChange={event => setAuthorName(event.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Add;
