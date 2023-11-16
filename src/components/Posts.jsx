import React, { useEffect, useState } from "react";

function Posts() 
{
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts () {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();

            setPosts(data);
        }

        fetchPosts();
    }, []);

    return (
        <div> 
            <h2>Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li> // give each item a unique key. Makes minimal change for virtual DOM easier to determine
                ))}
            </ul>
        </div>
    )
}

export default Posts
