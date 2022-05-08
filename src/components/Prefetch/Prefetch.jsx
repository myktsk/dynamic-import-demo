import React from 'react';

const loadJson = (type) => {
  return new Promise((res, rej) => {
    import(/* webpackPrefetch: true */ `../../assets/${type}.json`).then(
      (data) => {
        res(data?.default);
      },
    );
  });
};

export const Prefetch = () => {
  const [type, setType] = React.useState('posts');
  const [data, setData] = React.useState({
    posts: undefined,
    comments: undefined,
    todos: undefined,
    photos: undefined,
  });

  React.useEffect(() => {
    const loadJsonAsync = async () => {
      const posts = await loadJson('posts');
      const comments = await loadJson('comments');
      const todos = await loadJson('todos');
      const photos = await loadJson('photos');

      setData({ posts, comments, todos, photos });
    };
    loadJsonAsync();
  }, []);

  return (
    <div>
      <h1>Dynamically Imported Demo</h1>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="posts">Posts</option>
        <option value="comments">Comments</option>
        <option value="todos">Todos</option>
        <option value="photos">Photos</option>
      </select>
      <h2>Data</h2>
      <ul>
        {data[type] &&
          data[type].length &&
          data[type].map((item) => (
            <li key={item.id}>{JSON.stringify(item)}</li>
          ))}
      </ul>
    </div>
  );
};
