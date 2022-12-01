import { useState, useCallback } from 'react';

import './App.css';
import Counter from './components/Counter';
import UserList from './components/UserList';

function App() {
  const [value, setValue] = useState("counter");

    const handleClick = useCallback(() => {
        setValue((previousValue) => {
            if (typeof(previousValue) == 'string') {
                return 0;
            }
            return previousValue + 1;
        });
    }, []);

  return (
    <div className="App">
      <Counter value={value} handleClick={handleClick} />
      <UserList />
    </div>
  );
}

export default App;
