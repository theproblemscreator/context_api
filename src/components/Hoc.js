import React, { useState } from 'react';

function Hoc(OriginalComponent) {
    
    return function EnhancedComponent() {
        const [count, setCount] = useState(0);

        const increment = () => {
            setCount(count + 1);
        };

        return <OriginalComponent count={count} increment={increment} />;
    };
}

export default Hoc;
