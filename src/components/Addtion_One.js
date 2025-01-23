import React from 'react';
import Hoc from './Hoc';

function Addtion_One({ count, increment }) {
    return (
        <>
            <p>Count: {count}</p>
            <button onClick={increment}>Addition</button>
        </>
    );
}

export default Hoc(Addtion_One);
