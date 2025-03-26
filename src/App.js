import './index.css';
import ColorBlock from './ColorBlock';
import AddColor from './AddColor';
import { useState } from 'react';

function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
      <ColorBlock
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <AddColor
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
