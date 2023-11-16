import "../styles/App.css"
import React, { Component } from "react";

export default function Home()
{
    function drawTriangle(x, y, r, g, b)
    {
        let halfWidth = (Math.floor(Math.random() * 5) + 1) * 10;

        let xL = x - halfWidth;
        let xR = x + halfWidth;
        let yT = y - halfWidth;
        let yB = y + halfWidth;

        const canvas = document.getElementById("picturePastingCanvas");
        var ctx = canvas.getContext("2d");

        ctx.strokeStyle = `rgb(${r}, ${b}, ${g})`

        // position at bottom left edge
        ctx.moveTo(xL, yB);

        // draw around triangle
        ctx.lineTo(xR, yB);
        ctx.stroke();
        ctx.lineTo(x, yT);
        ctx.stroke();
        ctx.lineTo(xL, yB);
        ctx.stroke();
    }
    function drawCircle(x, y, r, g, b)
    {
        const canvas = document.getElementById("picturePastingCanvas");
        var ctx = canvas.getContext("2d");

        ctx.strokeStyle = `rgb(${r}, ${b}, ${g})`;

        let startAngle = 0;
        let endAngle = 2 * Math.PI;
        let radius = Math.floor(Math.random() * 80) + 11;

        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle);
        ctx.stroke();
    }

    function handleClickMe()
    {
        // generate random pos (within bounds)
        let MAX_X = 300; let MAX_Y = 250;
        let x = Math.floor(Math.random() * MAX_X);
        let y = Math.floor(Math.random() * MAX_Y);

        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        let drawingTriangle = Boolean(Math.floor(Math.random() * 2));

        if (drawingTriangle)
        {
            drawTriangle(x, y, r, g, b);
        }
        else 
        {
            drawCircle(x, y, r, g, b);
        }

    }

    return (
        <>
            <h1>Home</h1>
            <div id="mainContent">
                <div>
                    <h2>Introduction</h2>
                    <p>
                        Hello to anybody unfortunate enough to be tasked with
                        peer-assessing this website.
                    </p>
                    <p>
                        I've made a few demo websites before, using a few other stacks, but my CSS 
                        has always lagged behind, so please be gentle when marking :)
                    </p>
                    <p>
                        I chose to implement the pages as seen here to showcase my HTML, CSS, JavaScript and React.js proficiency.
                        I hope that it comes through, and that it isn't too boring to assess. If you are marking my work, and want 
                        the same done for your website, the best place to reach me is my personal email: robert.p-s@live.co.uk 
                    </p>
                </div>

                <div>
                    <h2>Clickity Click!</h2>
                    <button onClick={handleClickMe}>Click Me! <i>(do it now)</i></button>
                    <br/>
                    <canvas id="picturePastingCanvas"/>
                    {/* <br/> */}
                </div>
            </div>
        </>
    );
}

 