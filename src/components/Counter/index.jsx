import React from "react";


const Counter = (props) => {
    const { handleClick, value } = props;

    return (
        <div>
            <p>{value}</p>
            <button
                type="button"
                onClick={handleClick}
            >
                Click me
        </button>
        </div>
    );
};

export default Counter;