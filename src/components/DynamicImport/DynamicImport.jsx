import React from 'react';

const loadJson = (type) => {
  return new Promise((res, rej) => {
    import(`../../assets/${type}.json`).then((data) => {
      res(data?.default);
    });
  });
};

export const DynamicImport = () => {
  const [type, setType] = React.useState('posts');
  const [data, setData] = React.useState();

  React.useEffect(() => {
    const loadJsonAsync = async () => {
      const data = await loadJson(type);
      setData(data);
    };
    loadJsonAsync();
  }, [type]);

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
        {data &&
          data.length &&
          data.map((item) => <li key={item.id}>{JSON.stringify(item)}</li>)}
      </ul>
    </div>
  );
};
