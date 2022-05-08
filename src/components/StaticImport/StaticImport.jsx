import React from 'react';
import postsData from '../../assets/posts.json';
import commentsData from '../../assets/comments.json';
import todosData from '../../assets/todos.json';
import photosData from '../../assets/photos.json';

const RESOURCE_MAP = {
  posts: postsData,
  comments: commentsData,
  todos: todosData,
  photos: photosData,
};

export const StaticImport = () => {
  const [type, setType] = React.useState('posts');

  return (
    <div>
      <h1>Statically Imported Demo</h1>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="posts">Posts</option>
        <option value="comments">Comments</option>
        <option value="todos">Todos</option>
        <option value="photos">Photos</option>
      </select>
      <h2>Data</h2>
      <ul>
        {RESOURCE_MAP[type].map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};
