import React, {useState, useEffect, useRef} from "react";
import "../styles/Forum.css"

export default function Forum() {
    const [username, setUsername] = useState("anonymousUser1");

    const [posts, setPosts] = useState([
        {
            timestamp: "09:00:00 25/12/2021",
            text: "Hello, welcome to the forum",
            user: "admin101",
        },
        {
            timestamp: "09:00:00 25/12/2021",
            text: "Obviously, it doesn't actually work (this is just a front-end). But it works well as a little demo",
            user: "admin101",
        },
        {
            timestamp: "09:00:00 25/12/2021",
            text: "Feel free to type some things in yourself.",
            user: "admin101",
        },
        {
            timestamp: "09:00:00 25/12/2021",
            text: "NOTICE how the last forum post will always be automatically scrolled to if enough posts are on the page",
            user: "admin101",
        },
        {
            timestamp: "09:00:00 25/12/2021",
            text: "Also, you can use the >> button, or just hit enter when the text box is in focus.",
            user: "admin101"
        },
    ]);
    const messageBox = useRef(null); 
    const endOfPostsPosition = useRef(null);
    
    function clearMessages() {
        setPosts([]);
        endOfPostsPosition.current?.scrollIntoView();
    }

    function RenderMessage({forumPost}) {
        const forumClass = forumPost.user == username ? "userForumPost" : "forumPost";
        return (
            <div className={forumClass}>
                <span className="postTimeStamp">{forumPost.timestamp}</span>
                <span>@{forumPost.user}</span>
                <span>{forumPost.text}</span>
            </div>
        );
    }
    
    function sendMessage() {
        let msg = messageBox.current?.value;

        if (msg == null || msg == undefined || msg.length == 0) 
        {
            return;
        }

        messageBox.current.value = "";
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
        setPosts([...posts, { text: msg, timestamp: str, user: username }]);

        messageBox.current?.focus()
        endOfPostsPosition.current?.scrollIntoView();
    }

    useEffect(() => {
        const listener = (event) => {
            if (event.code == "Enter" && !event.repeat) {
                console.log(posts.length)
                sendMessage();
            }
        };
        messageBox.current?.addEventListener("keypress", listener);

        return () => messageBox.current?.removeEventListener("keypress", listener);


    }, [posts]);

    return (
        <div id="mainContent">
            <h1>Forum</h1>
            <div id="forumPostsBox">
                {posts.map((post, i) => (
                    <RenderMessage key={i} forumPost={post} />
                ))}
                <span ref={endOfPostsPosition}></span>
            </div>
            <div id="userInteractionArea">
                <input type="text" id="messageBox" ref={messageBox} autoFocus />
                <button onClick={sendMessage}>&gt;&gt;&gt;</button>
                <button 
                    onClick={() => {
                        setPosts([]);
                        endOfPostsPosition.current?.scrollIntoView();
                    }}
                >CLEAR</button>
            </div>
        </div>
    );
}
