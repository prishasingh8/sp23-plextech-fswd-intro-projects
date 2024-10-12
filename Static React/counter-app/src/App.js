
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    let incrementedCount = count + 1
    setCount(incrementedCount)
  }
  const decrementCount = () => {
    let decrementedCount = count - 1
    setCount(decrementedCount)
  }

  //const [backColor, setBackColor] = useState('lightblue')

  
  return (
    <div className="App" style={{ backgroundColor: 'lightpink', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{textAlign: 'center'}}>
        <h1 style={{ marginBottom: '20px' }}>{count}</h1>
        <div>
        <button 
            onClick={decrementCount}
            style={{
              borderRadius: '75%'
            }}>-</button>
          <button 
            onClick={incrementCount}
            style={{
              borderRadius: '75%'
            }}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
