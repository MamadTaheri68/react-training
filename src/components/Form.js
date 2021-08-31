import React, { useState } from 'react';

const Form = () => {

    const [data, setData] = useState(["item"])

    return (
        <div>
            <button onClick={() => setData([...data, "new item"])}>Add</button>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default Form;