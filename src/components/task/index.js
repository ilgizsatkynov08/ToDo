import React from 'react';

const Task = ({el}) => {
    return (
        <div className='task'>
        {
            el.name
        }
        </div>
    );
};

export default Task;