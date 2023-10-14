import React from 'react';
import ColorPicker from './ColorPicker';

const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

function App() {
  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
