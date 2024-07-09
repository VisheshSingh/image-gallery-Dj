import { useState } from 'react';
import './App.css';
import Gallery from './Gallery';

const sizes = [
  {
    id: 1,
    width: 966,
    height: 1320,
  },
  {
    id: 2,
    width: 2550,
    height: 1700,
  },
  {
    id: 3,
    width: 975,
    height: 1300,
  },
  {
    id: 4,
    width: 2389,
    height: 1344,
  },
  {
    id: 5,
    width: 2564,
    height: 1680,
  },
  {
    id: 6,
    width: 934,
    height: 1401,
  },
  {
    id: 7,
    width: 931,
    height: 1401,
  },
  {
    id: 8,
    width: 2550,
    height: 1700,
  },
  {
    id: 9,
    width: 934,
    height: 1401,
  },
  {
    id: 10,
    width: 934,
    height: 1401,
  },
];

const processSizes = sizes.map((size) => {
  if (size.width < size.height) {
    return { ...size, isPortrait: true };
  } else {
    return { ...size, isPortrait: false };
  }
});
console.log(processSizes);

function App() {
  const [processImgs, setProcessImgs] = useState(processSizes);
  const [orientation, setOrientation] = useState('All');
  const onOptionChange = (e) => {
    setOrientation(e.target.value);
  };

  return (
    <>
      <h1>Image gallery</h1>
      <input
        type='radio'
        name='orientation'
        value='Landscape'
        id='landscape'
        checked={orientation === 'Landscape'}
        onChange={onOptionChange}
      />
      <label htmlFor='landscape'>Landscape</label>

      <input
        type='radio'
        name='orientation'
        value='Portrait'
        id='portrait'
        checked={orientation === 'Portrait'}
        onChange={onOptionChange}
      />
      <label htmlFor='portrait'>Portrait</label>

      <input
        type='radio'
        name='orientation'
        value='All'
        id='all'
        checked={orientation === 'All'}
        onChange={onOptionChange}
      />
      <label htmlFor='all'>All</label>
      <Gallery imgs={processImgs} orientation={orientation} />
    </>
  );
}

export default App;
