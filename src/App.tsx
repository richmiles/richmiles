import React from 'react';
import * as ReactDOM from 'react-dom/client';

export function App() {
  return (
    <div>
      Hello world.
    </div>

  )
}
  

const root = ReactDOM.createRoot(document.getElementById("root")!)
root.render(<App />)
