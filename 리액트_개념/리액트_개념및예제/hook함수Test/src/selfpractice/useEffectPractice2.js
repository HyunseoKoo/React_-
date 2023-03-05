import React, { useState, useEffect } from 'react';
import Timer from './component/Timer';

function UseEffectPractice2() {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}
export default UseEffectPractice2;
