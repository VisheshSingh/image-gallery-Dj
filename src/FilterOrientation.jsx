import React, { useState } from 'react';

const FilterOrientation = ({ currentSelection, SetCurrentSelection }) => {
  const [landscape, setLandscape] = useState(false);
  const [portrait, setPortrait] = useState(false);
  const [all, setAll] = useState(false);
  return (
    <div>
      <h2>Orientation</h2>
      <input
        type='radio'
        value={landscape}
        onChange={(e) => setLandscape((prevState) => !prevState)}
      />
      <span>Landscape</span>
      <input
        type='radio'
        value={portrait}
        onChange={(e) => setLandscape((prevState) => !prevState)}
      />
      <span>Portrait</span>
      <input
        type='radio'
        value={all}
        onChange={(e) => setLandscape((prevState) => !prevState)}
      />
      <span>All</span>
    </div>
  );
};

export default FilterOrientation;
