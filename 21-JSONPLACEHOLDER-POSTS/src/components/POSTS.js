import { useState, useEffect } from 'react';
import Post from './POST';

function Posts() {
  const [postas, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsondplaceholder.typicode.com/posts').then((res) =>
      res
        .json()
        .then((posts) => setPosts(posts))
        .catch((error) => console.log(error.message))
    );
  }, []);

  return (
    <div>
      {postas.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}

export default Posts;
