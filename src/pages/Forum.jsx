import React, { useState, useEffect } from "react";
import "../styles/Forum.css";

export default function Forum() {
    const [posts, setPosts] = useState([]);

    function RenderMessage({ forumPost }) {
        return (
            <div className="forumPost">
                <span className="postTimeStamp">{forumPost.timestamp}</span>
                <span>{forumPost.text}</span>
            </div>
        );
    }

    function sendMessage() {
        let msgBox = document.getElementById("messageBox");
        let msg = msgBox.value;

        if (msg != undefined || msg.length > 0) {
            msgBox.value = "";
            let date = new Date();
            let str =
                date.getHours() +
                ":" +
                date.getMinutes() +
                ":" +
                date.getSeconds() +
                " " +
                date.getDay() +
                "/" +
                date.getMonth() +
                "/" +
                date.getFullYear();
            setPosts([...posts, { text: msg, timestamp: str }]);

            console.log(posts.length);
        }
        msgBox.focus();
        const bottom = document.getElementById("endOfPostsPosition");
        bottom.scrollIntoView();
    }

    return (
        <div id="mainContent">
            <h1>Forum</h1>
            <div id="forumPostsBox">
                {posts.map((post, i) => (
                    <RenderMessage key={i} forumPost={post} />
                ))}
                <span id="endOfPostsPosition"></span>
            </div>
            <div id="userInteractionArea">
                <input type="text" id="messageBox" autoFocus />
                <button onClick={sendMessage}>&gt;&gt;&gt;</button>
            </div>
        </div>
    );
}
