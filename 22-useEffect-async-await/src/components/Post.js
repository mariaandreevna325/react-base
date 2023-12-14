import React, { useEffect, useState } from "react";
import './Post.css';

function Post({ title, body, userId }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((res) => res.json())
            .then((userData) => {
                setUser(userData);
            })
            .catch((error) => console.log(error.message));
    }, [userId]);

    return (
        <div className="post">
            <h2>{title}</h2>
            <p>{body}</p>
            {user && <p className="userId">User ID: {user.id}</p>}
        </div>
    );
}

export default Post;