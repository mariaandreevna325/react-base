import { useState, useEffect } from 'react';
import Post from "./Post";

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function Posts() {
    const [postas, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
        try {
            const res = await fetch(API_URL);
            const postas = await res.json();
            setPosts(postas);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
        }
        fetchData();
    }, []);


    if (error) {
        return <h1>Error: {error}</h1>;
    }

    return (
        <>
            <h1>Posts</h1>
            <hr />
            {isLoading ? (
                <h1>Loading...</h1>
            ) : ( 
                postas.map((post) => <Post key={post.id} {...post} />)
            )}

        </>
    );
}

export default Posts;