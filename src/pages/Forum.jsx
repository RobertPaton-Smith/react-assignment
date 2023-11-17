import React, {useState} from "react";



export default function Forum() {
    const [posts, setPosts] = useState([]);
    
    function sendMessage() {
        let msgBox = document.getElementById("messageBox");
        let msg = msgBox.value;

        if (msg == undefined || msg.length > 0) {
            msgBox.value = "";
            let newElement = setPosts([...posts, { text: msg }]);

        }
        msgBox.focus()
    }

    return (
        <div id="mainContent">
            <h1>Forum</h1>
            <div id="forumPostsBox">
                {posts.map((post) => (
                    <p>{post.text}</p>
                ))}
            </div>
            <div>
                <input type="text" id="messageBox" autoFocus />
                <button onClick={sendMessage}>&gt;&gt;&gt;</button>
            </div>
        </div>
    );
}
