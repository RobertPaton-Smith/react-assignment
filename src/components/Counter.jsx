import React, { useEffect, useState } from "react";

// * implementation 1
// function Counter() {
//     const [count, setCount] = useState(0);

//     return (
//         <>
//             <h1>Current Count: {count}</h1>
//             <button onClick={() => setCount(count + 1)}>Update Count</button>
//         </>
//     );
// }

// * implementation 2
// function Counter()
// {
//     const [count, setCount] = useState(0);

//     function increment()
//     {
//         setCount(count + 1);
//     }

//     return (
//         <>
//             <h1>Current Count: {count}</h1>
//             <button onClick={increment}>
//                 Update Count
//             </button>
//         </>
//     );
// }

// * implementation 3 (with useEffect hooks and extended functionality)
function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component mounted');

        const handleClick = () => setCount((c) => c + 1);
        document.addEventListener('click', handleClick); // this doesn't bind to  button's update. 
                                                         // Notice each click on button is counted twice, outside counted once
        
        return () => {
            console.log("Component unmounted");
            document.removeEventListener('click', handleClick);
        }
    }, [])

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count])

    return (
        <>
            <h1>Current Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Update Count</button>
        </>
    );
}

export default Counter;

