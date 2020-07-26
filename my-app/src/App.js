import React, { useState } from 'react';
import Tweet from './Tweet';


function App() {
    const [isRed, setRed] = useState(false);
    const [count, setCount] = useState(0);
    const [user, setUsers] = useState([
        { name: 'Dev Ed', message: 'Hello Therer ajhjahnsdasd' },
        { name: 'jon snow', message: 'Hello jon snow iand am dumb' },
        { name: 'arya stark', message: 'Hello iam arya  stark of winterfell' },
    ])

    const increment = () => {
        setCount(count + 1);
        setRed(!isRed)
    };
    return (
        <div className="app">
            {/* <h1 className={isRed ? 'red' : ''}>Change My color!</h1>
            <button onClick={increment}>Increment</button>
            <h1>{count}</h1> */}
            {user.map(user => (
                <Tweet name={user.name} message={user.message} />
            ))}

            {/* <Tweet name='deved' message='this is a random tweet' />
            <Tweet name='johnsnow' message='this is aasdasdasdasdasd' />
            <Tweet name='arya stark' message='girl is no one' />
            <Tweet name='tyrion' message='this is a random tweet' /> */}


        </div>

    )
}
export default App;