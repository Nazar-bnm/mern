import React from 'react';

export const Counter = ({ test }) => {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <h2>Counter Component!</h2>
      <hr />
      <div>
        Props
        {' '}
        {test}
      </div>
      <hr />
      <h3>
        Counter
        {' '}
        {counter}
      </h3>
      <button type="button" onClick={() => setCounter(counter + 1)}>Increase</button>
      <button type="button" onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
};
