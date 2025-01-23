import React from 'react';
import Hoc from './Hoc';

function Addition_Second({ count, increment }) {
    return (
        <>
            <h1>Welcome To Addition_Second</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Addition</button>
        </>
    );
}

export default Hoc(Addition_Second);
