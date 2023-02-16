import { useEffect, useRef, useState } from 'react';

function Q3components({ gameStart, setCount }) {
  const TimerRef = useRef(0);

  useEffect(() => {
    TimerRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 2000);

    return () => {
      clearInterval(TimerRef.current);
      setCount(0);
    };
  }, [gameStart]);

  return <div> 🏃‍♂️ 줄넘기 ... ing </div>;
}

export default Q3components;
